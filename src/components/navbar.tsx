import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/personalLogo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo-img" />
          <span>Caden Bird</span>
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/missionExperience">Mission Experience</Link></li>
        <li><Link to="/about">Outside of Work</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
