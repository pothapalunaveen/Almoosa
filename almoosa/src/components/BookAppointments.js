import React, { useState } from "react";
import { useTranslation } from "react-i18next";

 
import "./styles.css";





const BookAppointments = () => {
  const { t,i18n } = useTranslation();
  const toggleLanguage = () => {
  const newLang = i18n.language === "en" ? "ar" : "en";
  i18n.changeLanguage(newLang);
  document.documentElement.lang = newLang;
  document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("lang", newLang); // optional
};
 

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
    { title: "services.remote", icon: "👨‍💻", isNew: true, color: "green" },
    { title: "services.onsite", icon: "👨‍⚕" },
    { title: "services.symptoms", icon: "✅" },
    { title: "services.education", icon: "⚛" },
    { title: "services.tour", icon: "🧍" },
    { title: "services.contact", icon: "💻" },
    { title: "services.doctor", icon: "🩺" },
    { title: "services.pharmacy", icon: "🖥" },
  ];

  return (
    
    <div className="container">
    <button onClick={toggleLanguage} className="lang-switcher">
  {i18n.language === "en" ? "ع" : "EN"}
</button>



      
      {/* Left Panel */}
      <div className="left-panel">
        <img
          src="/Images/Pictures/home_page1.jpg"
          alt="Almoosa Building"
          className="building-image"
        />
        <div className="logo-container">
          <img src="/Images/Pictures/Almoosalog.svg" alt="Logo" className="logo" />
        </div>

        <div className="welcome-text">
          <h2>{t("login.welcomeTo")}</h2>
          <h1>{t("login.almoosa")}</h1>
          <div className="button-group">
            <button className="btn-patient">{t("login.patientBtn")}</button>
            <button className="btn-doctor">{t("login.doctorBtn")}</button>
          </div>
        </div>
      </div>

      
      
      {/* Right Panel */}
      <div className="right-panel">
        <div className="carousel">
          <div className="slide">
            <img
              src={slides[currentIndex].img}
              alt={`slide-${currentIndex}`}
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
          <p>{t("login.message")}</p>
          <div className="login-buttons">
            <button className="btn-login">{t("login.loginBtn")}</button>
            <button className="btn-register">{t("login.registerBtn")}</button>
          </div>
        </div>

        <h2 className="title">{t("login.consultTitle")}</h2>
        <div className="grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card ${service.color === "green" ? "highlight" : ""}`}
            >
              {service.isNew && <span className="badge">{t("login.new")}</span>}
              <div className="icon">{service.icon}</div>
              <p>{t(service.title)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookAppointments;
