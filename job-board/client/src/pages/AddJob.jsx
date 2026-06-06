import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./AddJob.css";

function AddJob() {
  const navigate = useNavigate();

  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/jobs/add", job);

      alert("Job Added Successfully");

      navigate("/jobs");
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Failed to add job"
      );
    }
  };

  return (
    <div className="add-job">
      <h1>Post New Job</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={job.company}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="salary"
          placeholder="Salary"
          value={job.salary}
          onChange={handleChange}
          required
        />

        <textarea
          rows="5"
          name="description"
          placeholder="Job Description"
          value={job.description}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Post Job
        </button>
      </form>
    </div>
  );
}

export default AddJob;