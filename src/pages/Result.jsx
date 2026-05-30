import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import "../styles/Result.css";

function Result() {

  const location =
    useLocation();

  const score =
    location.state?.score || 0;

  const total =
    location.state?.total || 0;

  const percentage =
    Math.round(
      (score / total) * 100
    );

  return (
    <div className="result-container">

      <div className="result-card">

        <h1>
          Quiz Completed
        </h1>

        <h2>
          {score}
          {" / "}
          {total}
        </h2>

        <h3>
          {percentage}%
        </h3>

        <Link to="/quizzes">
          <button>
            Try Another Quiz
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Result;