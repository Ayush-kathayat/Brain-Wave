import React from "react";
import "./modal.css";

const Modal = ({ heading, hash_map, onCancel, onSubmit }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1 className="modal-heading">{heading}</h1>

        {/* traversing the MAP DATA and rendring it in here */}

        {hash_map &&
          Object.entries(hash_map).map(([key, value]) => (
            <div key={key}>
              <h2 className="modal-subheading">{key}</h2>
              <input placeholder={value} className="modal-input" />
            </div>
          ))}

        <div className="modal-btns">
          <button className="modal-btn cancel btn" onClick={onCancel}>
            Cancel
          </button>
          <button className="modal-btn submit btn" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
