import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const registerUser = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      alert(res.data.message);

      setError(""); // clear error

      navigate("/login");
    } catch (err) {
      const msg =
        err.response?.data?.message || "Registration Failed";

      setError(msg); // show message on screen
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>ProjectHub</h1>

        <h2>Create Account</h2>

        <p className="subtitle">
          Register to manage your projects
        </p>

        <input
          type="text"
          placeholder="Enter Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={registerUser}>
          Register
        </button>

        {/* 🔥 ERROR + LOGIN LINK */}
        {error && (
          <div style={{ marginTop: "12px", color: "red" }}>
            {error}

            {/* clickable login link */}
            {error.toLowerCase().includes("exists") && (
              <span
                onClick={() => navigate("/login")}
                style={{
                  color: "blue",
                  cursor: "pointer",
                  marginLeft: "8px",
                  textDecoration: "underline",
                }}
              >
                Login here
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;