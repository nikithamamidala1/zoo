// src/components/Services.jsx
import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      title: 'Guided Tours',
      description: 'Join our expert-led tours to explore the zoo and learn amazing facts about our animals.',
    },
    {
      title: 'Animal Adoption',
      description: 'Support wildlife conservation by symbolically adopting your favorite animal.',
    },
    {
      title: 'Educational Programs',
      description: 'Interactive learning experiences for kids, students, and families.',
    },
    {
      title: 'Zoo Cafe & Gift Shop',
      description: 'Enjoy delicious treats and grab souvenirs to remember your adventure.',
    },
  ];

  return (
    <section id="services" className="services-hero">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
