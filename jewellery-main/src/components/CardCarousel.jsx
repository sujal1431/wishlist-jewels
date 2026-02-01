import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";

const Badge = ({ children }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 8px",
      border: "1px solid #ccc",
      borderRadius: "14px",
      fontSize: "14px",
      background: "#fff",
    }}
  >
    {children}
  </span>
);

export const CardCarousel = ({
  images = [],
  autoplayDelay = 2000,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
    .swiper {
      width: 100%;
      padding-bottom: 60px;
    }
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 280px;
      height: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
    .swiper-slide img,
    .swiper-slide video {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgb(0 0 0 / 0.15);
    }
    .product-name {
      font-weight: 600;
      font-size: 18px;
      color: #333;
      text-align: center;
      user-select: none;
    }
    .swiper-3d .swiper-slide-shadow-left,
    .swiper-3d .swiper-slide-shadow-right {
      background: none;
    }
    .swiper-button-next,
    .swiper-button-prev {
      color: #333;
      top: 45%;
      width: 40px;
      height: 40px;
    }
    .swiper-pagination-bullet {
      background: #999;
      opacity: 0.7;
    }
    .swiper-pagination-bullet-active {
      background: #333;
      opacity: 1;
    }
  `;

  return (
    <section
      style={{
        marginTop: "40px",
        paddingLeft: "20px",
        paddingRight: "20px",
        maxWidth: "100vw",
        boxSizing: "border-box",
      }}
    >
      <style>{css}</style>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <Badge>✨ Featured Jewelry</Badge>
        <h3
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginTop: "10px",
            marginBottom: "12px",
          }}
        >
          Our Jewelry Collection
        </h3>
        <p style={{ marginBottom: "20px", fontSize: "18px" }}>
          Explore our exquisite rings, necklaces, earrings, and daily wear pieces.
        </p>

        <Swiper
          spaceBetween={40}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={showPagination}
          navigation={
            showNavigation
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }
              : undefined
          }
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        >
          {images.map(({ src, alt, name }, index) => (
            <SwiperSlide key={index}>
              {src.endsWith(".mp4") ? (
                <video
                  src={src}
                  alt={alt}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img src={src} alt={alt} />
              )}
              <div className="product-name">{name}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
