import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/Images/group-logo.png" alt="Almoosa Logo" />
          </div>

          {/* Accreditation Badges */}
          <div className="badges">
            <img src="/Images/magnet-200-1_prev_ui.png" alt="Badge1" />
            <img src="/Images/HIMSS7-removebg-preview.png" alt="Badge2" />
            <img src="/Images/NURSING2.png" alt="Badge3" />
            <img src="/Images/joint_200_-_3__1_-removebg-preview-1.png" alt="Badge4" />
            <img src="/Images/excellence_4__1_-removebg-preview-1.png" alt="Badge5" />
            <img src="/Images/ashp_5__1_-removebg-preview-1.png" alt="Badge4" />
            <img src="/Images/AHA_2.png" alt="Badge5" />
          </div>

          {/* Useful Links */}
          <div className="useful-links">
            <h4>{t('USEFUL LINKS')}</h4>
            <ul>
              <li><a href="#">About Almoosa</a></li>
              <li><a href="#">Academic Affair</a></li>
              <li><a href="#">Our Doctors</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="social-media">
            <h4>SOCIAL MEDIA</h4>
            <div className="social-icons">
              <a href="#"><img src="/Images/twitter-icon.svg" alt="Twitter" /></a>
              <a href="#"><img src="/Images/instagram-icon.svg" alt="Instagram" /></a>
              <a href="#"><img src="/Images/youtube-icon.svg" alt="YouTube" /></a>
              <a href="#"><img src="/Images/linkedin-icon.svg" alt="LinkedIn" /></a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h4>
            {t('For any concerns of misconduct or unethical behavior, we encourage confidential reporting without retaliation through')}  
          </h4>
              < a href = "mailto:whistleblower@almoosahealth.com.sa" className = "footer-mail" ></a>
          <p>whistleblower@almoosahealth.com.sa</p>


          {/* App Download */}
          <div className="download-app">
            <h4>DOWNLOAD ALMOOSA APP</h4>
            <p>
              To view your medical record, get your monthly medication, and enjoy the e-payment service. Any time and from anywhere
            </p>
            <div className="app-buttons">
              <img src="Images/download-on-the-app-store.svg" alt="App Store" />
              <img src="/Images/google-play-badge.png" alt="Google Play" />
            </div>
          </div>

          {/* Twitter Box */}
          <div className="twitter-box">
            <img src="/Images/twitter-icon.svg" alt="Twitter" />
            <span>Stay up to date with our news</span>
            <a href="#" className="twitter-btn">Go to Twitter</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>ALMOOSA HOSPITAL © 2025 All Rights Reserved</p>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
