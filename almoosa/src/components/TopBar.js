// src/components/TopBar.jsx
import React from 'react';
import './TopBar.css';
import { useTranslation } from 'react-i18next';
import '../i18n';


const TopBar = () => {
  const { i18n } = useTranslation();

  const handleLanguageSwitch = () => {
    const newLang = i18n.language === 'En' ? 'Ar' : 'En'; // toggle between English & Arabic
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <a href="#patients">Patients Portal</a>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc_itrLVu-ZWqakpC5U04o3gCajPUqu0tBLv5dgvPv8p-pNlw/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
        >
          Volunteering
        </a>

        <a href="#careers">Join Our Team</a>
        <a href="#investors">Investor Relations</a>
      </div>

      <div className="top-bar-right">
        <div className="search-container">
          <input type="text" placeholder="Search" />
          <button>🔍</button>
        </div>

        {/* ✅ Language switch acting like a button */}
        <a
          onClick={handleLanguageSwitch}
          role="button"
          tabIndex={0}
          className="lang-switch"
          style={{ cursor: 'pointer' }}
        >
          {i18n.language === 'en' ? 'العربية' : 'English'}
        </a>
      </div>
    </div>
  );
};

export default TopBar;
