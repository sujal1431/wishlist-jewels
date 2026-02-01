import React from "react";
import { NavbarDemo } from "../components/NavbarDemo";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    title: "Beoplay M5 Bluetooth Speaker",
    price: 99,
    img: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-1.png",
    label: "New",
    rating: 4,
    oldPrice: null
  },
  {
    id: 2,
    title: "Apple Smart Watch 6 - Special Edition",
    price: 299,
    img: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-2.png",
    label: null,
    rating: 5,
    oldPrice: null
  },
  {
    id: 3,
    title: "Beylob 90 Speaker",
    price: 49,
    img: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-3.png",
    label: "Sale",
    rating: 0,
    oldPrice: 99
  },
  {
    id: 4,
    title: "Martino 75 Bluetooth",
    price: 120,
    img: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-4.png",
    label: null,
    rating: 4,
    oldPrice: null
  }
];

const ProductCard = ({ product }) => {
  return (
    <div className="relative group">
      <div className="overflow-hidden aspect-square">
        <img
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-125"
          src={product.img}
          alt={product.title}
        />
      </div>
      {product.label && (
        <div className="absolute left-3 top-3">
          <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-sm sm:text-base font-bold tracking-wide uppercase bg-white text-gray-900 rounded-full">
            {product.label}
          </p>
        </div>
      )}
      <div className="flex items-start justify-between mt-4 space-x-4">
        <div>
          <h3 className="text-base font-bold text-gray-900 sm:text-lg md:text-xl">
            {product.title}
          </h3>
          <div className="flex items-center mt-2.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3 h-3 sm:w-4 sm:h-4 ${
                  i < product.rating ? "text-yellow-400" : "text-gray-300"
                }`}
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
          <p className="text-base font-bold text-gray-900 sm:text-lg md:text-xl">
            ${product.price.toFixed(2)}
          </p>
          {product.oldPrice && (
            <del className="mt-0.5 text-base sm:text-lg font-bold text-gray-500">
              ${product.oldPrice.toFixed(2)}
            </del>
          )}
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  return (
    
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our featured items
            </h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              faucibus massa dignissim tempus.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
      
  );
};

export default ProductSection;
