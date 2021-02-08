const BlogPost = require("../models/blog-post");
const PostSeeds = require("./seeds.json");

BlogPost.deleteMany({})
  .then(() => {
    return BlogPost.insertMany(PostSeeds);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });
