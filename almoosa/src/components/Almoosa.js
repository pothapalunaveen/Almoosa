import React from 'react';
import './Almoosa.css';

const Almoosa = () => {
  return (
    <div className="hospital-container">
      <div className="hospital-text">
        <h1><span className="green-text">Almoosa Specialist Hospital</span></h1>
        <p>
          The hospital provides the best human-centered care in a capacity of over 500 beds, with a diverse team
          working together to achieve one mission: To promote hope and well-being for our society.
        </p>
        <p>
          Almoosa Specialist Hospital is a world-class health system that promotes wellness and heals illness,
          founded in 1996 as the first private hospital in Ahsa, offering high-quality integrated healthcare.
        </p>
        <p>
          Ranked among the best ten hospitals in the GCC, we ensure to provide our patients with the best care in
          the Kingdom and GCC with qualified, competent caregivers using the latest technologies and evidence-based techniques.
        </p>
        <p>
          Almoosa Specialist Hospital is an academic teaching hospital accredited by the Saudi Commission for Health
          Specialties (SCHS), with 15 residency programs, three fellowship programs, and two diploma programs.
        </p>
      </div>

      <div className="hospital-image">
        <img src="Images/Pictures/home_page1.jpg" alt="Almoosa Specialist Hospital Building" />
      </div>

      <div className="programs-container">
        <h2>
          <span className="green-text">Our leading programs and Centers of excellence</span>
        </h2>
        <ul className="programs-list">
          <li>The region's most preferred Bone and Joint Center.</li>
          <li>Comprehensive cancer center.</li>
          <li>A world-class neuroscience center with a stroke program.</li>
          <li>
            Advanced heart center with all the latest cardiac modalities such as a hybrid operation room and an electrophysiology lab.
          </li>
          <li>The region’s largest and most comprehensive maternity and children’s program.</li>
        </ul>
      </div>
      <div className="video-container">
      <video width="100%" height="auto" controls>
        <source src="https://almoosahealthgroup.org/wp-content/uploads/2023/10/البرج-الشمالي-لمستشفى-الموسى-.-التجربة-الاستشفائية-المتكاملة.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
  );
};

export default Almoosa;
