// src/components/About.jsx
import React from 'react';
import '../styles/About.css';
import zooImage from '../assets/zoo-hero.jpg'; // Make sure you have this image

const About = () => {
  return (
    <section id="about" className="about-hero">
      <div className="about-content">
        <h2>Welcome to Zoo Park 🐾</h2>
        <p>
          Discover the magic of wildlife right in the heart of nature. Zoo Park is home to hundreds of exotic and native animals, designed to inspire love for animals and encourage conservation through education and entertainment.
        </p>
        <a href="#services" className="explore-btn">Explore Our Services</a>
      </div>
      <div className="about-image">
        <img src={zooImage} alt="Zoo Entrance" />
      </div>
    </section>
  );
};

export default About;
