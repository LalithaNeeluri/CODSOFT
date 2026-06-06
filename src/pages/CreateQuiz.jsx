import { useState } from "react";

function CreateQuiz() {
  const [title, setTitle] = useState("");

  const [question, setQuestion] =
    useState("");

  const [options, setOptions] =
    useState(["", "", "", ""]);

  const [answer, setAnswer] =
    useState("");

  const handleSaveQuiz = () => {
    const quiz = {
      id: Date.now(),
      title,
      category: "Custom",
      questions: [
        {
          question,
          options,
          answer,
        },
      ],
    };

    const quizzes =
      JSON.parse(
        localStorage.getItem("quizzes")
      ) || [];

    quizzes.push(quiz);

    localStorage.setItem(
      "quizzes",
      JSON.stringify(quizzes)
    );

    alert("Quiz Saved");

    setTitle("");
    setQuestion("");
    setOptions(["", "", "", ""]);
    setAnswer("");
  };

  return (
    <div className="auth-container">
      <div className="auth-form">

        <h2>Create Quiz</h2>

        <input
          placeholder="Quiz Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
          placeholder="Question"
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
        />

        {options.map((opt, index) => (
          <input
            key={index}
            placeholder={`Option ${
              index + 1
            }`}
            value={opt}
            onChange={(e) => {
              const newOptions =
                [...options];

              newOptions[index] =
                e.target.value;

              setOptions(newOptions);
            }}
          />
        ))}

        <input
          placeholder="Correct Answer"
          value={answer}
          onChange={(e) =>
            setAnswer(e.target.value)
          }
        />

        <button
          onClick={handleSaveQuiz}
        >
          Save Quiz
        </button>

      </div>
    </div>
  );
}

export default CreateQuiz;