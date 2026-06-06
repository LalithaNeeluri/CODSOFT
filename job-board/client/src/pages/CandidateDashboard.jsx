import { Link } from "react-router-dom";
import "./CandidateDashboard.css";

function CandidateDashboard() {
  return (
    <div className="dashboard">
      <h1>Candidate Dashboard</h1>

      <div className="stats">
        <div className="stat-card">
          <h2>Jobs</h2>
          <p>Browse available job opportunities</p>
        </div>

        <div className="stat-card">
          <h2>Applications</h2>
          <p>Track all your applications</p>
        </div>

        <div className="stat-card">
          <h2>Profile</h2>
          <p>Manage your profile information</p>
        </div>
      </div>

      <div className="quick-links">
        <h3>Quick Links</h3>

        <ul>
          <li>
            <Link to="/jobs">Browse Jobs</Link>
          </li>

          <li>
            <Link to="/applications">My Applications</Link>
          </li>

          <li>
            <Link to="/profile">Update Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CandidateDashboard;