import { useState } from 'react';

export default function SlideGallery(){
    const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { src: 'carousel1.jpg', alt: 'Slide 1' },
    { src: 'carousel2.jpg', alt: 'Slide 2' },
    { src: 'carousel3.jpg', alt: 'Slide 3' },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden h-full rounded-md">
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === currentSlide ? 'block active' : 'hidden'
            }
            style={{
              transition: 'opacity 1s ease-in-out',
              opacity: index === currentSlide ? 1 : 0
            }}
          >
            <img className="w-full h-full object-cover" src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <div className="absolute flex justify-between items-center top-0 bottom-0 w-full">
        <button
          type="button"
          className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white z-10 left-0 flex items-center justify-center px-4 py-2 bg-transparent"
          onClick={handlePrevSlide}
        >
          <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <button
          type="button"
          className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white z-10 right-0 flex items-center justify-center px-4 py-2 bg-transparent"
          onClick={handleNextSlide}
        >
          <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}
