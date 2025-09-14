// ServicesGrid.js
import React from 'react';
import './Service.css';

const Service = () => {
  const services = [
    {
      id: 1,
      img: 'Images/Pictures/shutter1.jpg',
      alt: 'Doctor Icon',
    },
    {
      id: 2,
      img: 'Images/Pictures/shutter4.jpg',
      alt: 'Nurse Icon',
    },
    {
      id: 3,
      img: 'Images/Pictures/shutter2.jpg',
      alt: 'Hospital Bed Icon',
    },
    {
      id: 4,
      img: 'Images/Pictures/shutter3.jpg',
      alt: 'Patient Icon',
    },
  ];

  return (
    <div className="services-section">
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.img} alt={service.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
