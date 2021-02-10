const express = require("express");
const app = express();
const postController = require("./controller/post-controller");
const loginController = require('./controller/login-controller')
const methodOverride = require('method-override');

const cors = require("cors");

app.use(cors())


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// routers
app.use("/post", postController);
app.use("/login", loginController);

// launching
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`PORT: ${app.get("port")} `);
});
