const express = require("express");
const router = express.Router();
const loginRouter = require("../models/login-data");

//list all posts
router.get("/", (req, res) => {
    loginRouter.find({}).then((post) => res.json(post));
});

// list a post by id
router.get("/:username", (req, res) => {
  const id = req.params.id;
  loginRouter.findOne({ _id: id }).then((x) => res.json(x));
});

// create a new post
router.post("/", (req, res, next) => {
 
    loginRouter.create(req.body)
    .then((router) => res.json(router))
    .catch(next);
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
