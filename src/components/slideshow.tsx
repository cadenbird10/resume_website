import React, { useState, useEffect, useRef } from 'react';
import './slideshow.css';
import m1 from '../assets/missionPhotos/m1.jpg';
import m2 from '../assets/missionPhotos/m2.jpg';
import m3 from '../assets/missionPhotos/m3.jpg';
import m4 from '../assets/missionPhotos/m4.jpg';
import m5 from '../assets/missionPhotos/m5.jpg';
import m7 from '../assets/missionPhotos/m7.jpg';
import m8 from '../assets/missionPhotos/m8.jpg';
import m9 from '../assets/missionPhotos/m9.jpg';
import m10 from '../assets/missionPhotos/m10.jpg';
import m11 from '../assets/missionPhotos/m11.jpg';
import m12 from '../assets/missionPhotos/m12.png';

const images = [m12, m1, m2, m3, m4, m5, m7, m8, m9, m10, m11];

const Slideshow: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000); // 5 seconds
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Mission Photo ${index + 1}`}
          className={`slide ${index === current ? 'active-slide' : ''}`}
        />
      ))}
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Slideshow;
