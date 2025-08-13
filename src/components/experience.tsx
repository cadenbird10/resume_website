import React from 'react';
import { experienceData } from '../type/experienceData';
import ExperienceCard from './experienceCard';
import './experience.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <br />
      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
