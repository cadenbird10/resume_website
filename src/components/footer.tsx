import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Caden Bird. All rights reserved.</p>
        <div className="footer-links">
          <a href="mailto:caden.bird32@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/caden-bird" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/cadenbird10" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
