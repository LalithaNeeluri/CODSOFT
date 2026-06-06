import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  const [completedQuizzes, setCompletedQuizzes] =
    useState([]);

  return (
    <QuizContext.Provider
      value={{
        score,
        setScore,
        completedQuizzes,
        setCompletedQuizzes
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};