import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function QuizList() {
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    const savedQuiz = JSON.parse(
      localStorage.getItem("quiz")
    );

    setQuiz(savedQuiz);
  }, []);

  return (
    <div className="container">

      <h2>Available Quizzes</h2>

      {quiz ? (
        <div className="quiz-card">

          <h3>{quiz.title}</h3>

          <p>
            Questions:
            {quiz.questions.length}
          </p>

          <Link to="/takequiz">
            <button>
              Take Quiz
            </button>
          </Link>

        </div>
      ) : (
        <p>No Quiz Available</p>
      )}
    </div>
  );
}

export default QuizList;