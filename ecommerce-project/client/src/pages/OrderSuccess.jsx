import Navbar from "../components/Navbar";

function OrderSuccess() {
  return (
    <>
      <Navbar />

      <div className="auth-container">
        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with ShopEZ.
        </p>
      </div>
    </>
  );
}

export default OrderSuccess;