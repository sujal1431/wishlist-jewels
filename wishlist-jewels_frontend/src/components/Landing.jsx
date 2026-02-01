import React from "react";
import video from "../assets/video.mp4";
import TextReveal from "./TextReveal";

export default function Landing() {
  return (
    <div className="relative h-screen w-full">
      <video src={video} autoPlay muted loop className="absolute inset-0 w-full h-full object-cover" />

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/60 to-transparent" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <TextReveal className="text-6xl font-bold">
          Welcome to Wishlist-Jewels
        </TextReveal>

        <p className="mt-4 text-xl">Discover Exquisite Jewelry That Defines Elegance</p>
        <p className="text-xl">Timeless Designs, Premium Craftsmanship, and Unmatched Beauty</p>
      </div>
    </div>
  );
}
