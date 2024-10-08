const SignupModel = require("../models/SignupModel");
const AuthLogin = require("../models/AuthLogin");
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log(email);
    const user = await SignupModel.findOne({ email });
    if (user) {
      if (user.password === password) {
        await AuthLogin.create(req.body);
        res.status(200).json({
          message: "login",
        });
      }
    }
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

exports.logout = async (req, res) => {
  const { email } = req.body;
  await AuthLogin.findOneAndDelete({ email });
  res.status(200).json({
    message: "user logout",
  });
};
