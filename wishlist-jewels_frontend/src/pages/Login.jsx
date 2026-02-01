import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import video from "../assets/video.mp4";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.text();
      setMessage(result);

      if (result === "Login successful!") {
        const userData = { email, username: email.split("@")[0] };
        login(userData);
        navigate("/");
      }
    } catch (err) {
      setMessage("Error logging in");
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src={video}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay to dim video slightly */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Glassy Login Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-8 mx-auto h-full">
        <div
          className="w-full sm:max-w-md p-8 rounded-lg
                     bg-white bg-opacity-20
                     backdrop-filter backdrop-blur-lg
                     border border-white border-opacity-30
                     shadow-md text-white"
        >
          <h1 className="text-2xl font-bold mb-6 text-center">
            Wishlist Login
          </h1>
          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded bg-white bg-opacity-50
                         placeholder-gray-700 text-gray-900
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 rounded bg-white bg-opacity-50
                         placeholder-gray-700 text-gray-900
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-blue-600
                         hover:bg-blue-700 transition text-white font-semibold"
            >
              Login
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center text-red-300">{message}</p>
          )}

          <div className="mt-6 text-center">
            <p className="text-base text-white">Don't have an account?</p>
            <Link
              to="/signup"
              className="text-blue-300 hover:underline font-medium"
            >
              Create an Account
            </Link>
          </div>

          <div className="mt-4 text-center">
            <p className="text-base text-white">Admin Login</p>
            <Link
              to="/admin-login"
              className="text-blue-300 hover:underline font-medium"
            >
              Go to Admin Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
