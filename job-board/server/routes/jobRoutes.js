const express = require("express");
const Job = require("../models/Job");
const Application = require("../models/Application");

const auth = require("../middleware/auth");
const upload = require("../middleware/upload");

const router = express.Router();


// ================================
// ADD JOB (EMPLOYER ONLY)
// ================================
router.post("/add", auth, async (req, res) => {
  try {
    if (req.user.role !== "employer") {
      return res.status(403).json({ message: "Only employers can post jobs" });
    }

    const job = await Job.create({
      ...req.body,
      createdBy: req.user.id
    });

    res.status(201).json({
      message: "Job Added Successfully",
      job
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ================================
// GET EMPLOYER JOBS
// ================================
router.get("/employer/my-jobs", auth, async (req, res) => {
  try {
    const jobs = await Job.find({ createdBy: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(jobs);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ================================
// GET ALL JOBS (PUBLIC)
// ================================
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ================================
// GET SINGLE JOB
// ================================
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(job);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ================================
// APPLY JOB (WITH RESUME UPLOAD)
// ================================
router.post(
  "/apply/:jobId",
  auth,
  upload.single("resume"),
  async (req, res) => {
    try {
      const jobId = req.params.jobId;

      // FIX: check file safely
      if (!req.file) {
        return res.status(400).json({ message: "Resume file is required" });
      }

      // prevent duplicate application
      const exists = await Application.findOne({
        jobId,
        userId: req.user.id
      });

      if (exists) {
        return res.status(400).json({
          message: "You have already applied for this job"
        });
      }

      const application = await Application.create({
        jobId,
        userId: req.user.id,
        resume: req.file.filename
      });

      res.status(201).json({
        message: "Applied Successfully",
        application
      });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);


// ================================
// DELETE JOB (ONLY OWNER)
// ================================
router.delete("/:id", auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    if (job.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await job.deleteOne();

    res.json({ message: "Job Deleted Successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;