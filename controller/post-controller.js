const express = require("express");
const router = express.Router();
const postRouter = require("../models/blog-post");

//list all posts
router.get("/", (req, res) => {
  postRouter.find({}).then((post) => res.json(post));
});

// create a new post
router.post("/", (req, res) => {
  postRouter
    .create(req.body)
    .then((router) => res.json(router))
});

// update a single post
router.put("/", (req, res) => {
  postRouter
    .findOneAndUpdate({ _id: req.body.id }, req.body)
    .then(postRouter.find({}))
    .then((router) => res.console.log(json(router)));
});

// delete a person by id
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  postRouter.findOneAndDelete({ _id: id }).then((x) => res.json(x));
});

module.exports = router;
