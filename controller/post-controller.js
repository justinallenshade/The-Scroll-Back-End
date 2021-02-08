const express = require("express");
const router = express.Router();
const postRouter = require("../models/blog-post");

//list all posts
router.get("/", (req, res) => {
  postRouter.find({}).then((post) => res.json(post));
});

// list a post by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  postRouter.findOne({ _id: id }).then((x) => res.json(x));
});

// create a new post
router.post("/", (req, res, next) => {
  postRouter
    .create(req.body)
    .then((router) => res.json(router))
    .catch(next);
});

// update a single post
router.put("/:id", (req, res) => {
  postRouter
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(postRouter.find({}).then((router) => res.json(router)));
});

// delete a person by id
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  postRouter.findOneAndDelete({ _id: id }).then((x) => res.json(x));
});

module.exports = router;
