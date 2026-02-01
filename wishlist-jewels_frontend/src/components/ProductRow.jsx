import React from "react";

const products = [
  { id: 1, name: "Diamond Necklace", price: "$499", image: "/rings/ring1.png" },
  { id: 2, name: "Gold Earrings", price: "$299", image: "/earings/goldearrings.png" },
  { id: 3, name: "Emerald Ring", price: "$399", image: "/rings/emeraldring.png" },
  { id: 4, name: "Pearl Bracelet", price: "$199", image: "/bangles/goldbangles.png" },
  { id: 5, name: "Ruby Pendant", price: "$349", image: "/pendant/ruby.png" },
  { id: 6, name: "Sapphire Earrings", price: "$450", image: "/earings/sapphire.png" },
];

export default function ProductRow() {
  return (
    <section className="w-full min-h-[80vh] bg-gradient-to-b from-black via-[#001f3f] to-black py-16">

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-white tracking-widest drop-shadow-lg">
          Timeless Treasures
        </h2>
        <p className="text-gray-300 mt-3 text-lg md:text-xl italic">
          Discover our handpicked selection of fine jewelry
        </p>
      </div>

      <div className="flex justify-center gap-10 flex-wrap px-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">

            <img
              src={product.image}
              alt={product.name}
              className="object-contain w-48 h-48 transition-transform duration-300 hover:scale-110 drop-shadow-[0_8px_15px_rgba(0,0,0,0.5)]"
            />

            <div className="w-16 h-px bg-white/50 my-4"></div>

            <p className="text-lg font-semibold text-white">{product.name}</p>
            <p className="text-pink-400 font-bold">{product.price}</p>

          </div>
        ))}
      </div>
    </section>
  );
}
