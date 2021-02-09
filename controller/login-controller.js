const express = require("express");
const router = express.Router();
const loginRouter = require("../models/login-data");


// list a post by body
router.get("/", (req, res) => {
    const username = req.params.username;
    const password = req.params.password;

    loginRouter.find({ username: username })
    .then((x) => {
    if(x !== undefined){
      if(x.password === password){res.json(x)}
      else{console.log(req.params), res.send("wrong password")}
    }
    else{res.send("username does not exist")}})
  });

// create a new post
router.post("/", async (req, res) => {
    const username = req.body.username
    const email = req.body.email
   
    const user = await loginRouter.findOne({ username : username})
    const mail = await loginRouter.findOne({ email: email})
    
    if( !user ){
      res.status(500).json({
        message: "username not valid"
      })
    }
    else{
      if( !mail ){
        res.status(500).json({
          message: "email not valid"
        })
      }
      else{
        if(user.password === req.body.password){
          res.json({
            data: user,
            message: `welcome back ${user.username}` 
          })
        }
        else{
          res.status(500).json({
            message: 'password is incorect'
        })
      }
    }
  }
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
