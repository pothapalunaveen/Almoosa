import React, { useState } from "react";
import { useTranslation } from "react-i18next"; 
import "./styles.css";

const Login = () => {
  const { t,i18n } = useTranslation(); 

  const slides = [
    { img: "/Images/Pictures/Almoosa1.jpeg" },
    { img: "/Images/Pictures/Almoosa2.jpeg" },
    { img: "/Images/Pictures/Almoosa3.png" },
    { img: "/Images/Pictures/Almoosa4.jpeg" },
    { img: "/Images/Pictures/Almoosa5.jpeg" },
    { img: "/Images/Pictures/Almoosa6.jpeg" },
    { img: "/Images/Pictures/Almoosa7.jpeg" },
    { img: "/Images/Pictures/Almoosa8.jpeg" },
    { img: "/Images/Pictures/Almoosa9.jpeg" },
    { img: "/Images/Pictures/Almoosa10.jpeg" },
    { img: "/Images/Pictures/Almoosa11.jpeg" },
    { img: "/Images/Pictures/Almoosa12.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    { title: t("Remote Consultation"), icon: "👨‍💻", isNew: true, color: "green" },
    { title: t("On-site Consultation"), icon: "👨‍⚕" },
    { title: t("Check Symptoms"), icon: "✅" },
    { title: t("Health Education"), icon: "⚛" },
    { title: t("Virtual Tour"), icon: "🧍" },
    { title: t("Contact Us"), icon: "💻" },
    { title: t("Find Doctor"), icon: "🩺" },
    { title: t("E-Pharmacy"), icon: "🖥" },
  ];

  return (
    <div className="container">
      {/* Left Panel */}
      <div className="left-panel">
        <img
          src="/Images/Pictures/home_page1.jpg"
          alt={t("Almoosa Building")}
          className="building-image"
        />
        <div className="logo-container">
          <img
            src="/Images/Pictures/Almoosalog.svg"
            alt={t("Logo")}
            className="logo"
          />
        </div>

        <div className="welcome-text">
          <h2>{t("Welcome to")}</h2>
          <h1>{t("Almoosa Health")}</h1>
          <div className="button-group">
            <button className="btn-patient">{t("Continue as a Patient")}</button>
            <button className="btn-doctor">{t("Continue as a Doctor")}</button>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        <div className="carousel">
          {/* Slide */}
          <div className="slide">
            <img
              src={slides[currentIndex].img}
              alt={t("Slide Image")}
              className="slide-image"
            />
          </div>

          {/* Dots */}
          <div className="dots">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="login-section">
          <p>
            {t(
              "To browse your medical file and book appointments, please login or register now."
            )}
          </p>
          <div className="login-buttons">
            <button className="btn-login">{t("Login")}</button>
            <button className="btn-register">{t("Register")}</button>
          </div>
        </div>

        <h2 className="title">{t("Let's Consult With Our Specialist Today")}</h2>
        <div className="grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card ${service.color === "green" ? "highlight" : ""}`}
            >
              {service.isNew && <span className="badge">{t("New")}</span>}
              <div className="icon">{service.icon}</div>
              <p>{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
