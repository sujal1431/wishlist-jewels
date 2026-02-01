// src/pages/About.jsx
import React from "react";
import { NavbarDemo } from "../components/NavbarDemo";
import PagesFooter from "../components/Pages-Footer";
import "@fontsource/playfair-display";
import "@fontsource/cormorant-garamond";
import BenefitsSection from "../components/BenefitsSection";
import AssuranceSection from "../components/AssuranceSection";

const About = () => {
  return (
    <div>
      {/* Hero Banner */}
      <img
        className="object-cover w-full h-80 sm:h-96 md:h-[500px] overflow-hidden"
        src="https://battulaaljewels.com/website/images/product-banner.webp"
        alt="About Banner"
      />
      <NavbarDemo />

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-900 font-['Playfair_Display'] text-center">
          About Us
        </h2>
        <p className="mt-6 text-gray-600 font-['Cormorant_Garamond'] text-lg sm:text-xl leading-relaxed text-center">
          Welcome to Wishlist-Jewels, your trusted destination for exquisite jewelry.
          We specialize in crafting timeless pieces that celebrate elegance, style, and sophistication.
          Our passion for quality and design ensures every piece tells a story.
        </p>

        {/* Mission & Vision */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="p-6 bg-yellow-50 rounded-lg shadow-sm text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-900 font-['Playfair_Display']">
              Our Mission
            </h3>
            <p className="mt-4 text-gray-600 font-['Cormorant_Garamond'] text-lg sm:text-xl">
              To create jewelry that brings joy, elegance, and confidence to everyone who wears it.
            </p>
          </div>
          <div className="p-6 bg-yellow-50 rounded-lg shadow-sm text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-900 font-['Playfair_Display']">
              Our Vision
            </h3>
            <p className="mt-4 text-gray-600 font-['Cormorant_Garamond'] text-lg sm:text-xl">
              To be the most loved jewelry brand, recognized for craftsmanship, creativity, and timeless designs.
            </p>
          </div>
        </div>

        {/* Optional Team Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-yellow-900 font-['Playfair_Display']">
            Meet Our Team
          </h3>
          <p className="mt-4 text-gray-600 font-['Cormorant_Garamond'] text-lg sm:text-xl">
            A passionate team of designers, artisans, and customer care professionals dedicated to delivering exceptional jewelry experiences.
          </p>
        </div>
      </section>

      {/* Sections */}
      <AssuranceSection />
      <BenefitsSection />
      <PagesFooter />
    </div>
  );
};

export default About;
