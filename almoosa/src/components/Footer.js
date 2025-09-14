import React from "react";
import { useTranslation } from "react-i18next"; 
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/Images/group-logo.png" alt={t("Almoosa Logo")} />
          </div>

          {/* Accreditation Badges */}
          <div className="badges">
            <img src="/Images/magnet-200-1_prev_ui.png" alt={t("Badge1")} />
            <img src="/Images/HIMSS7-removebg-preview.png" alt={t("Badge2")} />
            <img src="/Images/NURSING2.png" alt={t("Badge3")} />
            <img src="/Images/joint_200_-_3__1_-removebg-preview-1.png" alt={t("Badge4")} />
            <img src="/Images/excellence_4__1_-removebg-preview-1.png" alt={t("Badge5")} />
            <img src="/Images/ashp_5__1_-removebg-preview-1.png" alt={t("Badge6")} />
            <img src="/Images/AHA_2.png" alt={t("Badge7")} />
          </div>

          {/* Useful Links */}
          <div className="useful-links">
            <h4>{t("USEFUL LINKS")}</h4>
            <ul>
              <li><a href="#">{t("About Almoosa")}</a></li>
              <li><a href="#">{t("Academic Affair")}</a></li>
              <li><a href="#">{t("Our Doctors")}</a></li>
              <li><a href="#">{t("Services")}</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="social-media">
            <h4>{t("SOCIAL MEDIA")}</h4>
            <div className="social-icons">
              <a href="#"><img src="/Images/twitter-icon.svg" alt={t("Twitter")} /></a>
              <a href="#"><img src="/Images/instagram-icon.svg" alt={t("Instagram")} /></a>
              <a href="#"><img src="/Images/youtube-icon.svg" alt={t("YouTube")} /></a>
              <a href="#"><img src="/Images/linkedin-icon.svg" alt={t("LinkedIn")} /></a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h4>
            {t("For any concerns of misconduct or unethical behavior, we encourage confidential reporting without retaliation through")}
          </h4>
          <a href="mailto:whistleblower@almoosahealth.com.sa" className="footer-mail"></a>
          <p>whistleblower@almoosahealth.com.sa</p>

          {/* App Download */}
          <div className="download-app">
            <h4>{t("DOWNLOAD ALMOOSA APP")}</h4>
            <p>
              {t("To view your medical record, get your monthly medication, and enjoy the e-payment service. Any time and from anywhere")}
            </p>
            <div className="app-buttons">
              <img src="Images/download-on-the-app-store.svg" alt={t("App Store")} />
              <img src="/Images/google-play-badge.png" alt={t("Google Play")} />
            </div>
          </div>

          {/* Twitter Box */}
          <div className="twitter-box">
            <img src="/Images/twitter-icon.svg" alt={t("Twitter")} />
            <span>{t("Stay up to date with our news")}</span>
            <a href="#" className="twitter-btn">{t("Go to Twitter")}</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>{t("ALMOOSA HOSPITAL © 2025 All Rights Reserved")}</p>
        <a href="#">{t("Privacy Policy")}</a>
      </div>
    </footer>
  );
};

export default Footer;
