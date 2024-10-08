const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name required"],
    },
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
    gender: {
      type: String,
      required: [true, "Gender required"],
    },
    age: {
      type: Number,
      required: [true, "Age required"],
      min: [15, "Age must be greater than 14"],
      max: [100, "Age must below 100"],
    },
    country: {
      type: String,
      required: [true, "country required"],
    },
    address: {
      type: String,
      required: [true, "Address requried"],
    },
    status: {
      type: String,
      required: [true, "status required"],
    },
    purpose: {
      type: String,
      required: [true, "Purpose of using this web required"],
    },
    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const SignupModel = mongoose.model("signup", signupSchema);

module.exports = SignupModel;
