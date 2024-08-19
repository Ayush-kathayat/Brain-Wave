import { useState } from "react";
import "./box.css";

import ActionPanel from "./actionPanel";

const Box = ({ module, description, icon, onOpenModal, isOpen, onToggle, handleDelete, indexi}) => {
  // const [panelKey, setPanelKey] = useState("");

  let panelKey = icon.split("/").pop().split(".")[0];

  console.log(`panelKey is ${panelKey}`);
  // setPanelKey(key);
  const handleOpenModal = (heading, description, icon, hash_map) => {
    onOpenModal(heading, description, icon, hash_map);
  };

  const handleNavigate = () => {
    window.open(module.URL, "_blank");
  };

  return (
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
          {isOpen && (
            <ActionPanel
              handleOpenModal={handleOpenModal}
              className={"action-panel-box"}
              panelKey={panelKey}
              handleDelete={handleDelete}
              indexi={indexi}
              handleNavigate={handleNavigate}
            />
          )}

          <img src="./more-vertical.svg" alt="more-icon" />
        </div>
      </div>
    </div>
  );
};

export default Box;
