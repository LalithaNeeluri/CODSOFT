import { useState } from "react";

function CreateQuiz() {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");

  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    const newQuestion = {
      question,
      options: [
        option1,
        option2,
        option3,
        option4
      ],
      answer
    };

    setQuestions([...questions, newQuestion]);

    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setAnswer("");
  };

  const saveQuiz = () => {
    const quiz = {
      title,
      questions
    };

    localStorage.setItem(
      "quiz",
      JSON.stringify(quiz)
    );

    alert("Quiz Saved Successfully");
  };

  return (
    <div className="container">

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

      <input
        placeholder="Option 1"
        value={option1}
        onChange={(e) =>
          setOption1(e.target.value)
        }
      />

      <input
        placeholder="Option 2"
        value={option2}
        onChange={(e) =>
          setOption2(e.target.value)
        }
      />

      <input
        placeholder="Option 3"
        value={option3}
        onChange={(e) =>
          setOption3(e.target.value)
        }
      />

      <input
        placeholder="Option 4"
        value={option4}
        onChange={(e) =>
          setOption4(e.target.value)
        }
      />

      <input
        placeholder="Correct Answer"
        value={answer}
        onChange={(e) =>
          setAnswer(e.target.value)
        }
      />

      <button onClick={addQuestion}>
        Add Question
      </button>

      <button onClick={saveQuiz}>
        Save Quiz
      </button>

      <h3>
        Questions Added:
        {questions.length}
      </h3>
    </div>
  );
}

export default CreateQuiz;