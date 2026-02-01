// src/pages/Blog.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { NavbarDemo } from "../components/NavbarDemo";
import PagesFooter from "../components/Pages-Footer";
import "@fontsource/playfair-display";
import "@fontsource/cormorant-garamond";
import ProductsCarousel from "../components/ProductsCarousel";
import BenefitsSection from "../components/BenefitsSection";
import AssuranceSection from "../components/AssuranceSection";

const OPTIONS = { loop: true };

// ✅ Static Blog Data
const demoBlogs = [
  {
    id: 1,
    title: "Top 10 Jewelry Trends of 2025",
    description:
      "Discover the latest trends in jewelry for 2025, from timeless classics to modern statement pieces that everyone is talking about.",
    imageUrl:
      "https://images.unsplash.com/photo-1611599535911-59f44c0a042d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 2,
    title: "How to Care for Your Gold and Silver Jewelry",
    description:
      "Learn simple tips to keep your gold and silver jewelry shining bright and free from tarnish for years to come.",
    imageUrl:
      "https://images.unsplash.com/photo-1593032457863-0c2d30a238c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 3,
    title: "Choosing the Perfect Necklace for Every Occasion",
    description:
      "A guide to selecting necklaces that complement your outfit, mood, and occasion. Make every look unforgettable.",
    imageUrl:
      "https://images.unsplash.com/photo-1600185365561-9cf2749b1e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 4,
    title: "Understanding Gemstones: A Beginner’s Guide",
    description:
      "From diamonds to sapphires, get to know your favorite gemstones and how to choose them wisely for your jewelry collection.",
    imageUrl:
      "https://images.unsplash.com/photo-1600185365561-2a43f98b1e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 5,
    title: "Jewelry Styling Tips: Layering and Pairing",
    description:
      "Master the art of layering and pairing jewelry to elevate your everyday look and create stunning combinations effortlessly.",
    imageUrl:
      "https://images.unsplash.com/photo-1611599535911-3df44c0a042d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];

// ✅ Blog Card Component
const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-300 bg-white"
      onClick={() => navigate(`/blog/${blog.id}`)}
    >
      <div className="h-64 w-full overflow-hidden">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-['Playfair_Display']">
          {blog.title}
        </h3>
        <p className="mt-2 text-gray-600 font-['Cormorant_Garamond'] text-base sm:text-lg">
          {blog.description.slice(0, 120)}...
        </p>
        <button
          className="mt-4 text-yellow-900 font-bold underline text-base sm:text-lg"
          onClick={() => navigate(`/blog/${blog.id}`)}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

const Blog = () => {
  const carouselSlides = [
    {
      src: "https://dcassetcdn.com/design_img/2732980/643152/643152_14878325_2732980_4b827cb5_image.png",
      alt: "Slide 1",
    },
    {
      src: "https://dcassetcdn.com/design_img/2732980/88130/88130_14879831_2732980_e5c8b3b7_image.jpg",
      alt: "Slide 2",
    },
    {
      src: "https://dcassetcdn.com/design_img/2886222/654209/654209_15934433_2886222_90f467d9_image.jpg",
      alt: "Slide 3",
    },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <img
        className="object-cover w-full h-80 sm:h-96 md:h-[500px] overflow-hidden"
        src="https://battulaaljewels.com/website/images/product-banner.webp"
        alt="Blog Banner"
      />
      <NavbarDemo />

      {/* Page Title */}
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-full text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-900 font-['Playfair_Display']">
            Our Jewelry Blog
          </h2>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600 font-['Cormorant_Garamond'] italic">
            Explore tips, trends, and stories behind our exquisite jewelry.
          </p>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoBlogs.map((b) => (
            <BlogCard key={b.id} blog={b} />
          ))}
        </div>
      </section>

      {/* Carousel + Sections */}
      <ProductsCarousel slides={carouselSlides} options={OPTIONS} />
      <AssuranceSection />
      <BenefitsSection />
      <PagesFooter />
    </div>
  );
};

export default Blog;
