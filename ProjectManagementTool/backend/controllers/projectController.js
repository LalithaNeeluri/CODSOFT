const Project = require("../models/Project");

// Create Project
const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);

    res.status(201).json({
      message: "Project Created Successfully",
      project,
    });
  } catch (error) {
    console.log("Create Project Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    res.json(projects);
  } catch (error) {
    console.log("Get Projects Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Project
const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Project Updated Successfully",
      project,
    });
  } catch (error) {
    console.log("Update Project Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Project
const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);

    res.json({
      message: "Project Deleted Successfully",
    });
  } catch (error) {
    console.log("Delete Project Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
};