const express = require("express");
const { createIndexes } = require("../models/login-data");
const router = express.Router();
const loginRouter = require("../models/login-data");

//list all posts
router.get("/", (req, res) => {
    loginRouter.find({}).then((post) => res.json(post));
});

// list a post by id
router.get("/:username", (req, res) => {
    const username = req.params.username;
    const password = req.query.pass

    loginRouter.findOne({ username: username })
    .then((x) => {
    if(x.password === password){res.json(x)}
    else{res.send("wrong password")}});
  
  });

// create a new post
router.post("/", (req, res, next) => {
    const username = req.body[0].username
    const email = req.body[0].email
    
    loginRouter.find({ username: username })
    .then((x) => {
      if(x[0] === undefined){
        loginRouter.find({ email: email })
        .then((y) => {
          if(y[0] === undefined){
            loginRouter.create(req.body)
            .then((router) => res.json(router))
            .catch(next);
          }
          else{res.send("email was taken")}
        })
      }
      else{res.send("username was taken")}
    
    })
    
});

router.delete("/:username", (req, res) => {
    const username = req.params.username;
    loginRouter.findOneAndDelete({ username: username }).then((x) => res.json(x));
  });
  
  router.put("/:username", (req, res) => {
    loginRouter
      .findOneAndUpdate(
        { username: req.params.username }, 
        req.body)
      .then(loginRouter.find({})
      .then(router => res.json(router)))
  });
  
module.exports = router;
