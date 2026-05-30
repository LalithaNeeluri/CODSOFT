import { useState } from "react";
import quizzes from "../data/quizzes";
import { useParams, useNavigate } from "react-router-dom";

function QuizCard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const quiz = quizzes.find((q) => q.id === Number(id));

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (
      option ===
      quiz.questions[currentQuestion].answer
    ) {
      setScore(score + 1);
    }

    if (
      currentQuestion <
      quiz.questions.length - 1
    ) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/result", {
        state: {
          score,
          total: quiz.questions.length
        }
      });
    }
  };

  return (
    <div className="quiz-card">
      <h3>
        Question {currentQuestion + 1}/
        {quiz.questions.length}
      </h3>

      <h2>
        {quiz.questions[currentQuestion].question}
      </h2>

      {quiz.questions[currentQuestion].options.map(
        (option, index) => (
          <button
            key={index}
            onClick={() =>
              handleAnswer(option)
            }
          >
            {option}
          </button>
        )
      )}
    </div>
  );
}

export default QuizCard;