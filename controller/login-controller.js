const express = require("express");
const router = express.Router();
const loginRouter = require("../models/login-data");


// list a post by body
router.get("/", (req, res) => {
    const username = req.body[0].username;
    const password = req.body[0].password;

    loginRouter.find({ username: username })
    .then((x) => {
    if(x !== undefined){
      if(x.password === password){res.json(x)}
      else{res.send("wrong password")}
    }
    else{res.send("username does not exist")}})
  });

// create a new post
router.post("/", (req, res, next) => {
    const username = req.body.username
    const email = req.body.email
    
    
    loginRouter.find({ username: username })
    .then((x) => {
      if(x === undefined){
        loginRouter.find({ email: email })
        .then((y) => {
          if(y === undefined){
            loginRouter.create(req.body)
            .then((router) => res.json(router))
            .catch(next);
          }
          else{res.send(`email was taken ${req}`)}
        })
      }
      else{res.send(`username was taken ${req}`)}
    
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
