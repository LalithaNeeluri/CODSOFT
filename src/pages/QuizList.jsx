import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import quizData from "../data/quizData";

import "../styles/Quiz.css";

function QuizList() {
  const [allQuizzes, setAllQuizzes] =
    useState([]);

  useEffect(() => {
    const customQuizzes =
      JSON.parse(
        localStorage.getItem("quizzes")
      ) || [];

    setAllQuizzes([
      ...quizData,
      ...customQuizzes,
    ]);
  }, []);

  return (
    <div>
      <h1>Available Quizzes</h1>

      <div className="quiz-grid">

        {allQuizzes.map((quiz) => (
          <div
            className="quiz-card"
            key={quiz.id}
          >
            <h2>{quiz.title}</h2>

            <p>
              Category: {quiz.category}
            </p>

            <p>
              Questions:
              {" "}
              {quiz.questions.length}
            </p>

            <Link
              to={`/quiz/${quiz.id}`}
            >
              <button>
                Start Quiz
              </button>
            </Link>

          </div>
        ))}

      </div>
    </div>
  );
}

export default QuizList;