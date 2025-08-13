
import React from 'react';
import './Mission.css';
import Slideshow from './slideshow'; // Adjust the path if needed

const Mission: React.FC = () => {
  return (
    <section className="mission-section">
      <h1 className="mission-title">LDS Mission Experience</h1>
      <h2 className="mission-subtitle">
        Volunteer Representative - Spanish Fluency<br />
        <span className="mission-location">
          The Church of Jesus Christ of Latter-day Saints — Queretaro, Mexico
        </span>
        <span className="mission-dates">Feb 2021 - Jan 2023</span>
      </h2>

      {/* Slideshow directly below the dates */}
      <Slideshow />

      <ul className="mission-list">
        <h2><strong>Accomplishments</strong></h2>
        <li>
          Designed several training programs/documents and led 140+ volunteers, optimizing
          efficiency and performance
        </li>
        <li>
          Conducted conferences in Spanish, promoting community engagement and
          outreach initiatives
        </li>
        <li>
          Increased area statistical success by 25% in 6 months using strategic
          planning and volunteer engagement
        </li>
        <h2><strong>Personal Growth</strong></h2>
        <p style={{ fontSize: '1.3rem' }}>Serving as a missionary in Mexico was a transformative experience that deeply shaped my worldview and work ethic. 
          Immersed in the language and culture, I developed a profound love for the people and their traditions. 
          The experience instilled in me a strong sense of purpose, discipline, and empathy—qualities that continue 
          to guide how I lead, collaborate, and solve problems in both technical and business environments. It taught me the 
          value of service, resilience, and connection, which I carry into every aspect of my personal and professional life.</p>
      </ul>

    
    </section>
  );
};

export default Mission;
