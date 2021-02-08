// require the mongoose package from the connection pool
const mongoose = require('../db/connections');

// make a new schema with 3 properties, and assign it to a variable
const LoginSchema = new mongoose.Schema(
    {
        username: String,
        email: String,
        password: String
    }
);

// instantiate the model, calling it "Bookmark" and with the schema we just made
const Login = mongoose.model('Login', LoginSchema);

// export the newly created model
module.exports = Login;
