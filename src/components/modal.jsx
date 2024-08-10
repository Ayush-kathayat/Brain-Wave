import React from "react";
import { useForm } from "react-hook-form";
import validUrl from "valid-url";
import "./modal.css";

const Modal = ({ heading, description, icon, hash_map, onCancel, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {
    // Add description as a key to the data object
    const updatedData = {
      ...data,
      description: description,
      icon: icon,
      
    };

    // Pass the updated object to the onSubmit function
    onSubmit(updatedData);

    // Log the updated data
    console.log(description);
    console.log(updatedData);
  };

  const validateURL = (value) => {
    return validUrl.isUri(value) ? true : "Invalid URL";
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1 className="modal-heading">{heading}</h1>

        <form onSubmit={handleSubmit(onSubmitForm)}>
          {/* Traversing the MAP DATA and rendering it here */}
          {hash_map &&
            Object.entries(hash_map).map(([key, value]) => {
              // List of keys to skip
              const keysToSkip = ["Description"];

              // Skip rendering if the key is in the keysToSkip array
              if (keysToSkip.includes(key)) {
                return null;
              }

              return (
                <div key={key}>
                  <h2 className="modal-subheading">{key}</h2>

                  <input
                    placeholder={value}
                    className="modal-input"
                    {...register(
                      key,
                      value === "Enter URL"
                        ? {
                            required: `${key} is required`,
                            validate: validateURL,
                          }
                        : {
                            required: `${key} is required`,
                            minLength: {
                              value: 3,
                              message: `${key} must be at least 3 characters`,
                            },
                          }
                    )}
                  />
                </div>
              );
            })}
          <div className="modal-btns">
            <button
              type="button"
              className="modal-btn cancel btn"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button type="submit" className="modal-btn submit btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
