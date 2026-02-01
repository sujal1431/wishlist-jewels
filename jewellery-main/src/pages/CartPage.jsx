import React from "react";
import { useCart } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import { NavbarDemo } from "../components/NavbarDemo";
import PagesFooter from "../components/Pages-Footer";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/checkout");
  };

  return (
    <>
      <NavbarDemo />
      <div
        className="min-h-screen py-16 px-6"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/98/c0/23/98c02301aacaec39c7e1d0e4cffe2431.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-yellow-900 font-['Playfair_Display']">
          My Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500 text-xl">Your cart is empty.</p>
        ) : (
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.imageUrl || "https://via.placeholder.com/80"}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-lg md:text-xl font-semibold text-gray-900 font-['Playfair_Display']">
                      {item.name}
                    </h2>
                    <p className="text-lg text-gray-600 font-['Cormorant_Garamond']">
                      ₹{item.price} x {item.quantity}
                    </p>
                  </div>
                </div>
                <span className="text-xl font-bold">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between mt-4 text-2xl font-bold text-gray-900">
              <span>Total:</span>
              <span>
                ₹
                {cart
                  .reduce((total, item) => total + item.price * item.quantity, 0)
                  .toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={clearCart}
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <PagesFooter />
    </>
  );
};

export default CartPage;
