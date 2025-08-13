import React from 'react';
import { projectData } from '../type/projectData';
import ProjectCard from './projectCard';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
