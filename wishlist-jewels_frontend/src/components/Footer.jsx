import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcDinersClub,
  FaCcAmex,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdChatBubbleOutline } from "react-icons/md";

export default function Footer() {
  return (
    <footer
      className="relative text-white font-[Lato] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/87/44/3c/87443c522293813fff0a7ab2cd09dd31.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-14 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          {/* QR & Download */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/QR_code_placeholder.svg/768px-QR_code_placeholder.svg.png"
              alt="QR Code"
              className="w-36 h-36 md:w-44 md:h-44 mb-5"
            />
            <div className="flex gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Play Store"
                className="h-10 md:h-12"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                className="h-10 md:h-12"
              />
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-[Playfair_Display] font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-base text-gray-200">
              <li>Delivery Information</li>
              <li>International Shipping</li>
              <li>Payment Options</li>
              <li>Track your Order</li>
              <li>Returns</li>
              <li>Find a Store</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-[Playfair_Display] font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-base text-gray-200">
              <li>Blog</li>
              <li>Offers & Contest Details</li>
              <li>Help & FAQs</li>
              <li>About Tanishq</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[Playfair_Display] font-semibold mb-4">Contact Us</h3>
            <p className="text-base text-gray-200 mb-2">1800-266-0123</p>
            <h4 className="font-semibold mb-2">Chat With Us</h4>
            <p className="text-base text-gray-200 mb-4">+91 8147349242</p>
            <div className="flex gap-4 text-xl">
              <FaWhatsapp />
              <MdEmail />
              <MdChatBubbleOutline />
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="border-t border-white/20 pt-6 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-4 text-xl mb-4 md:mb-0">
            <FaInstagram />
            <FaTwitter />
            <FaFacebookF />
            <FaYoutube />
          </div>
          <div className="flex gap-4 text-3xl text-gray-300">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
            <FaCcDinersClub />
            <FaCcAmex />
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-xs text-gray-300 py-4 border-t border-white/20">
          © 2025 Titan Company Limited. All Rights Reserved. &nbsp; | &nbsp;
          Terms & Conditions &nbsp; | &nbsp; Privacy Policy &nbsp; | &nbsp;
          Disclaimer
        </div>
      </div>
    </footer>
  );
}
