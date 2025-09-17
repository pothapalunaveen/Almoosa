import React from 'react';
import { useTranslation } from 'react-i18next';
import './Service.css';

const Service = () => {
  const { t } = useTranslation();

  const cardData = [
    {
      icon: '/Images/Pictures/shutter1.jpg',
      label: t('400 Doctors'),
    },
    {
      icon: '/Images/Pictures/shutter4.jpg',
      label: t('3000 Caregivers'),
    },
    {
      icon: '/Images/Pictures/shutter3.jpg',
      label: t('430 Beds'),
    },
    {
      icon: '/Images/Pictures/shutter2.png',
      label: t('240 Clinics'),
    },
  ];

  return (
    <div className="capacity-container">
      <h2 className="capacity-title">{t("Almoosa Capacity")}</h2>
      <div className="card-grid">
        {cardData.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.icon} alt={`Icon ${index + 1}`} className="card-icon" />
            <p className="card-label">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
