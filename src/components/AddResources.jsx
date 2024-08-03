import React, { useState } from "react";
import "./addResources.css";

const AddResources = ({ onOpenModal }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleOpenModal = (heading, hash_map) => {
    onOpenModal(heading, hash_map);
    setDropdownVisible(false); // Close the dropdown after opening the modal
  };

  return (
    <>
      {/* had to use the inline css for the transition effect as the class was not working i don't know why though i think some specificity issue */}

      <div className="addResource-wrapper">
        <div
          className="btn-wrapper"
          style={{
            transition: "background-color 0.5s ease, border-color 0.5s ease",
          }}
          data-aos="fade-down"
          data-aos-delay="1000"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
          onClick={toggleDropdown}
        >
          <div className="add-btn" style={{ transition: "color 0.5s ease" }}>
            <h1>Add</h1>
            <img src="arrow-down.svg" alt="" />
          </div>
        </div>

        {isDropdownVisible && (
          <div className="drop-down">
            <div
              className="create-module"
              onClick={() =>
                handleOpenModal("Create New Module", {
                  "Module Name": "Enter Module Name",
                })
              }
            >
              <img src="./folder.svg" alt="module" />
              <h1 className="create-module-title"> Create Module</h1>
            </div>

            <div className="add-link"  onClick={() =>
                handleOpenModal("Add New Link", {
                  "URL": "Enter URL",
                  "Display Name": "Enter Display Name",
                })
              }>
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
    </>
  );
};

export default AddResources;
