import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import quizData from "../data/quizData";
import ProgressBar from "../components/ProgressBar";
import Timer from "../components/Timer";

import "../styles/Quiz.css";

function TakeQuiz() {
  const { id } = useParams();

  const navigate = useNavigate();

  const customQuizzes =
    JSON.parse(localStorage.getItem("quizzes")) || [];

  const allQuizzes = [
    ...quizData,
    ...customQuizzes,
  ];

  const quiz = allQuizzes.find(
    (quiz) => quiz.id === Number(id)
  );

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [score, setScore] =
    useState(0);

  const [timeLeft, setTimeLeft] =
    useState(30);

  if (!quiz) {
    return <h2>Quiz Not Found</h2>;
  }

  const handleOptionClick = (selectedOption) => {
    const current =
      quiz.questions[currentQuestion];

    let updatedScore = score;

    if (selectedOption === current.answer) {
      updatedScore = score + 1;
      setScore(updatedScore);
    }

    if (
      currentQuestion <
      quiz.questions.length - 1
    ) {
      setCurrentQuestion(
        currentQuestion + 1
      );

      setTimeLeft(30);
    } else {
      navigate("/result", {
        state: {
          score: updatedScore,
          total: quiz.questions.length,
        },
      });
    }
  };

  return (
    <div className="take-quiz">
      <div className="question-card">

        <h2>
          Question {currentQuestion + 1}
          {" "}of{" "}
          {quiz.questions.length}
        </h2>

        <ProgressBar
          current={currentQuestion + 1}
          total={quiz.questions.length}
        />

        <Timer
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
        />

        <h3>
          {
            quiz.questions[currentQuestion]
              .question
          }
        </h3>

        <div className="options">

          {quiz.questions[
            currentQuestion
          ].options.map(
            (option, index) => (
              <button
                key={index}
                className="option-btn"
                onClick={() =>
                  handleOptionClick(option)
                }
              >
                {option}
              </button>
            )
          )}

        </div>

      </div>
    </div>
  );
}

export default TakeQuiz;