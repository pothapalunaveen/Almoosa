// src/components/TopBar.jsx
import React from 'react';
import './TopBar.css';
import { useTranslation } from 'react-i18next';
import '../i18n';

const TopBar = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageSwitch = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="top-bar" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="top-bar-left">
        <a href="#patients">{t('patientsPortal')}</a>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc_itrLVu-ZWqakpC5U04o3gCajPUqu0tBLv5dgvPv8p-pNlw/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('volunteering')}
        </a>

        <a href="#careers">{t('joinTeam')}</a>
        <a href="#investors">{t('investorRelations')}</a>
      </div>

      <div className="top-bar-right">
        <div className="search-container">
          <input type="text" placeholder={t('search')} />
          <button>🔍</button>
        </div>

        {/* ✅ Language switch */}
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
