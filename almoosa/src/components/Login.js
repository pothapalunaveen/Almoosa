import React, { useState } from "react";

import "./styles.css";

const Login = () => {
  
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
    { title: "Remote Consultation", icon: "👨‍💻", isNew: true, color: "green" },
    { title: "On-site Consultation", icon: "👨‍⚕" },
    { title: "Check Symptoms", icon: "✅" },
    { title: "Health Education", icon: "⚛" },
    { title: "Virtual Tour", icon: "🧍" },
    { title: "Contact Us", icon: "💻" },
    { title: "Find Doctor", icon: "🩺" },
    { title: "E-Pharmacy", icon: "🖥" },
  ];




  return (
    <div className="container">
      {/* Left Panel */}
      <div className="left-panel">
        <img src="/Images/Pictures/home_page1.jpg" alt="Almoosa Building" className="building-image" />
        <div className="logo-container">
    <img src="/Images/Pictures/Almoosalog.svg" alt="Logo" className="logo" />
  </div>
        
        <div className="welcome-text">
        
          <h2>Welcome to</h2>
          <h1>Almoosa Health</h1>
          <div className="button-group">
            <button className="btn-patient">Continue as a Patient</button>
            <button className="btn-doctor">Continue as a Doctor</button>
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
              alt={slides[currentIndex].title}
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
            To browse your medical file and book appointments, please login or
            register now.
          </p>
          <div className="login-buttons">
            <button className="btn-login">Login</button>
            <button className="btn-register">Register</button>
          </div>
        </div>
        <h2 className="title">Let's Consult With Our Specialist Today</h2>
          <div className="grid">
            {services.map((service, index) => (
              <div
                key={index}
                className={`card ${
                  service.color === "green" ? "highlight" : ""
                }`}
              >
                {service.isNew && <span className="badge">New</span>}
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