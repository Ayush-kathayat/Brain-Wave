import React, { useState } from "react";
import "./addResources.css";

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

      {isDropdownVisible && (
        <div className="drop-down">
          <div
            className="create-module"
            onClick={() =>
              handleOpenModal("Create New Module", "Add Item To This Module", "./folder.svg", {
                "Module Name": "Enter Module Name",
              })
            }
          >
            <img src="./folder.svg" alt="module" />
            <h1 className="create-module-title"> Create Module</h1>
          </div>

          <div
            className="add-link"
            onClick={() =>
              handleOpenModal("Add New Link", "LINk", "./link.svg", {
                "URL": "Enter URL",
                "Display Name": "Enter Display Name",
              })
            }
          >
            <img src="./link.svg" alt="" />
            <h1 className="add-link-title">Add a Link</h1>
          </div>

          <div className="upload">
            <img src="./upload.svg" alt="" />
            <h1 className="upload-title">Upload</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddResources;
