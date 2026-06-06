import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";

import "./Cart.css";

function Cart() {
  const navigate = useNavigate();

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="cart-page">
        <h1>Shopping Cart</h1>

        {cart.length === 0 ? (
          <h2>Your Cart is Empty</h2>
        ) : (
          <>
            {cart.map((item) => (
              <div
                className="cart-item"
                key={item._id}
              >
                <div className="cart-left">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-image"
                  />

                  <div className="cart-details">
                    <h3>{item.name}</h3>

                    <p>{item.description}</p>

                    <h4>₹{item.price}</h4>

                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          decreaseQuantity(
                            item._id
                          )
                        }
                      >
                        -
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(
                            item._id
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(item._id)
                  }
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="cart-summary">
              <h2>Total: ₹{total}</h2>

              <button
                className="checkout-btn"
                onClick={() =>
                  navigate("/checkout")
                }
              >
                Proceed To Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;