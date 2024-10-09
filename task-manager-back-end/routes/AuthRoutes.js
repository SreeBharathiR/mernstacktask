const express = require("express");
const {
  createnewUser,
  login,
  logout,
} = require("../controllers/AuthController");
const router = express.Router();
router.post("/signup", createnewUser);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
