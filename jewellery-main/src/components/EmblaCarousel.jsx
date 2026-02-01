import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const EmblaCarousel = ({ slides, options }) => {
  const autoplayOptions = { delay: 3000, stopOnInteraction: false }
  const [emblaRef] = useEmblaCarousel(
    { ...options, loop: true },
    [Autoplay(autoplayOptions)]
  )

  return (
    <section className="embla relative w-full min-h-[80vh] bg-gradient-to-b from-black via-[#001f3f] to-black py-16 px-4">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-white tracking-widest drop-shadow-lg">
          Stunning Selections
        </h2>
        <p className="text-gray-300 mt-3 text-base md:text-lg italic">
          Captivating pieces to complement your elegance
        </p>
      </div>

      {/* Top fade */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/80 to-transparent z-10" />
      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/80 to-transparent z-10" />

      {/* Carousel */}
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div
              className="embla__slide flex justify-center items-center"
              key={index}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-[500px] object-cover rounded-xl shadow-lg transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
