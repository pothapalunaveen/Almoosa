import React from 'react';
import './TopBar.css';
import { useTranslation } from 'react-i18next';
import '../i18n';

const TopBar = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageSwitch = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <a href="#patients">{t('Patients Portal')}</a>
        <a
          href="https://docs.google.com/forms/..."
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('Volunteering')}
        </a>
        <a href="#careers">{t('Join Our Team')}</a>
        <a href="#investors">{t('Investor Relations')}</a>
      </div>

      <div className="top-bar-right">
        <div className="search-container">
          <input type="text" placeholder={t('search')} />
          <button>🔍</button>
        </div>

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
