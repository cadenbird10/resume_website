import React from 'react';
import type { Project } from '../type/projectData';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="tech-stack">
        <strong>Technologies:</strong> {project.technologies.join(', ')}
      </p>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
