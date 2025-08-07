// src/components/Home.jsx
import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Welcome to Zoo Park 🐾</h1>
        <p>Discover the wild like never before! Explore, learn, and enjoy with your favorite animals.</p>
        <a href="#about" className="home-btn">Explore More</a>
      </div>
    </section>
  );
};

export default Home;
