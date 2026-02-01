import React from "react";
import "../css/AssuranceSection.css";

const AssuranceSection = () => {
  const assurances = [
    {
      icon: "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3b9ddaa7/assurance/assurance-tq-logo.png",
      title: "Tanishq Exchange",
    },
    {
      icon: "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dweee090e8/assurance/assurance-bis-logo.png",
      title: "Purity Guarantee",
    },
    {
      icon: "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd5ca947e/assurance/assurance-replacement-logo.png",
      title: "Easy Replacements",
    },
    {
      icon: "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0d956907/assurance/assurance-maintainence-logo.png",
      title: "Lifetime Maintenance",
    },
  ];

  return (
    <section className="assurance-section">
      <div className="assurance-card">
        <h2 className="assurance-title">The Wishlist-Jewels Assurance</h2>
        <p className="assurance-subtitle">
          Crafted by experts, cherished by you.
        </p>

        <div className="assurance-icons">
          {assurances.map((item, index) => (
            <div className="assurance-item" key={index}>
              <img src={item.icon} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssuranceSection;
