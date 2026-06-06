import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import "./Jobs.css";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs");
      setJobs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="jobs-container">
      <h1 className="jobs-title">Available Jobs</h1>

      <input
        type="text"
        placeholder="Search by title, company, or location..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="jobs-grid">
        {filteredJobs.map((job) => (
          <div key={job._id} className="job-card">
            <h3>{job.title}</h3>

            <p>
              <strong>Company:</strong> {job.company}
            </p>

            <p>
              <strong>Location:</strong> {job.location}
            </p>

            <p>
              <strong>Salary:</strong> ₹{job.salary}
            </p>

            <Link
              to={`/job/${job._id}`}
              className="view-btn"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;