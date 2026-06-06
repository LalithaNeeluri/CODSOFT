const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    taskName: {
      type: String,
      required: true,
    },
    assignedTo: {
      type: String,
    },
    deadline: {
      type: Date,
    },
    status: {
      type: String,
      default: "Pending",
    },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);