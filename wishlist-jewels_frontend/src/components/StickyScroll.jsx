import React, { useState, useEffect, useRef } from "react";

export default function ParallaxImage({
  src,
  alt,
  parallaxFactor = 0.3,
  fadeDuration = 500,
  showSpinner = true,
  spinnerColor = "rgba(0,0,0,0.4)",
  vertical = false,
  className = ""
}) {
  const [loading, setLoading] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);

  // Measure container offset for parallax
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const winHeight = window.innerHeight;
      const winWidth = window.innerWidth;

      const off = vertical
        ? rect.top - (winHeight - rect.height) / 2
        : rect.left - (winWidth - rect.width) / 2;

      setOffset(off);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [vertical]);

  // Fade in after load
  useEffect(() => {
    if (!loading) {
      const timeout = setTimeout(() => setOpacity(1), 20); // start fade
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  // Compute parallax style
  const parallaxStyle = {};
  if (vertical) {
    parallaxStyle.transform = `translateY(${offset * parallaxFactor}px)`;
  } else {
    parallaxStyle.transform = `translateX(${offset * parallaxFactor}px)`;
  }
  parallaxStyle.opacity = opacity;
  parallaxStyle.transition = `opacity ${fadeDuration}ms ease-out, transform 0.1s ease-out`;

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Image */}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="relative object-cover w-full h-full"
        style={parallaxStyle}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
      />

      {/* Spinner */}
      {loading && showSpinner && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div
            className="w-8 h-8 border-4 border-t-transparent rounded-full animate-spin"
            style={{ borderColor: spinnerColor, borderTopColor: "transparent" }}
          ></div>
        </div>
      )}
    </div>
  );
}
