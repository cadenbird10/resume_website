import React from 'react';
import type { ExperienceItem } from '../type/experienceData';

interface Props {
  experience: ExperienceItem;
}

const ExperienceCard: React.FC<Props> = ({ experience }) => {
  return (
    <div className="experience-card">
      <h3>{experience.title}</h3>
      <h4>{experience.company} — {experience.location}</h4>
      <p className="experience-date">{experience.date}</p>
      <ul>
        {experience.bullets.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
