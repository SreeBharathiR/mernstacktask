const express = require("express");
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");
const { authorization } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authorization("admin"), getAllUsers);
router.get("/:id", authorization("admin", "user"), getUserById);
router.patch("/:id", authorization("admin", "user"), updateUser);
router.delete("/:id", authorization("admin", "user"), deleteUser);
module.exports = router;
