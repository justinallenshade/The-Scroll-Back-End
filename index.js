const express = require("express");
const app = express();
const postController = require("./controller/post-controller");

const cors = require("cors");
app.use(cors());

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use("/post", postController);


// launching
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`PORT: ${app.get("port")} `);
});
