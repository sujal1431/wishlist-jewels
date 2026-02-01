import React, { useState, useEffect, useContext } from "react";
import { useCart } from "../context/CartContext.jsx";
import API_BASE_URL from "../config";
import { NavbarDemo } from "../components/NavbarDemo";
import PagesFooter from "../components/Pages-Footer";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: "",
    address: "",
    paymentMethod: "Cash",
  });
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [invoice, setInvoice] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      alert("⚠️ Please login before placing an order.");
      navigate("/login");
    } else {
      // Update form with user data when user is loaded
      setForm((prevForm) => ({
        ...prevForm,
        name: user?.username || user?.email || "",
      }));
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    if (!user) {
      alert("⚠️ Please login first.");
      navigate("/login");
      return;
    }
    if (!form.name || !form.address) {
      alert("⚠️ Please fill all required fields.");
      return;
    }

    try {
      const items = cart.map((item) => ({
        productId: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      }));

      const orderData = {
        customerName: form.name,
        address: form.address,
        paymentMethod: form.paymentMethod,
        items,
        totalPrice: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      };

      const res = await fetch(`${API_BASE_URL}/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!res.ok) throw new Error("Failed to place order");

      const savedOrder = await res.json();
      setInvoice(savedOrder);
      setOrderSuccess(true);
      clearCart();
    } catch (err) {
      console.error("Error placing order:", err);
      alert("❌ Failed to place order. Check backend is running and CORS is configured.");
    }
  };

  if (!user) return null;

  if (orderSuccess && invoice) {
    return (
      <>
        <NavbarDemo />
        <div
          className="min-h-screen py-16 px-6 flex justify-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/1200x/98/c0/23/98c02301aacaec39c7e1d0e4cffe2431.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-xl w-full my-16 p-6 bg-white/80 rounded-lg shadow">
            <h2 className="text-3xl font-bold mb-4">Invoice</h2>
            <p className="text-base"><strong>Order ID:</strong> {invoice.id}</p>
            <p className="text-base"><strong>Name:</strong> {invoice.customerName}</p>
            <p className="text-base"><strong>Address:</strong> {invoice.address}</p>
            <p className="text-base"><strong>Payment Method:</strong> {invoice.paymentMethod}</p>
            <hr className="my-4" />
            {invoice.items.map((item, i) => (
              <div key={i} className="flex justify-between py-1 text-lg">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <hr className="my-4" />
            <div className="flex justify-between font-bold text-xl">
              <span>Total:</span>
              <span>₹{invoice.totalPrice}</span>
            </div>
          </div>
        </div>
        <PagesFooter />
      </>
    );
  }

  return (
    <>
      <NavbarDemo />
      <div
        className="min-h-screen py-16 px-6 flex justify-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/98/c0/23/98c02301aacaec39c7e1d0e4cffe2431.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-xl w-full my-16 p-6 bg-white/80 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-6">Checkout</h2>

          <div className="mb-4">
            <label className="block mb-1 font-semibold text-base">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded text-base"
              placeholder="Your full name"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold text-base">Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full p-3 border rounded text-base"
              placeholder="Your shipping address"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold text-base">Payment Method</label>
            <select
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleChange}
              className="w-full p-3 border rounded text-base"
            >
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
              <option value="UPI">UPI</option>
            </select>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Order Summary</h3>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between py-1 text-lg">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-xl">
              <span>Total:</span>
              <span>₹{cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-yellow-700 text-white py-3 rounded-lg font-semibold hover:bg-yellow-800 transition"
          >
            Place Order
          </button>
        </div>
      </div>
      <PagesFooter />
    </>
  );
};

export default CheckoutPage;
