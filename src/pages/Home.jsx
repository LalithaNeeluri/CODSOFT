import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <h1>
          Online Quiz Maker
        </h1>

        <p>
          Create, Manage and Take Interactive
          Quizzes Anytime, Anywhere.
        </p>

        <div className="hero-buttons">

          <Link to="/register">
            <button className="primary-btn">
              Get Started
            </button>
          </Link>

          <Link to="/quizzes">
            <button className="secondary-btn">
              Explore Quizzes
            </button>
          </Link>

        </div>

      </section>

      <section className="features">

        <div className="feature-card">
          <h3>📚 Create Quizzes</h3>
          <p>
            Build custom quizzes with multiple
            questions and options.
          </p>
        </div>

        <div className="feature-card">
          <h3>⏱ Timed Tests</h3>
          <p>
            Add timers to improve learning and
            assessment experience.
          </p>
        </div>

        <div className="feature-card">
          <h3>📈 Instant Results</h3>
          <p>
            Get scores and performance analysis
            immediately after completion.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Home;