import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/Dashboard.css";

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="dashboard">

      <h1>
        Welcome,
        {" "}
        {user?.name}
      </h1>

      <div className="stats">

        <div className="card">
          <h3>Total Quizzes</h3>
          <p>10</p>
        </div>

        <div className="card">
          <h3>Completed</h3>
          <p>0</p>
        </div>

        <div className="card">
          <h3>Best Score</h3>
          <p>0%</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;