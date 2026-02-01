// src/pages/Earrings.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavbarDemo } from "../components/NavbarDemo";
import PagesFooter from "../components/Pages-Footer";
import "@fontsource/playfair-display";
import "@fontsource/cormorant-garamond";
import ProductsCarousel from "../components/ProductsCarousel";
import BenefitsSection from "../components/BenefitsSection";
import AssuranceSection from "../components/AssuranceSection";

const OPTIONS = { loop: true };

// ✅ Product Card with Link to Product Page & Cloudinary image handling
const ProductCard = ({ product }) => (
  <Link to={`/product/${product.id}`} className="block">
    <div className="relative group w-full">
      <div className="overflow-hidden aspect-square w-full">
        <img
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          src={product.imageUrls && product.imageUrls.length > 0 ? product.imageUrls[0] : "https://via.placeholder.com/300"}
          alt={product.name}
        />
      </div>
      <div className="flex items-start justify-between mt-4 space-x-4 w-full">
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 font-['Playfair_Display']">
            {product.name}
          </h3>
          <div className="flex items-center mt-2.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 sm:w-5 sm:h-5 ${i < 4 ? "text-yellow-500" : "text-gray-300"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 font-['Cormorant_Garamond']">
            ₹{product.price?.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  </Link>
);

const Earrings = () => {
  const [products, setProducts] = useState([]);

  // ✅ Fetch earrings category and normalize imageUrls
  useEffect(() => {
    fetch("http://localhost:8080/api/products/category/earrings")
      .then((res) => res.json())
      .then((data) => {
        const updated = data.map((p) => ({
          ...p,
          imageUrls: p.imageUrls && p.imageUrls.length > 0 ? p.imageUrls : ["https://via.placeholder.com/300"],
        }));
        setProducts(updated);
      })
      .catch((err) => console.error("Error fetching earrings:", err));
  }, []);

  const carouselSlides = [
    { src: "https://dcassetcdn.com/design_img/2732980/643152/643152_14878325_2732980_4b827cb5_image.png", alt: "Image 1" },
    { src: "https://dcassetcdn.com/design_img/2732980/88130/88130_14879831_2732980_e5c8b3b7_image.jpg", alt: "Image 2" },
    { src: "https://dcassetcdn.com/design_img/2886222/654209/654209_15934433_2886222_90f467d9_image.jpg", alt: "Image 3" },
  ];

  return (
    <div>
      <img
        className="object-cover w-full h-full overflow-hidden"
        src="https://palmonas.com/cdn/shop/files/category_web_earing.webp?v=1718199312&width=3840"
        alt="Banner"
      />
      <NavbarDemo />

      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-full">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-900 font-['Playfair_Display']">
              Our Featured Earrings
            </h2>
            <p className="mt-4 text-xl md:text-2xl leading-7 text-gray-600 font-['Cormorant_Garamond'] italic">
              Adorn yourself with timeless elegance and royal charm.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 lg:mt-16 lg:gap-8 w-full">
            {products.length > 0 ? (
              products.map((p) => <ProductCard key={p.id} product={p} />)
            ) : (
              <p className="col-span-full text-center text-gray-500">
                Loading products...
              </p>
            )}
          </div>
        </div>
      </section>

      <ProductsCarousel slides={carouselSlides} options={OPTIONS} />
      <AssuranceSection />
      <BenefitsSection />
      <PagesFooter />
    </div>
  );
};

export default Earrings;
