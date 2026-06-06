import { useEffect, useState } from "react";
import API from "../services/api";
import "./MyApplications.css";

function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await API.get("/applications/my");
      setApplications(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="applications">
      <h1>My Applications</h1>

      {applications.length === 0 ? (
        <p className="no-apps">
          No Applications Found
        </p>
      ) : (
        applications.map((app) => (
          <div
            key={app._id}
            className="application-card"
          >
            <h3>{app.job?.title}</h3>

            <p>
              <strong>Status:</strong>{" "}
              {app.status}
            </p>

            <p>
              <strong>Company:</strong>{" "}
              {app.job?.company}
            </p>

            <p>
              <strong>Location:</strong>{" "}
              {app.job?.location}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyApplications;