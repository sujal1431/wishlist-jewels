import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Earrings from "./pages/Earrings.jsx";
import Rings from "./pages/Rings.jsx";
import Necklace from "./pages/Necklace.jsx";
import DailyWear from "./pages/DailyWear.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminProducts from "./pages/AdminProducts.jsx";
import ProductPage from "./components/ProductPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx"; // ✅ import auth provider
import BlogPage from "./components/Blog.jsx";
import HelpPage from "./components/Help.jsx";
import AboutPage from "./components/About.jsx";

import "./index.css";
import "@fontsource/playfair-display";
import "@fontsource/cormorant-garamond";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/earrings" element={<Earrings />} />
            <Route path="/rings" element={<Rings />} />
            <Route path="/necklace" element={<Necklace />} />
            <Route path="/daily-wear" element={<DailyWear />} />
            <Route path="/product/:id" element={<ProductPage />} />

 {/* Blog & Info Pages */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/about" element={<AboutPage />} />


            {/* Cart & Checkout */}
            <Route path="/cart" element={<CartPage />} />
            <Route path="/book-call" element={<CartPage />} />

            {/* Protected Routes */}
            <Route
              path="/checkout"
              element={

                  <CheckoutPage />

              }
            />
            <Route
              path="/admin-products"
              element={

                  <AdminProducts />

              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </CartProvider>
  </React.StrictMode>
);
