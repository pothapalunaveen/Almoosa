import React, { useState } from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Header.css";


const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

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
            <img src="/Images/logo-almoosahealthgroup-scaled-1.webp" alt="Almoosa Health" />
          </div>

          {/* Navigation */}
          <nav className="nav">
            <ul className="nav-links">
              <li>
                <button
                  className="nav-btn"
                  onClick={() => toggleMenu("about")}
                >
                  About Us ▾
                </button>
              </li>
              <li>
                <button
                  className="nav-btn"
                  onClick={() => toggleMenu("ventures")}
                >
                  Hospitals & Ventures ▾
                </button>
              </li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Our Doctors</a></li>
              <li><a href="#">Medical Tourism</a></li>
              <li>
                <button
                  className="nav-btn"
                  onClick={() => toggleMenu("patients")}
                >
                  For Patients & Visitors ▾
                </button>
              </li>
              <li>
                <button
                  className="nav-btn"
                  onClick={() => toggleMenu("academics")}
                >
                  Academic Affairs ▾
                </button>
              </li>
              <li><a href="#">Awards</a></li>
              <li><a href="#">Media Center</a></li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="appointment">
           {/*  <a href="Health.js" className="btn">Book appointment</a>  */}
            <Link to="/Components/BookAppointments" className="btn">
          Book Appointment
        </Link>
          </div>
        </div>
      </header>

      {/* Mega Menu Panels */}
      {activeMenu === "about" && (
        <div className="mega-menu">
          <div className="mega-left">
            <h1>About Us</h1>
            <p>
              Almoosa Health is a leading health care provider in the Eastern
              Province of Saudi Arabia. Since opening the first private hospital
              in Al-Ahsa in 1996, the group has grown into a network of leading
              healthcare facilities recognized globally.
            </p>
          </div>
          <div className="mega-right">
            <ul>
              <li><a href="#">Almoosa Health →</a></li>
              <li><a href="#">Community Services</a></li>
              <li><a href="#">Board Of Governors</a></li>
              <li><a href="#">Leadership Team</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      )}

      {activeMenu === "ventures" && (
        <div className="mega-menu">
          <div className="mega-left">
            <h1>Hospitals & Ventures</h1>

          </div>
          <div className="mega-right">
            <ul>
              <li><a href="#">Almoosa Specialist Hospital,Ahsa</a></li>
              <li><a href="#">Almoosa Rehabilitation Hospital</a></li>
              <li><a href="#">Almoosa Health – Al Nakheel Medical Center</a></li>
              <li><a href="#">Almoosa Specialist Hospital ,Hufof "under construction"</a></li>
              <li><a href="#">Almoosa Specialist Hospital ,Khobar "under construction"l</a></li>
              <li><a href="#">Pharmacies</a></li>
            </ul>
          </div>
        </div>
      )}
      {activeMenu === "patients" && (
        <div className="mega-menu">
          <div className="mega-left">
            <h1>For Patients & Visitors</h1>
            <p>The For Patients & Visitors section provides essential information, guidelines, 
              and resources tailored to enhance the experience and understanding of individuals 
              seeking medical care or visiting a healthcare facility.
              </p>

          </div>
          <div className="mega-right">
            <ul>
              <li><a href="#">Patient Guide</a></li>
              <li><a href="#">General Information</a></li>
              
            </ul>
          </div>
        </div>
      )}


       {activeMenu === "academics" && (
        <div className="mega-menu">
          <div className="mega-left">
            <h1>Academic Affairs</h1>
            <p>The Training Centre section offers a comprehensive overview of upcoming events, courses, 
              and educational opportunities, tailored to meet the needs and interests of individuals 
              seeking to enhance their skills and knowledge in a specific field.
              </p>

          </div>
          <div className="mega-right">
            <ul>
              <li><a href="#">Academic Affairs</a></li>
              <li><a href="#">Events & Courses</a></li>
              
            </ul>
          </div>
        </div>
      )}


     



    </>
  );
};

export default Header;
