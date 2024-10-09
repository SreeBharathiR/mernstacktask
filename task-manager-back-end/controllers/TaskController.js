const Task = require("../models/Task");

exports.createTask = async (req, res, next) => {
  const { title, endDate, taskStatus } = req.body;
  const userId = req.user.userId;
  try {
    let task = await Task.create({ title, endDate, taskStatus, user: userId });
    res.status(201).json({
      message: "Task Created",
      task,
    });
  } catch (e) {
    next(e);
  }
};

exports.updateTask = async (req, res, next) => {
  // const {title,endDate,taskStatus}=req.body;
  try {
    let task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Task Updated",
      task,
    });
  } catch (e) {
    next(e);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    let task = await Task.findByIdAndDelete(req.params.id);
    res.status(202).json({
      message: "Task Deleted",
      task,
    });
  } catch (e) {
    next(e);
  }
};

exports.getAllTasks = async (req, res, next) => {
  const userId = req.user.userId;
  try {
    let tasks = await Task.find({ user: userId });
    res.status(200).json({
      message: "All Tasks",
      tasks,
    });
  } catch (e) {
    next(e);
  }
};
