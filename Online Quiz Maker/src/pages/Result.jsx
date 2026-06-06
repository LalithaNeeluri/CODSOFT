function Result() {
  return (
    <div className="container">
      <h2>Quiz Result</h2>

      <p className="result">
        Your Score: 8 / 10
      </p>

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

export default Result;