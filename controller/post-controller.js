const express = require("express");
const app = express.Router();
const postRouter = "../models/blog-post.js";

//list all posts
app.get("/", (req, res) => {
  postRouter.find({}).then((post) => res.json(post));
});

module.exports = postRouter;
