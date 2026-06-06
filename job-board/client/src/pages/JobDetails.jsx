import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";
import "./JobDetails.css";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [resume, setResume] = useState(null);

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {
    try {
      const res = await API.get(`/jobs/${id}`);
      setJob(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const applyJob = async () => {
    if (!resume) {
      alert("Please select a resume");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("resume", resume);

      await API.post(
        `/applications/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Application Submitted Successfully");

      navigate("/applications");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Application Failed"
      );
    }
  };

  if (!job) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="job-details">
      <h1>{job.title}</h1>

      <p>
        <strong>Company:</strong> {job.company}
      </p>

      <p>
        <strong>Location:</strong> {job.location}
      </p>

      <p>
        <strong>Salary:</strong> ₹{job.salary}
      </p>

      <p>
        <strong>Description:</strong>
      </p>

      <p>{job.description}</p>

      <hr />

      <h3>Apply for this Job</h3>

      <input
        type="file"
        onChange={(e) =>
          setResume(e.target.files[0])
        }
      />

      <button
        className="apply-btn"
        onClick={applyJob}
      >
        Apply Job
      </button>
    </div>
  );
}

export default JobDetails;