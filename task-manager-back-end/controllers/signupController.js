const SignupModel = require("../models/SignupModel");

exports.getAllUsers = async (req, res) => {
  const users = await SignupModel.find();
  res.status(200).json({
    message: "Fetched all users",
    users,
  });
};
exports.createnewUser = async (req, res) => {
  try {
    // console.log(req.body);
    const user = await SignupModel.create(req.body);
    console.log(user);
    res.status(201).json({
      message: "User Created",
      user,
    });
  } catch (e) {
    console.log(e.message);
    message: e.message;
  }
};
