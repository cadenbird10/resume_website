import React from 'react';
import './Home.css';
import profileImage from '../assets/professionalPic.jpg'; // Make sure this path is correct

const Home: React.FC = () => {
  return (
    <section id="home" className="home">
      <div className="home-content" style={{ textAlign: 'center', color: '#fff' }}>
        <img
          src={profileImage}
          alt="Caden Bird"
          className="profile-photo"
          style={{
            width: '200px',
            borderRadius: '50%',
            marginBottom: '30px',
          }}
        />
        <h1>Hi, I'm Caden Bird</h1>
            <p>
              I'm a proud BYU student pursuing a degree in Information Systems at BYU's Marriott School of Business.
              I'm passionate about building efficient systems, solving real-world problems with data,
              and creating intuitive user experiences.
            </p>
            <p>
              I've worked in tech, sales, and leadership roles, and I love combining business strategy 
              with technical skills. At BYU Broadcasting, I work as a Student Data Analyst where I 
              support internal teams by transforming raw data into actionable insights. 
              I've built web applications using tools like React, Python, C#, SQL, and .NET. Additionally, I've 
              created dashboards and visualizations using platforms like Tableau and Domo to help 
              teams make informed decisions and improve digital content strategy.
            </p>
            <p> 
              I'm enthusiastic about projects that combine data, design, and development, and 
              I'm currently exploring roles in consulting, software engineering, data analytics, and 
              product management. I love learning from others and collaborating on meaningful solutions. Feel 
              free to explore the site and reach out if you'd like to connect!
            </p>

        <a href="/UpdatedResume1.pdf" download className="resume-button">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
