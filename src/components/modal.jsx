import React from "react";
import { useForm } from "react-hook-form";
import "./modal.css";

const Modal = ({ heading, hash_map, onCancel, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {
    onSubmit(data);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1 className="modal-heading">{heading}</h1>

        <form onSubmit={handleSubmit(onSubmitForm)}>
          {/* Traversing the MAP DATA and rendering it here */}
          {hash_map &&
            Object.entries(hash_map).map(([key, value]) => (
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
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Invalid email address",
                          },
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
            ))}

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
