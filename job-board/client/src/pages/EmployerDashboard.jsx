import { Link } from "react-router-dom";
import "./EmployerDashboard.css";

function EmployerDashboard() {
  return (
    <div className="employer-dashboard">
      <h1>Employer Dashboard</h1>

      <div className="dashboard-cards">

        {/* Add Job */}
        <div className="card">
          <h2>Post Jobs</h2>
          <p>Create and publish new job openings.</p>

          <Link
            to="/add-job"
            className="dashboard-btn"
          >
            Add Job
          </Link>
        </div>

        {/* My Jobs */}
        <div className="card">
          <h2>My Jobs</h2>
          <p>View and manage your posted jobs.</p>

          <Link
            to="/my-jobs"
            className="dashboard-btn"
          >
            My Jobs
          </Link>
        </div>

        {/* Applications */}
        <div className="card">
          <h2>Applications</h2>
          <p>Track candidates who applied.</p>

          <Link
            to="/applications"
            className="dashboard-btn"
          >
            View Applications
          </Link>
        </div>

      </div>
    </div>
  );
}

export default EmployerDashboard;