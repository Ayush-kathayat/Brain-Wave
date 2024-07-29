import React from "react";
import "./addResources.css";

const AddResources = () => {
  return (
    <>

    {/* had to use the inline css for the transition effect as the class was not working i don't know why though i think some specificity issue */}
      <div
        className="btn-wrapper"
        style={{ transition: 'background-color 0.5s ease, border-color 0.5s ease' }}
        data-aos="fade-down"
        data-aos-delay="1000"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
      >
        <div
          className="add-btn"
          style={{ transition: 'color 0.5s ease' }}
        >
          Add
          <img src="arrow-down.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default AddResources;