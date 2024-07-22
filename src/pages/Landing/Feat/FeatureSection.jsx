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
              <h2>Secure Content Management</h2>
              <p className="para">
                Safely save and manage all your course content, including links,
                images, and PDFs. Our secure backend ensures your data is
                protected and always accessible.
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
              <h2>Personalized Learning Modules</h2>
              <p className="para">
                Create custom modules to categorize and streamline your course
                materials. Personalize your learning journey with tailored
                content organization.
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
              <h2>User Authentication and Security </h2>
              <p className="para">
                Enjoy robust authentication to keep your data secure. Only
                authenticated users can access and modify their content,
                ensuring privacy and integrity.
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
              <h2>Cross-Device Sync </h2>
              <p className="para">
                Access your organized content from any device, anywhere. Our
                backend synchronization ensures your updates are reflected
                across all your devices for a seamless experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feat;
