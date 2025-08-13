import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Experience from './components/experience';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';
import Mission from './components/missionExperience'

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/missionExperience" element={<Mission />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
