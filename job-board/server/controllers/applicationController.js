const Application = require("../models/Application");

exports.applyJob = async (req, res) => {
  try {
    const application = await Application.create({
      candidate: req.user.id,
      job: req.params.jobId,
      resume: req.file.filename,
    });

    res.status(201).json({
      message: "Application Submitted Successfully",
      application,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.myApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      candidate: req.user.id,
    }).populate("job");

    res.json(applications);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};