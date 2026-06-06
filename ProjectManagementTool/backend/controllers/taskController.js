const Task = require("../models/Task");

// CREATE TASK
const createTask = async (req, res) => {
  try {
    console.log("TASK RECEIVED:", req.body);

    const { taskName, assignedTo, projectId } = req.body;

    if (!taskName || !assignedTo || !projectId) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const task = await Task.create({
      taskName,
      assignedTo,
      projectId,
    });

    res.status(201).json(task);
  } catch (error) {
    console.log("ERROR:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// GET ALL TASKS
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET TASKS BY PROJECT ⭐ (THIS WAS MISSING)
const getTasksByProject = async (req, res) => {
  try {
    const tasks = await Task.find({
      projectId: req.params.projectId,
    });

    res.json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE TASK
const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task Deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createTask,
  getTasks,
  deleteTask,
  getTasksByProject, // ⭐ IMPORTANT ADD THIS
};