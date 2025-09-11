// src/components/TopBar.jsx
import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <a href="#patients">Patients Portal</a>
        
        {/* ✅ Corrected external link to Google Form */}
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
          <button>
            🔍
          </button>
        </div>
        <a href="#arabic" className="lang-switch">
          العربية
        </a>
      </div>
    </div>
  );
};

export default TopBar;
