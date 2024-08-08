import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Nav from "../../components/Navbar";
import AddResources from "@/components/AddResources";
import Modal from "@/components/modal";
import Box from "@/components/box";

import "./home.css";

const Home = () => {
  const [data, setData] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);

  // State variables for modal content
  const [modalHeading, setModalHeading] = useState("");
  const [modalHashMap, setModalHashMap] = useState(new Map()); //! this will contain the subheading and the placeholder for the input field

  const handleOpenModal = (heading, modalHashMap) => {
    setModalHeading(heading);
    setModalHashMap(modalHashMap);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmitModal = () => {
    // Handle submit logic
    setModalOpen(false);
  };
  return (
    <>
      <Nav />

      <div className="home-wrapper">
        {data ? (
          <>

            <Box />
            <Box />
            <Box />
          </>
        ) : (
          <div
            className="nothing-here-container"
            data-aos="fade-down"
            data-aos-delay="60"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            
          >
            <AddResources onOpenModal={handleOpenModal} />

            <div className="nothing-here-wrapper">
              <img
                className="nothing-here-svg"
                src="./nothing-here.svg"
                alt="Nothing :{"
              />
              <h1 className="nothing-here-title">Nothing Added Here Yet</h1>
              <p className="nothing-here-para">
                {" "}
                Click on the add button to add items in this course.{" "}
              </p>
            </div>
          </div>
        )}
      </div>

      {isModalOpen && (
        <Modal
          heading={modalHeading}
          hash_map={modalHashMap}
          onCancel={handleCloseModal}
          onSubmit={handleSubmitModal}
        />
      )}
    </>
  );
};

export default Home;
