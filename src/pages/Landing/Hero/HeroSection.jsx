import React from "react";
import { Link } from "react-router-dom";

import "./HeroSection.css";

const Hero = () => {
  return (
    <div
      className="hero_section"
      data-aos="fade-down"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="hero_left">
        <h1 className="hero_title">Stay on Top of Your Tasks with Taskopia</h1>
        <div className="hero_para_container">
          <p className="hero_para">
            Welcome to Taskopia - the ultimate solution for keeping your to-do
            list organized and efficient. With our user-friendly interface, you
            can easily manage your tasks, set reminders, and track your
            progress.
          </p>
          <Link to="/login">
          <button className="hero-cta-btn">Create New Task</button>
          </Link>
        </div>



      </div>

      {/* right side1 */}

      <div className="hero_right">
        <div
          className="row_1"
          data-aos="fade-down"
          data-aos-delay="250"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="hexa hex_1_1">
            {/* <img src="src/assets/pattern_1.jpg" alt="Description of the image" /> */}
          </div>
        </div>

        <div className="row_2">
          <div
            className="we"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="1050"
            data-aos-easing="ease-in-out"
          >
            <div className="hexa hex_2_1"></div>
          </div>

          <div
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="1100"
            data-aos-easing="ease-in-out"
          >
            <div className="hexa hex_2_2"></div>
          </div>

          <div
            className="us"
            data-aos="fade-down"
            data-aos-delay="700"
            data-aos-duration="1150"
            data-aos-easing="ease-in-out"
          >
            <div className="hexa hex_2_3"></div>
          </div>
        </div>

        <div className="row_3">
          <div>
            <div className="hexa hex_3_1"></div>
          </div>

          <div>
            <div className="hexa hex_3_2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
