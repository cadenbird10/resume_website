export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export const projectData: Project[] = [
  {
    title: 'INTEX Fall - Integrated Exercises - Turtle Shelter Project',
    description:
      'This project is a full-stack web platform designed to help community organizers manage emergency shelter events, volunteers, and resources. The system includes both public-facing pages for community engagement and internal admin portals for secure event planning and record-keeping. The application features robust role-based access, session management, and full CRUD operations for users, volunteers, and events. ',
    technologies: ['Node.js', 'PostgreSQL', 'EJS Views', 'AWS-hosted DB', 'Tableau Dashboard'],
    // link: 'https://github.com/cadenbird10/intex_fall', // Add a GitHub or demo link if available
  },
  {
    title: 'INTEX Winter - Integrated Exercises - Movie Streaming Service',
    description:
      'Built a mock niche movie streaming platform with a dynamic React frontend and a C# ASP.NET backend. The application featured full CRUD functionality, authenticated login, movie rating ability, and paginated browsing. Applied the CRISP-DM methodology to analyze large datasets and develop both collaborative and content-based filtering models for personalized recommendations, simulating a real-world streaming experience.',
    technologies: ['C#', 'React', 'Python', 'CRISP-DM', 'Machine Learning', 'PostgreSQL', 'Cookies & Sessions'],
    link: 'https://github.com/cadenbird10/intex_winter', // Add a GitHub or demo link if available
  },
  {
    title: '2025 NBA Draft Board',
    description:
      'Built an interactive NBA draft board using React and TypeScript, designed to help users explore and compare top prospects. The platform includes search and filtering by scout, sortable rankings, and dynamic player cards displaying aggregated data from multiple sources. Users can compare players side-by-side using checkboxes and view detailed statistics to make informed decisions. The project emphasizes clean UI, responsive design, and data-driven insights for basketball enthusiasts.',
    technologies: ['React', 'TypeScript', 'Search & Filter Functionality', 'Sortable Rankings Optionality'],
    link: 'https://nbadraftboardmavs.netlify.app/', // Add a GitHub or demo link if available
  },
  // Add more projects here if you have them
];
