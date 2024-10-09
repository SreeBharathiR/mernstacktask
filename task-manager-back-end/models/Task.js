const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "task title required"],
  },
  taskStatus: {
    type: String,
    default: "Not Started",
  },
  endDate: {
    type: Date,
    default: null,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const Task = mongoose.model("task", taskSchema);
module.exports = Task;
