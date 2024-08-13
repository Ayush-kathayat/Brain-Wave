import { useState } from "react";
import "./box.css";

import ActionPanel from "./actionPanel";

const Box = ({ module, description, icon, onOpenModal, isOpen, onToggle }) => {
  const handleOpenModal = (heading, description, icon, hash_map) => {
    onOpenModal(heading, description, icon, hash_map);
  };
  return (
    <>
      <div
        className="box-container"
        data-aos="fade-down"
        data-aos-delay="1000"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
      >
        {/* this grabber icon will only appear here when someone hovers over the box container */}
        <div className="grabber-icon-wrapper">
          <img src="./grabber.svg" alt="grab me" />
        </div>

        <div className="box-content">
          <div className="box-right">
            <div className="box-icon">
              <img src={icon} alt="box-icon" />
            </div>
            <div className="box-content-info">
              <h2 className="box-content-info-title">
                {module["Display Name"] || module["Module Name"]}
              </h2>
              <p className="box-content-info-description">{description}</p>
            </div>
          </div>

          <div className="box-content-more-icon" onClick={onToggle}>
            <img src="./more-vertical.svg" alt="more-icon" />
          </div>
        </div>
      </div>
      {/* render the action panel component in here */}
      {isOpen && <ActionPanel handleOpenModal={handleOpenModal} />}
    </>
  );
};

export default Box;
