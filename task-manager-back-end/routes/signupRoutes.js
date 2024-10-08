const express = require("express");
const {
  getAllUsers,
  createnewUser,
} = require("../controllers/signupController");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createnewUser);
module.exports = router;
