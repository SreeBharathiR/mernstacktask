const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email required"],
    unique: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email format is wrong",
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password atleast 8 charecters long"],
    match: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
    ],
  },
});

const AuthLogin = mongoose.model("loginuser", loginSchema);

module.exports = AuthLogin;
