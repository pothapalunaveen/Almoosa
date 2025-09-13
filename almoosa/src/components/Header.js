// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
                  {t("aboutUs")} ▾
                </button>
              </li>
              <li>
                <button
                  className="nav-btn"
                  onClick={() => toggleMenu("ventures")}
                >
                  {t("ventures")} ▾
                </button>
              </li>
              <li>
                <a href="#">{t("service")}</a>
              </li>
              <li>
                <a href="#">{t("ourDoctors")}</a>
              </li>
              <li>
                <a href="#">{t("medicalTourism")}</a>
              </li>
              <li>
                <button
                  className="nav-btn"
                  onClick={() => toggleMenu("patients")}
                >
                  {t("patientsVisitors")} ▾
                </button>
              </li>
              <li>
                <button
                  className="nav-btn"
                  onClick={() => toggleMenu("academics")}
                >
                  {t("academicAffairs")} ▾
                </button>
              </li>
              <li>
                <a href="#">{t("awards")}</a>
              </li>
              <li>
                <a href="#">{t("mediaCenter")}</a>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="appointment">
            <a
              href="/book-appointments"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              {t("bookAppointment")}
            </a>
          </div>


        </div>
      </header>

      {/* Mega Menu Panels */}
      {activeMenu === "about" && (
        <div className="mega-menu">
          <div className="mega-left">
            <h1>{t("aboutUs")}</h1>
            <p>{t("aboutUsDesc")}</p>
          </div>
          <div className="mega-right">
            <ul>
              <li>
                <a href="#">{t("almoosaHealth")}</a>
              </li>
              <li>
                <a href="#">{t("communityServices")}</a>
              </li>
              <li>
                <a href="#">{t("boardOfGovernors")}</a>
              </li>
              <li>
                <a href="#">{t("leadershipTeam")}</a>
              </li>
              <li>
                <a href="#">{t("contactUs")}</a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeMenu === "ventures" && (
        <div className="mega-menu">
          <div className="mega-left">
            <h1>{t("ventures")}</h1>
          </div>
          <div className="mega-right">
            <ul>
              <li>
                <a href="#">{t("venture1")}</a>
              </li>
              <li>
                <a href="#">{t("venture2")}</a>
              </li>
              <li>
                <a href="#">{t("venture3")}</a>
              </li>
              <li>
                <a href="#">{t("venture4")}</a>
              </li>
              <li>
                <a href="#">{t("venture5")}</a>
              </li>
              <li>
                <a href="#">{t("pharmacies")}</a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeMenu === "patients" && (
        <div className="mega-menu">
          <div className="mega-left">
            <h1>{t("patientsVisitors")}</h1>
            <p>{t("patientsVisitorsDesc")}</p>
          </div>
          <div className="mega-right">
            <ul>
              <li>
                <a href="#">{t("patientGuide")}</a>
              </li>
              <li>
                <a href="#">{t("generalInfo")}</a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeMenu === "academics" && (
        <div className="mega-menu">
          <div className="mega-left">
            <h1>{t("academicAffairs")}</h1>
            <p>{t("academicAffairsDesc")}</p>
          </div>
          <div className="mega-right">
            <ul>
              <li>
                <a href="#">{t("academicAffairs")}</a>
              </li>
              <li>
                <a href="#">{t("eventsCourses")}</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
