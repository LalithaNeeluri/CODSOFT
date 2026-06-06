import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2> Online Quiz Maker</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/register">Register</Link>

        <Link to="/login">Login</Link>

        <Link to="/create">Create Quiz</Link>

        <Link to="/quizzes">Take Quiz</Link>
      </div>
    </nav>
  );
}

export default Navbar;