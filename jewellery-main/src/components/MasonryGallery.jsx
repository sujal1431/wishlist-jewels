import React from "react";

const images = [
  { src: "https://images.bhimagold.com/products/necklaces/images/e3c9b3d1-36aa-47a9-8ae3-1a51b8374bd3-NGD-CHDN_18K-WES3-D-L-NA-23632416.webp", title: "Royal Necklace" },
  { src: "https://i.pinimg.com/736x/79/c6/1b/79c61bddea27aa4b6791fa3ff74dc657.jpg", title: "Diamond Ring" },
  { src: "https://i.pinimg.com/736x/a5/6c/84/a56c845f70199d009703f605f96dfcfa--latest-jewellery-jewellery-designs.jpg?b=t", title: "Gold Bangles" },
  { src: "https://d25g9z9s77rn4i.cloudfront.net/uploads/product/1426/1721735110_40d7e9be93dcab259b4d.jpg", title: "Pearl Earrings" },
  { src: "https://www.aviationkart.com/cdn/shop/products/S74bf14eea0bc40ce94324f93742626a1w.jpg?v=1691223409", title: "Luxury Watch" },
  { src: "https://img.tatacliq.com/images/i20//437Wx649H/MP000000023922546_437Wx649H_202410011544401.jpeg", title: "Platinum Chain" },
  { src: "https://www.sneharateria.com/cdn/shop/collections/Extravagence_-_Diamond_Look_Haaram_Model_1200x1200.jpg?v=1704172054", title: "Bridal Set" },
  { src: "https://i.etsystatic.com/21002028/c/1257/1257/313/233/il/7fb022/3980067542/il_600x600.3980067542_grr6.jpg", title: "Emerald Pendant" },
  { src: "https://laxmipearls.com/wp-content/uploads/2023/09/IMG_4201.jpg", title: "Designer Bracelet" },
];

export default function MasonryGallery3x3FullWidth() {
  const columns = [[], [], []];
  images.forEach((img, i) => {
    columns[i % 3].push(img);
  });

  return (
    <section className="w-full bg-gradient-to-b from-black via-[#001f3f] to-black py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-white tracking-widest drop-shadow-lg">
          Exquisite Creations
        </h2>
        <p className="text-gray-300 mt-3 text-base md:text-lg italic">
          Explore our finest collection of timeless jewellery pieces
        </p>
      </div>

  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8 mx-4 md:mx-16">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="grid gap-6">
            {col.map((image, index) => (
              <a
                key={index}
                href={image.src}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden rounded-lg drop-shadow-[0_8px_15px_rgba(0,0,0,0.5)]"
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* Title */}
                <div className="absolute bottom-3 left-3 text-pink-400 font-semibold tracking-wide">
                  {image.title}
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
