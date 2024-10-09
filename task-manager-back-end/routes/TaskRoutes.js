const express = require("express");
const {
  createTask,
  updateTask,
  deleteTask,
  getAllTasks,
} = require("../controllers/TaskController");

const router = express.Router();
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/", getAllTasks);

module.exports = router;
