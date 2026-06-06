import { useEffect, useState } from "react";

function TakeQuiz() {
  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const savedQuiz = JSON.parse(
      localStorage.getItem("quiz")
    );

    setQuiz(savedQuiz);
  }, []);

  if (!quiz) {
    return <h2>Loading...</h2>;
  }

  const question = quiz.questions[currentQuestion];

  const checkAnswer = (option) => {
    if (option === question.answer) {
      setScore(score + 1);
    }

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="container">
        <h2> Quiz Completed</h2>

        <h1 className="result">
          Score: {score}/{quiz.questions.length}
        </h1>

        <hr />

        <h3>Correct Answers</h3>

        {quiz.questions.map((q, index) => (
          <div key={index} className="quiz-card">
            <p>
              <strong>
                Question {index + 1}:
              </strong>{" "}
              {q.question}
            </p>

            <p className="correct-answer">
               Correct Answer: {q.answer}
            </p>
          </div>
        ))}

        <button
          onClick={() => (window.location.href = "/")}
        >
           Back to Home
        </button>

        <button
          onClick={() => window.location.reload()}
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>{quiz.title}</h2>

      <h3>
        Question {currentQuestion + 1} of{" "}
        {quiz.questions.length}
      </h3>

      <p>{question.question}</p>

      {question.options.map((option, index) => (
        <button
          key={index}
          className="option-btn"
          onClick={() => checkAnswer(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default TakeQuiz;