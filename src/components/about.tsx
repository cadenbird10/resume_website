import React from 'react';
import './About.css';
import Gallery from './gallery'; // Make sure the filename and path are correct

const About: React.FC = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="about-container">
          <div className="about-content">
            <h2>More About Me</h2>
            <p>
              Outside of school and work, I really enjoy staying active. I grew up playing all kinds of 
              sports like basketball, soccer, and football, and that competitive spirit has always been 
              part of me. These days, I stay involved by joining intramural teams on campus. It is a fun 
              way to meet people and take a break from everything else.
            </p>
            <p>
              I also love spending time outdoors and exploring new places. Whether it is hiking, biking,
               fishing, or relaxing with friends, I am always up for something adventurous. Traveling 
               and trying new things helps me recharge and keeps life interesting. It is a great way 
               to stay balanced and inspired.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />
    </>
  );
};

export default About;
