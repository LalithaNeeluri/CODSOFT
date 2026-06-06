import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import "./Navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged out successfully");

    navigate("/login");
  };

  const isLoggedIn = localStorage.getItem("token");

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        ShopEZ
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        {!isLoggedIn ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        ) : (
          <li>
            <button
              onClick={handleLogout}
              className="logout-btn"
            >
              Logout
            </button>
          </li>
        )}

        <li>
          <Link to="/cart">
            Cart ({cart.length})
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;