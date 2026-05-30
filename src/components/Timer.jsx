import { useEffect, useState } from "react";

function Timer({ timeLeft, setTimeLeft }) {
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, setTimeLeft]);

  return (
    <h3>
      Time Left: {timeLeft}s
    </h3>
  );
}

export default Timer;