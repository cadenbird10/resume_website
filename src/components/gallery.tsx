import React from 'react';
import './gallery.css';

// Import your images here
import g1 from '../assets/galleryPhotos/g1.jpg';
import g2 from '../assets/galleryPhotos/g2.jpg';
import g3 from '../assets/galleryPhotos/g3.jpg';
import g4 from '../assets/galleryPhotos/g4.jpg';
import g5 from '../assets/galleryPhotos/g5.jpg';
import g6 from '../assets/galleryPhotos/g6.jpeg';
import g7 from '../assets/galleryPhotos/g7.jpg';
import g8 from '../assets/galleryPhotos/g8.jpg';
import g9 from '../assets/galleryPhotos/g9.jpg';
import g10 from '../assets/galleryPhotos/g10.jpeg';
import g11 from '../assets/galleryPhotos/g11.jpeg';
import g12 from '../assets/galleryPhotos/g12.jpg';
import g13 from '../assets/galleryPhotos/g13.jpg';
import g14 from '../assets/galleryPhotos/g14.jpg';
import g15 from '../assets/galleryPhotos/g15.jpg';
import g16 from '../assets/galleryPhotos/g16.jpg';


const Gallery: React.FC = () => {
  const images = [g1, g3, g2, g4, g5, g8, g9, g7, g11, g15, g16, g12, g10, g13, g14, g6];

  return (
    <section className="gallery">
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
