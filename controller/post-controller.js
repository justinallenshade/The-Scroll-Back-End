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

//create a new post
// router.post("/", (req, res, next) => {
//   console.log("in post");
//   console.log(req.body);
//   postRouter
//     .create(req.body)
//     .then((x) => res.json(x))
//     .catch(next);
// });

//update a single post
// router.put("/:id", (req, res) => {
//   console.log("you are in update route");
//   const id = req.params.id;
//   const updateVals = req.body;
//   postRouter
//     .findOneAndUpdate({ _id: id }, updateVals)
//     .then((postRouter) => res.json(postRouter));
// });

//update a single post
// router.put("/:id", (req, res) => {
//   let id = req.params.id;
//   let updateVal = req.body;

//   postRouter
//     .findOneAndUpdate({ _id: id }, updateVal)
//     .then(postRouter.find({}).then((x) => res.json(x)));
// });

// delete a person by id
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  postRouter.findOneAndDelete({ _id: id }).then((x) => res.json(x));
});

module.exports = router;
