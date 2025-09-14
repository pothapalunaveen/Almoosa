import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../i18n";
import "./Header.css";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const { t } = useTranslation();

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="navbar">
          {/* Logo */}
          <div className="logo">
            <img
              src="/Images/logo-almoosahealthgroup-scaled-1.webp"
              alt="Almoosa Health"
            />
          </div>

          {/* Navigation */}
          <nav className="nav">
            <ul className="nav-links">
              <li>
                <button className="nav-btn" onClick={() => toggleMenu("about")}>
                  {t("About Us")} ▾
                </button>
              </li>
              <li>
                <button
                  className="nav-btn"
                  onClick={() => toggleMenu("ventures")}
                >
                  {t("Hospitals & Ventures")} ▾
                </button>
              </li>
              <li>
                <a href="#">{t("Services")}</a>
              </li>
              <li>
                <a href="#">{t("Our Doctors")}</a>
              </li>
              <li>
                <a href="#">{t("Medical Tourism")}</a>
              </li>
              <li>
                <button
                  className="nav-btn"
                  onClick={() => toggleMenu("patients")}
                >
                  {t("For Patients & Visitors")} ▾
                </button>
              </li>
              <li>
                <button
                  className="nav-btn"
                  onClick={() => toggleMenu("academics")}
                >
                  {t("Academic Affairs")} ▾
                </button>
              </li>
              <li>
                <a href="#">{t("Awards")}</a>
              </li>
              <li>
                <a href="#">{t("Media Center")}</a>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="appointment">
            <Link to="/Components/BookAppointments" className="btn">
              {t("Book Appointment")}
            </Link>
          </div>
        </div>
      </header>

      {/* Mega Menu Panels */}
      {activeMenu === "about" && (
        <div className="mega-menu">
          <div className="mega-left">
            <h1>{t("About Us")}</h1>
            <p>
              {t(
                "Almoosa Health is a leading health care provider in the Eastern Province of Saudi Arabia. Since opening the first private hospital in Al-Ahsa in 1996, the group has grown into a network of leading healthcare facilities recognized globally."
              )}
            </p>
          </div>
          <div className="mega-right">
            <ul>
              <li>
                <a href="#">{t("Almoosa Health")}</a>
              </li>
              <li>
                <a href="#">{t("Community Services")}</a>
              </li>
              <li>
                <a href="#">{t("Board Of Governors")}</a>
              </li>
              <li>
                <a href="#">{t("Leadership Team")}</a>
              </li>
              <li>
                <a href="#">{t("Contact Us")}</a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeMenu === "ventures" && (
        <div className="mega-menu">
          <div className="mega-left">
            <h1>{t("Hospitals & Ventures")}</h1>
          </div>
          <div className="mega-right">
            <ul>
              <li>
                <a href="#">{t("Almoosa Specialist Hospital, Ahsa")}</a>
              </li>
              <li>
                <a href="#">{t("Almoosa Rehabilitation Hospital")}</a>
              </li>
              <li>
                <a href="#">{t("Almoosa Health – Al Nakheel Medical Center")}</a>
              </li>
              <li>
                <a href="#">{t("Almoosa Specialist Hospital, Hufof (under construction)")}</a>
              </li>
              <li>
                <a href="#">{t("Almoosa Specialist Hospital, Khobar (under construction)")}</a>
              </li>
              <li>
                <a href="#">{t("Pharmacies")}</a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeMenu === "patients" && (
        <div className="mega-menu">
          <div className="mega-left">
            <h1>{t("For Patients & Visitors")}</h1>
            <p>
              {t(
                "The For Patients & Visitors section provides essential information, guidelines, and resources tailored to enhance the experience and understanding of individuals seeking medical care or visiting a healthcare facility."
              )}
            </p>
          </div>
          <div className="mega-right">
            <ul>
              <li>
                <a href="#">{t("Patient Guide")}</a>
              </li>
              <li>
                <a href="#">{t("General Information")}</a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeMenu === "academics" && (
        <div className="mega-menu">
          <div className="mega-left">
            <h1>{t("Academic Affairs")}</h1>
            <p>
              {t(
                "The Training Centre section offers a comprehensive overview of upcoming events, courses, and educational opportunities, tailored to meet the needs and interests of individuals seeking to enhance their skills and knowledge in a specific field."
              )}
            </p>
          </div>
          <div className="mega-right">
            <ul>
              <li>
                <a href="#">{t("Academic Affairs")}</a>
              </li>
              <li>
                <a href="#">{t("Events & Courses")}</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
