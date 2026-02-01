// src/pages/Help.jsx
import React, { useState } from "react";
import { NavbarDemo } from "../components/NavbarDemo";
import PagesFooter from "../components/Pages-Footer";
import "@fontsource/playfair-display";
import "@fontsource/cormorant-garamond";
import BenefitsSection from "../components/BenefitsSection";
import AssuranceSection from "../components/AssuranceSection";

// ✅ Demo FAQs
const demoFaqs = [
  {
    id: 1,
    question: "How can I track my order?",
    answer:
      "You can track your order by logging into your account and visiting the 'My Orders' section. Each order has a tracking link to follow its delivery.",
  },
  {
    id: 2,
    question: "What is your return policy?",
    answer:
      "We offer a 14-day return policy on most products. Items must be unused and in their original packaging. Custom or personalized items are non-returnable.",
  },
  {
    id: 3,
    question: "How can I contact customer support?",
    answer:
      "You can contact our support team via phone, email, or live chat. Our team is available Monday to Saturday, 9 AM to 6 PM.",
  },
  {
    id: 4,
    question: "Do you offer gift wrapping?",
    answer:
      "Yes, we offer premium gift wrapping for an additional charge. You can select gift wrapping at checkout.",
  },
  {
    id: 5,
    question: "Can I change my delivery address after placing an order?",
    answer:
      "Address changes can only be made within 2 hours of placing the order. Please contact our support team immediately to update your address.",
  },
];

// ✅ FAQ Item Component
const FAQItem = ({ faq, index, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full text-left py-4 flex justify-between items-center text-gray-900 font-bold font-['Playfair_Display'] text-lg sm:text-xl"
      >
        {faq.question}
        <span className="text-yellow-900 text-2xl">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <p className="py-2 text-gray-600 font-['Cormorant_Garamond'] text-base sm:text-lg">
          {faq.answer}
        </p>
      )}
    </div>
  );
};

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      {/* Hero Banner */}
      <img
        className="object-cover w-full h-80 sm:h-96 md:h-[500px] overflow-hidden"
        src="https://battulaaljewels.com/website/images/product-banner.webp"
        alt="Help Banner"
      />
      <NavbarDemo />

      {/* Page Title */}
      <section className="py-12 bg-white sm:py-16 lg:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-900 font-['Playfair_Display']">
          Help & FAQs
        </h2>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600 font-['Cormorant_Garamond'] italic">
          Find answers to common questions and get help quickly.
        </p>
      </section>

      {/* FAQs Accordion */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md">
        {demoFaqs.map((faq, index) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            index={index}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />
        ))}
      </section>

      {/* Optional Help Section */}
      <section className="py-12 bg-white sm:py-16 lg:py-20 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-yellow-900 font-['Playfair_Display']">
          Need More Help?
        </h3>
        <p className="mt-4 text-gray-600 font-['Cormorant_Garamond'] text-lg sm:text-xl">
          Contact our support team for personalized assistance or guidance.
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 px-6 py-3 bg-yellow-900 text-white font-bold rounded-lg text-lg sm:text-xl hover:bg-yellow-800 transition"
        >
          Contact Support
        </a>
      </section>

      {/* Sections */}
      <AssuranceSection />
      <BenefitsSection />
      <PagesFooter />
    </div>
  );
};

export default Help;
