import React from "react";
import "./Leadership.css";
import TopBar from "./TopBar";
import Header from "./Header";

const teamMembers = [
  {
    name: "Dr. Malek Almoosa",
    title: "Chief Executive Officer, Almoosa Health",
    image: "/images/Pictures/1.jpg",
  },
  {
    name: "Dr. Zainab Al Moosa",
    title: "Consultant Pediatric Infectious Diseases & CEO, Almoosa Specialist Hospital",
    image: "/images/Pictures/2.jpg",
  },
  {
    name: "Dr. Mona Khamis",
    title: "Chief Executive Officer, Almoosa Rehabilitation Hospital",
    image: "/images/Pictures/3.jpg",
  },
  {
    name: "Dr. Mahmoud Mustafa",
    title: "Chief of Quality, Almoosa Health",
    image: "/images/Pictures/4.jpg", // <-- Fixed case of 'pictures' to 'Pictures'
  },
  {
    name: "Dr. Samer Qara",
    title: "Chief Medical Officer, Almoosa Health",
    image: "/images/Pictures/5.jpg",
  },
  {
    name: "Mr. Shailesh Chander",
    title: "Chief Financial Officer, Almoosa Health",
    image: "/images/Pictures/6.jpg",
  },
  {
    name: "Mrs. Hera Tashjian",
    title: "Chief of Nursing Officer, Almoosa Health",
    image: "/images/Pictures/7.jpg",
  },
  {
    name: "Eng. Diaa Kamal",
    title: "Chief Information Officer, Almoosa Health",
    image: "/images/Pictures/8.jpg",
  },
  {
    name: "Mrs. Sara Almoosa",
    title: "Chief of Marketing and Social Responsibility, Almoosa Health",
    image: "/images/Pictures/9.jpg",
  },
  {
    name: "Mr. Naief Alkhowaiter",
    title: "Chief Operating Officer, Almoosa Health",
    image: "/images/Pictures/10.jpg",
  },
  {
    name: "Ms. Alik Sarian",
    title: "Portfolio Management Office Executive Director, Almoosa Health",
    image: "/images/Pictures/11.jpg",
  },
  {
    name: "Eng. Abdulrahim Alnatour",
    title: "Chief of Facility Management and Safety, Almoosa Health",
    image: "/images/Pictures/12.jpg",
  },
];

const Leadership = () => {
  return (
    <>
    <TopBar/>
    <Header/>
    <div className="leadership-container">
      {/* Top Navigation */}
      <nav className="navbar">
        <div className="nav-back" role="button" aria-label="Go Back">&larr;</div>
        <ul className="nav-menu">
          <li>Our Values</li>
          <li>Almoosa History</li>
          <li>Our History</li>
          <li>Board Of Governors</li>
          <li className="active">Leadership Team</li>
        </ul>
        <div className="nav-forward" role="button" aria-label="Go Forward">&rarr;</div>
      </nav>

      {/* Heading */}
      <h1 className="leadership-heading">
        <span className="green">Leadership</span> Team
      </h1>

      {/* Team Members */}
      <div className="team-section">
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} loading="lazy" />
              <h3>{member.name}</h3>
              <p className="title">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Leadership;
