import React from "react";
import "./FeatureSection.css";

const Feat = () => {
  return (
    <>
      <div className="feat-title-wrapper">
        <div
          className="feat-title"
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h>FEATURES</h>
        </div>
      </div>

      <div className="feat-wrapper">
        <div className="feat-right">
          <div
            className="feats feat-r1"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="content">
              <h2>Create tasks and To-Do lists easily. </h2>
              <p className="para">
                Our web app allow users to create tasks and to-do lists quickly
                and easily. This Web app include a user-friendly interface and
                the ability to set due dates, priority levels, and reminders for
                each task
              </p>
            </div>
          </div>

          <div
            className="feats feat-r2"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="content">
              <h2>Create tasks and To-Do lists easily. </h2>
              <p className="para">
                Our web app allow users to create tasks and to-do lists quickly
                and easily. This Web app include a user-friendly interface and
                the ability to set due dates, priority levels, and reminders for
                each task
              </p>
            </div>
          </div>
        </div>

        <div className="middle-feat-line"></div>

        <div className="feat-left">
          <div
            className="feats feat-l1"
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="content">
              <h2>Create tasks and To-Do lists easily. </h2>
              <p className="para">
                Our web app allow users to create tasks and to-do lists quickly
                and easily. This Web app include a user-friendly interface and
                the ability to set due dates, priority levels, and reminders for
                each task
              </p>
            </div>
          </div>

          <div
            className="feats feat-l2"
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="content">
              <h2>Create tasks and To-Do lists easily. </h2>
              <p className="para">
                Our web app allow users to create tasks and to-do lists quickly
                and easily. This Web app include a user-friendly interface and
                the ability to set due dates, priority levels, and reminders for
                each task
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Feat;
