import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdChatBubbleOutline } from "react-icons/md";
import footerVideo from "../assets/footer.mp4";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative text-white font-[Lato] overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={footerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-14 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          {/* QR & Download */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="https://qr.scan.page/uploads/qr_codes/JkLNG0.svg?1757399569"
              alt="QR Code"
              className="w-36 h-36 md:w-44 md:h-44 mb-5"
            />
            <p className="text-gray-200 text-base">Scan to visit our app</p>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-[Playfair_Display] font-semibold mb-4">
              Information
            </h3>
            <ul className="space-y-2 text-base text-gray-200">
              <li>
                <Link to="/blog" className="hover:text-yellow-400 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-yellow-400 transition">
                  Help & FAQs
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-400 transition">
                  About Wishlist-Jewels
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[Playfair_Display] font-semibold mb-4">
              Contact Us
            </h3>
            <p className="text-base text-gray-200 mb-2">
              <a href="tel:18002660123" className="hover:text-yellow-400">
                1800-266-0123
              </a>
            </p>
            <h4 className="font-semibold mb-2">Chat With Us</h4>
            <p className="text-base text-gray-200 mb-4">
              <a href="tel:+919818710013" className="hover:text-yellow-400">
                +91 9818710013
              </a>
            </p>
            <div className="flex gap-4 text-xl">
              <a
                href="https://wa.me/919818710013"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                <FaWhatsapp />
              </a>
              <a href="mailto:info@wishlist-jewels.com" className="hover:text-yellow-400 transition">
                <MdEmail />
              </a>
              <a
                href="https://instagram.com/wishlist-jewels"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com/wishlist-jewels"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://youtube.com/wishlist-jewels"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition"
              >
                <FaYoutube />
              </a>
              <a
                href="https://twitter.com/wishlist-jewels"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-xs text-gray-300 py-4 border-t border-white/20">
          © 2025 Wishlist-Jewels Limited. All Rights Reserved. &nbsp; | &nbsp;
          <Link to="/terms" className="hover:text-yellow-400">
            Terms & Conditions
          </Link>{" "}
          &nbsp; | &nbsp;
          <Link to="/privacy" className="hover:text-yellow-400">
            Privacy Policy
          </Link>{" "}
          &nbsp; | &nbsp;
          <Link to="/disclaimer" className="hover:text-yellow-400">
            Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
