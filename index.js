const express = require("express");
const app = express();
const postController = require("./controller/post-controller");
const loginController = require('./controller/login-controller')

const cors = require("cors");
var whitelist = ['https://the-scroll-back-end.herokuapp.com/', 'http://localhost:3000/']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}
 
app.use(cors(whitelist, corsOptionsDelegate));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use("/post", postController);
app.use("/login", loginController);

// launching
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`PORT: ${app.get("port")} `);
});
