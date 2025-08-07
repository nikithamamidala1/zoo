// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
