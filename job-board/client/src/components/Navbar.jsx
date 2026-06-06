import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">

      <div className="nav-left">
        <Link to="/dashboard" className="nav-link">
          Home
        </Link>

        <Link to="/jobs" className="nav-link">
          Jobs
        </Link>

        <Link to="/applications" className="nav-link">
          Applications
        </Link>

        <Link to="/profile" className="nav-link">
          Profile
        </Link>
      </div>

      <div className="nav-right">
        {!token ? (
          <>
            <Link to="/login" className="nav-link">
              Login
            </Link>

            <Link to="/register" className="nav-link">
              Register
            </Link>
          </>
        ) : (
          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>

    </nav>
  );
}

export default Navbar;