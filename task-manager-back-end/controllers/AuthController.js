const AuthUser = require("../models/AuthUser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createnewUser = async (req, res, next) => {
  const {
    name,
    email,
    password,
    age,
    country,
    purpose,
    gender,
    address,
    category,
  } = req.body;
  try {
    // console.log(req.body);

    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword);
    const user = await AuthUser.create({
      name,
      email,
      password: hashedPassword,
      age,
      country,
      purpose,
      gender,
      address,
      category,
    });
    console.log(user);
    res.status(201).json({
      message: "User Created",
      user,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    console.log(email);
    const user = await AuthUser.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRETKEY,
      { expiresIn: process.env.JWT_EXPIRYTIME }
    );
    res.cookie("jwt", token, { httpOnly: true, maxAge: 3600000 });
    res.status(200).json({
      message: "login",
    });
  } catch (e) {
    next(e);
  }
};

exports.logout = async (req, res) => {
  res.cookie("jwt", "", { httpOnly: true });
  res.status(200).json({
    message: "user logout",
  });
};
