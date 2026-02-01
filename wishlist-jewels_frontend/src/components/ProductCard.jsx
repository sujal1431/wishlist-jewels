import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="relative group w-full">
    <Link to={`/product/${product.id}`}>
      <div className="overflow-hidden aspect-square w-full">
       <img
         className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
         src={product.imageUrl || "/fallback-image.png"} // fallback image
         alt={product.name}
       />

      </div>
    </Link>
    <div className="flex items-start justify-between mt-4 space-x-4 w-full">
      <div>
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 font-['Playfair_Display']">
          {product.name}
        </h3>
        <p className="text-base text-gray-600 font-['Cormorant_Garamond'] italic">
          {product.category}
        </p>
      </div>
      <div className="text-right">
        <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900 font-['Cormorant_Garamond']">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  </div>
);

export default ProductCard;
