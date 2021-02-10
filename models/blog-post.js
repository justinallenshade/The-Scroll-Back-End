// require the mongoose package from the connection pool
const mongoose = require("../db/connections");

// make a new schema with 3 properties, and assign it to a variable
const postSchema = new mongoose.Schema({
  username: { type: String},
  title: { type: String },
  dateCreated: { type: Date },
  body: { type: String },
  category: { type: String },
});

// instantiate the model, calling it "Bookmark" and with the schema we just made
const Post = mongoose.model("Post", postSchema);

// export the newly created model
module.exports = Post;
