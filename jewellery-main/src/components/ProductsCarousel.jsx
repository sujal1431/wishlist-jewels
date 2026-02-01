import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import '../css/ProductsCarousel.css' // Import separate styling

const ProductsCarousel = ({ slides, options }) => {
  const autoplayOptions = { delay: 3000, stopOnInteraction: false }
  const [emblaRef] = useEmblaCarousel(
    { ...options, loop: true },
    [Autoplay(autoplayOptions)]
  )

  return (
    <section className="products-carousel">
      {/* Section Heading */}
      <div className="carousel-header">
        <h2>Stunning Selections</h2>
        <p>Captivating pieces to complement your elegance</p>
      </div>

      {/* Carousel */}
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsCarousel
