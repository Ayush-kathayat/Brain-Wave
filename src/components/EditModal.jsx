import React from "react";
import { useForm } from "react-hook-form";
import validUrl from "valid-url";
import "./modal.css";


//! in here the onCancel , onSubmit these should be redefined in the Home.jsx file specifically for the EditModal component
const EditModal = ({currentBoxTitle}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {
    alert(currentBoxTitle);
    alert("EditModal.jsx onSubmitForm data: " + JSON.stringify(data));
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
                  {errors[key] && (
                    <p className="form-errors">{errors[key].message}</p>
                  )}
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

export default EditModal;
