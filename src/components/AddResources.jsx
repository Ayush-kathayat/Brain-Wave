import React, { useState } from "react";
import "./addResources.css";
import ActionPanel from "./actionPanel";

const AddResources = ({ onOpenModal }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isAddButtonClicked, setIsAddButtonClicked] = useState(false);

  const toggleDropdown = () => {
    console.log("Dropdown toggled");
    setDropdownVisible(!isDropdownVisible);
    setIsAddButtonClicked(!isAddButtonClicked);
  };

  const handleOpenModal = (heading, description , icon, hash_map) => {
    onOpenModal(heading, description, icon, hash_map);
    setDropdownVisible(false); // Close the dropdown after opening the modal
  };

  return (
    <div
      className="addResource-wrapper"
      data-aos="fade-down"
      data-aos-delay="1000"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
    >
      <div
        className="btn-wrapper"
        style={{
          transition: "background-color 0.5s ease, border-color 0.5s ease",
        }}
        onClick={toggleDropdown}
      >
        <div className="add-btn" style={{ transition: "color 0.5s ease" }}>
          <h1>Add</h1>
          {isAddButtonClicked ? (
            <img src="triangle-down.svg" alt="" />
          ) : (
            <img src="triangle-up.svg" alt="" />
          )}
        </div>
      </div>


      {/* This in here it should be a component named action panel that is what i have to do today change it into a component */}
      {isDropdownVisible && (
        <ActionPanel handleOpenModal={handleOpenModal} className={"action-panel"} panelKey={"dropDown"}/>
      )}
    </div>
  );
};

export default AddResources;
