import React from "react";
import ring1 from "../assets/rings/ring1.png";
import ge from "../assets/earings/goldEarrings.png"
import er from "../assets/rings/emeraldring.png"
import bg from "../assets/bangles/goldbangles.png"
import rp from "../assets/pendant/ruby.png"
import se from "../assets/earings/sapphire.png"
const products = [
  { id: 1, name: "Diamond Necklace", price: "$499", image: ring },
  { id: 2, name: "Gold Earrings", price: "$299", image: ge },
  { id: 3, name: "Emerald Ring", price: "$399", image: er },
  { id: 4, name: "Pearl Bracelet", price: "$199", image: bg },
  { id: 5, name: "Ruby Pendant", price: "$349", image:rp },
  { id: 6, name: "Sapphire Earrings", price: "$450", image: se },
];

export default function ProductRow() {
  return (
    <section className="w-full min-h-[80vh] bg-gradient-to-b from-black via-[#001f3f] to-black py-16">
  {/* Section Heading */}
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-serif text-white tracking-widest drop-shadow-lg">
      Timeless Treasures
    </h2>
    <p className="text-gray-300 mt-3 text-lg md:text-xl italic">
      Discover our handpicked selection of fine jewelry
    </p>
  </div>

  {/* Centered Products */}
  <div className="flex justify-center gap-10 flex-wrap px-6">
    {products.slice(0, 6).map((product) => (
      <div key={product.id} className="flex flex-col items-center">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="object-contain w-48 h-48 transition-transform duration-300 hover:scale-110 drop-shadow-[0_8px_15px_rgba(0,0,0,0.5)]"
        />

        {/* Separator */}
        <div className="w-16 h-px bg-white/50 my-4"></div>

        {/* Name + Price */}
        <p className="text-lg font-semibold text-white">{product.name}</p>
        <p className="text-pink-400 font-bold">{product.price}</p>
      </div>
    ))}
  </div>
</section>

  );
}
