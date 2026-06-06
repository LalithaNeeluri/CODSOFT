import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = () => {
    if (
      !form.name ||
      !form.address ||
      !form.phone ||
      !form.city ||
      !form.pincode
    ) {
      alert("Please fill all fields");
      return;
    }

    // SIMPLE FAKE PAYMENT FLOW
    alert("Payment Successful 🎉 Order Placed!");

    // optional: clear cart here if you want later

    navigate("/order-success");
  };

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="auth-container">
        <h2>Checkout</h2>

        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />

        <input
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
        />

        <input
          name="pincode"
          placeholder="Pincode"
          value={form.pincode}
          onChange={handleChange}
        />

        <h3 style={{ textAlign: "center", marginTop: "15px" }}>
          Total: ₹{total}
        </h3>

        <button onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </>
  );
}

export default Checkout;