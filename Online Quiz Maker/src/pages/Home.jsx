import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1> Online Quiz Maker</h1>

        <p>
          Create interactive quizzes, test your knowledge,
          and get instant results.
        </p>

        <div className="home-buttons">
          <Link to="/create">
            <button>Create Quiz</button>
          </Link>

          <Link to="/quizzes">
            <button>Take Quiz</button>
          </Link>

          <Link to="/login">
            <button>Login</button>
          </Link>

          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>Create Quizzes</h3>
          <p>
            Create custom quizzes with multiple-choice questions.
          </p>
        </div>

        <div className="feature-card">
          <h3>Take Quizzes</h3>
          <p>
            Attempt quizzes and check your knowledge instantly.
          </p>
        </div>

        <div className="feature-card">
          <h3>Instant Results</h3>
          <p>
            View scores and correct answers immediately.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;