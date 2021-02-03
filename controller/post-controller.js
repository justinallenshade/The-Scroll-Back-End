const express = require("express");
const router = express.Router();
const postRouter = require("../models/blog-post");

//list all posts
router.get("/", (req, res) => {
  postRouter.find({})
      .then((post) => res.json(post));
});

module.exports = router;
