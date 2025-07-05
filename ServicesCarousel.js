import React, { useState } from 'react';
import './ServicesCarousel.css';

const services = [
  { id: '01', title: 'LEARNING AND DEVELOPMENT', icon: '🧠' },
  { id: '02', title: 'HR AUDITS AND BENCHMARKING', icon: '📅' },
  { id: '03', title: 'PERFORMANCE MANAGEMENT SYSTEMS', icon: '💻' },
  { id: '04', title: 'STRATEGIC HR CONSULTING', icon: '🤝' },
  { id: '05', title: 'HRMS SOLUTIONS', icon: '🖥️' },
  { id: '06', title: 'RECRUITMENT & STAFFING', icon: '🔄' },
];

function ServicesCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev - 1 + services.length) % services.length);
  const next = () => setCurrent((prev) => (prev + 1) % services.length);

  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">
        YOU CAN COUNT ON <span className="highlight">US.</span>
      </h2>
      <p className="carousel-subtitle">
        We are committed to providing our customers with excellent services while offering customized solutions for all their needs.
      </p>

      <div className="carousel-container">
        <button className="nav-arrow left" onClick={prev}>‹</button>

        <div className="carousel-track">
          {services.map((service, index) => {
            const offset = (index - current + services.length) % services.length;
            let className = 'card hidden';

            if (offset === 0) className = 'card center';
            else if (offset === 1) className = 'card right-1';
            else if (offset === 2) className = 'card right-2';
            else if (offset === services.length - 1) className = 'card left-1';
            else if (offset === services.length - 2) className = 'card left-2';

            return (
              <div className={className} key={index} onClick={() => setCurrent(index)}>
                <div className="card-id">{service.id}</div>
                <div className="card-icon">{service.icon}</div>
                <div className="card-title">{service.title}</div>
              </div>
            );
          })}
        </div>

        <button className="nav-arrow right" onClick={next}>›</button>
      </div>
    </div>
  );
}

export default ServicesCarousel;
