// src/components/JewelryShowcase.jsx
import { useState, useEffect, useRef } from 'react';

const JewelryShowcase = () => {
  const [activeSet, setActiveSet] = useState(0);
  const sectionRefs = useRef([]);
  const containerRef = useRef(null);

  // Jewelry sets data with online image URLs
  const jewelrySets = [
    {
      id: 0,
      name: "Elegant Pearl Collection",
      description: "Timeless pearls with diamond accents for a classic look",
      modelImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      jewelryImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      bgColor: "bg-rose-50",
      price: "$1,299"
    },
    {
      id: 1,
      name: "Modern Gold Statement",
      description: "Bold contemporary designs for the fashion-forward",
      modelImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      jewelryImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      bgColor: "bg-amber-50",
      price: "$1,899"
    },
    {
      id: 2,
      name: "Vintage Art Deco",
      description: "Inspired by the roaring 20s with geometric patterns",
      modelImage: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      jewelryImage: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      bgColor: "bg-blue-50",
      price: "$2,499"
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-id');
          setActiveSet(parseInt(sectionId));
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Fixed model display */}
      <div className="fixed inset-0 flex items-center justify-center z-0">
        <div className={`absolute inset-0 transition-all duration-1000 ${jewelrySets[activeSet].bgColor}`} />
        
        {/* Model image with jewelry */}
        <div className="relative h-full w-full">
          <img 
            src={jewelrySets[activeSet].modelImage} 
            alt="Model wearing jewelry"
            className="h-full w-full object-cover object-center transition-opacity duration-700"
          />
          
          {/* Jewelry close-up */}
          <div className="absolute bottom-8 right-8 w-64 h-64 bg-white p-4 rounded-lg shadow-xl transition-all duration-700 transform hover:scale-105">
            <img 
              src={jewelrySets[activeSet].jewelryImage} 
              alt="Jewelry close-up"
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2">
              {jewelrySets[activeSet].price}
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable content sections */}
      <div ref={containerRef} className="relative z-10 h-[300vh]">
        {jewelrySets.map((set, index) => (
          <section
            key={set.id}
            ref={el => sectionRefs.current[index] = el}
            data-id={set.id}
            className={`h-screen flex items-center justify-center px-8 transition-all duration-500 ${activeSet === index ? 'opacity-100' : 'opacity-20'}`}
          >
            <div className={`max-w-2xl text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-gray-100 transition-all duration-500 ${activeSet === index ? 'scale-100' : 'scale-90'}`}>
              <h2 className="text-4xl font-serif font-bold mb-4 text-gray-800">{set.name}</h2>
              <p className="text-xl mb-6 text-gray-600">{set.description}</p>
              <div className="text-2xl font-medium text-amber-700 mb-6">{set.price}</div>
              <button className="px-8 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition font-medium shadow-lg hover:shadow-xl">
                View Collection
              </button>
              <div className="mt-6 text-base text-gray-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                Scroll {index < jewelrySets.length - 1 ? 'down' : 'up'} to see {index < jewelrySets.length - 1 ? 'next' : 'previous'} set
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-4">
        {jewelrySets.map((set, index) => (
          <button
            key={set.id}
            onClick={() => {
              const section = sectionRefs.current[index];
              section.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`w-4 h-4 rounded-full transition-all flex items-center justify-center ${activeSet === index ? 'bg-amber-600 scale-125' : 'bg-gray-300'}`}
            aria-label={`View ${set.name}`}
          >
            {activeSet === index && (
              <span className="absolute text-xs font-bold text-white">{index + 1}</span>
            )}
          </button>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 bg-white bg-opacity-80 px-4 py-2 rounded-full text-base shadow-md">
        Viewing: {activeSet + 1} of {jewelrySets.length}
      </div>
    </div>
  );
};

export default JewelryShowcase;