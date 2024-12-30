'use client';

import { useState, useEffect } from 'react';

export default function ImageSlideshow() {
  const images = ['/assets/burger.jpg', '/assets/curry.jpg', '/assets/dumplings.jpg', '/assets/pizza.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: '600px', height: '400px', margin: '0 auto', overflow: 'hidden' }}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}
