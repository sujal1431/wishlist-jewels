import React from "react";

export default function TextReveal({ children, className = "" }) {
  // Split the text into letters (if children is string)
  const text = typeof children === "string" ? children : "";

  return (
    <span className={className} style={{ display: "inline-block", overflow: "hidden" }}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity: 0,
            transform: "translateY(20px)",
            animation: `fadeUp 0.5s forwards`,
            animationDelay: `${i * 0.05}s`,
            whiteSpace: char === " " ? "pre" : undefined,
          }}
        >
          {char}
        </span>
      ))}

      <style>{`
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </span>
  );
}
