const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks,
  deleteTask,
  getTasksByProject,
} = require("../controllers/taskController");

// CREATE TASK
router.post("/", createTask);

// GET ALL TASKS
router.get("/", getTasks);

// GET TASKS BY PROJECT (⭐ THIS WAS MISSING)
router.get("/project/:projectId", getTasksByProject);

// DELETE TASK
router.delete("/:id", deleteTask);

module.exports = router;