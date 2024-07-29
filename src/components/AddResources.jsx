import React from "react";

import "./addResources.css";

const AddResources = () => {
  return (
    <>
      <div
        className="btn-wrapper"
        data-aos="fade-down"
        data-aos-delay="1000"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
      >
        <div className="add-btn">
          <span>+</span>
          Add
          <img src="arrow-down.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default AddResources;
