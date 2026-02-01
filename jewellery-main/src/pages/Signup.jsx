import React, { useState } from "react";
import video from "../assets/video.mp4"; // jewellery background video

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const result = await response.text();
      setMessage(result);

      if (result === "Signup successful!") {
        window.location.href = "/login"; // redirect to login
      }
    } catch (err) {
      setMessage("Error signing up");
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
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Glassy Signup Form */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-8 mx-auto h-full">
        <div
          className="w-full sm:max-w-md p-8 rounded-lg
                     bg-white bg-opacity-20
                     backdrop-filter backdrop-blur-lg
                     border border-white border-opacity-30
                     shadow-md text-white"
        >
          <h1 className="text-2xl font-bold mb-6 text-center">
            Signup
          </h1>
          <form className="space-y-4" onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 rounded bg-white bg-opacity-50
                         placeholder-gray-700 text-gray-900
                         focus:outline-none focus:ring-2 focus:ring-green-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded bg-white bg-opacity-50
                         placeholder-gray-700 text-gray-900
                         focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 rounded bg-white bg-opacity-50
                         placeholder-gray-700 text-gray-900
                         focus:outline-none focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-green-600
                         hover:bg-green-700 transition text-white font-semibold"
            >
              Signup
            </button>
          </form>
          {message && (
            <p className="mt-4 text-center text-red-300">{message}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Signup;
