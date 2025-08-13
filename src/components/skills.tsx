import React from 'react';
import './skills.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>

      <div className="skills-category">
        <h3>Proficient In</h3>
        <p>Python, JavaScript, HTML/CSS, C#, PostgreSQL, Tableau, SQL, DOMO</p>
      </div>

      <div className="skills-category">
        <h3>Experienced In</h3>
        <p>
          Excel, Public Speaking, AWS, Full-Stack Development, Agile, SCRUM, Project Management, Salesforce, VBA,
          Machine Learning, sklearn, React, Azure, ASP.NET, Node.js, Figma
        </p>
      </div>

      <div className="skills-category">
        <h3>Lead Developer - INTEX Project</h3>
        <ul>
          <li>Built dynamic React frontend with full CRUD functionality, enhancing overall UI/UX</li>
          <li>Analyzed large datasets using CRISP-DM to create collaborative and content filtering models</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Miscellaneous Skills</h3>
        <p>
          Nunchuck skills, juggling, lots of other really cools things
        </p>
      </div>
    </section>
  );
};

export default Skills;
