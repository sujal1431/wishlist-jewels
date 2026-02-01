import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API_BASE_URL from "../config";
import { NavbarDemo } from "../components/NavbarDemo";
import PagesFooter from "../components/Pages-Footer";
import { CartContext } from "../context/CartContext.jsx";
import { AuthContext } from "../context/AuthContext";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct({
          ...data,
          imageUrl:
            data.imageUrls && data.imageUrls.length > 0
              ? data.imageUrls[0]
              : "https://via.placeholder.com/400",
        });
      })
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product)
    return (
      <>
        <NavbarDemo />
        <div className="text-center mt-20 text-lg text-gray-600">
          Loading product details...
        </div>
        <PagesFooter />
      </>
    );

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
        <div className="max-w-6xl w-full bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full max-w-md rounded-2xl shadow-lg border border-gray-200"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold text-yellow-900 font-['Playfair_Display']">
                {product.name}
              </h1>
              <p className="mt-4 text-lg text-gray-700 font-['Cormorant_Garamond'] leading-relaxed">
                {product.description || "No description available."}
              </p>
              <p className="mt-6 text-3xl font-semibold text-yellow-800">
                ₹{product.price.toFixed(2)}
              </p>
              <p className="mt-2 text-base text-gray-500">
                Stock:{" "}
                <span
                  className={`${
                    product.stock > 0 ? "text-green-600" : "text-red-600"
                  } font-medium`}
                >
                  {product.stock > 0 ? `${product.stock} available` : "Out of stock"}
                </span>
              </p>

              <div className="mt-8 flex gap-5">
                <button
                  className="px-6 py-3 bg-yellow-700 text-white rounded-lg shadow-md hover:bg-yellow-800 transition duration-200"
                  disabled={product.stock === 0}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-200"
                  disabled={product.stock === 0}
                  onClick={() => {
                    if (!user) {
                      alert("⚠️ Please login to buy this product.");
                      navigate("/login");
                      return;
                    }
                    addToCart(product);
                    navigate("/checkout");
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PagesFooter />
    </>
  );
};

export default ProductPage;
