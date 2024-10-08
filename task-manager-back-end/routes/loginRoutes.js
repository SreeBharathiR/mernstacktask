const express = require("express");
const { login, logout } = require("../controllers/loginController");
const router = express.Router();
console.log("router reached");
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
