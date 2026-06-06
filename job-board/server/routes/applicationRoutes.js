const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const upload = require("../middleware/upload");

const {
  applyJob,
  myApplications,
} = require("../controllers/applicationController");

router.post(
  "/:jobId",
  auth,
  upload.single("resume"),
  applyJob
);

router.get(
  "/my",
  auth,
  myApplications
);

module.exports = router;