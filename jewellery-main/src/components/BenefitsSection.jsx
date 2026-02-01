import React from "react";
import "../css/BenefitsSection.css";
import { FaSearch } from "react-icons/fa";

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        
        {/* Intro */}
        <h2 className="benefits-title">
          Discover Your Shine with <span>Wishlist-Jewels</span>
        </h2>
        <p className="benefits-intro">
          At Wishlist-Jewels, we believe every piece of jewellery tells a story.
          From everyday elegance to statement-making designs, our creations are
          crafted to celebrate your unique style and moments that matter.
        </p>

        {/* Popular Searches */}
        <div className="popular-searches">
          <h3>Popular Searches</h3>
          <div className="search-tags">
            {[
              "Gold Rings",
              "Diamond Earrings",
              "Engagement Rings",
              "Gold Necklace",
              "Silver Bracelet",
              "Wedding Bands",
            ].map((item, index) => (
              <div key={index} className="search-tag">
                {item} <FaSearch />
              </div>
            ))}
          </div>
        </div>

        {/* Benefits List */}
        <div className="benefits-list">
          <h3>Jewellery for Every Occasion</h3>
          <ul>
            <li>
              <strong>Everyday Elegance:</strong> Light, stylish designs that add a
              sparkle to your daily look without compromising comfort.
            </li>
            <li>
              <strong>Special Moments:</strong> From proposals to anniversaries,
              our timeless pieces make every celebration unforgettable.
            </li>
            <li>
              <strong>Custom Creations:</strong> Personalised designs tailored to
              match your vision and style.
            </li>
            <li>
              <strong>Trend Meets Tradition:</strong> Modern styles blended with
              classic craftsmanship.
            </li>
          </ul>
        </div>

        {/* Online Experience */}
        <div className="benefits-extra">
          <h3>Enhance Your Online Shopping Journey</h3>
          <p>
            Shop from the comfort of your home with our secure checkout, expert
            guidance, and hassle-free returns. Wishlist-Jewels brings the
            jewellery store to your fingertips.
          </p>
        </div>

        {/* Exchange Program */}
        <div className="benefits-extra">
          <h3>Reimagine Your Jewellery Collection</h3>
          <p>
            Exchange your old pieces for fresh, modern designs and get the best
            value for your jewellery.
          </p>
        </div>

        {/* Store Finder */}
        <div className="store-finder">
          <h3>Find Your Nearest Wishlist-Jewels Store</h3>
          <p className="store-links">
            Store in Delhi | Store in Mumbai | Store in Bangalore | Store in
            Chennai | Store in Kolkata
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
