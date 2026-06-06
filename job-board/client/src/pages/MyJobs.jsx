import { useEffect, useState } from "react";
import API from "../services/api";
import "./MyJobs.css";

function MyJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchMyJobs();
  }, []);

  const fetchMyJobs = async () => {
    try {
      const res = await API.get("/jobs/employer/my-jobs");
      setJobs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteJob = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/jobs/${id}`);

      alert("Job Deleted Successfully");

      fetchMyJobs();
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Delete Failed"
      );
    }
  };

  return (
    <div className="my-jobs">
      <h1>My Posted Jobs</h1>

      {jobs.length === 0 ? (
        <p>No Jobs Posted Yet</p>
      ) : (
        jobs.map((job) => (
          <div
            key={job._id}
            className="job-card"
          >
            <h2>{job.title}</h2>

            <p>
              <strong>Company:</strong>{" "}
              {job.company}
            </p>

            <p>
              <strong>Location:</strong>{" "}
              {job.location}
            </p>

            <p>
              <strong>Salary:</strong> ₹
              {job.salary}
            </p>

            <button
              className="delete-btn"
              onClick={() =>
                deleteJob(job._id)
              }
            >
              Delete Job
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default MyJobs;