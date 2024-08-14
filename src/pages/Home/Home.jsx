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
  const [data, setData] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  // State variables for modal content
  const [modalHeading, setModalHeading] = useState("");
  const [modalHashMap, setModalHashMap] = useState(new Map()); //! this will contain the subheading and the placeholder for the input field

  const [modulesName, setModulesNames] = useState([]); // array of strings
  const [URL, setURL] = useState([]); // array of strings
  const [description, setDescription] = useState([]); // array of strings
  const [icon, setIcon] = useState([]); // array of strings

  const [openPanelIndex, setOpenPanelIndex] = useState(null);
  const toggleActionPanel = (index) => {
    setOpenPanelIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleOpenModal = (heading, description, icon, modalHashMap) => {
    setModalHeading(heading);
    setDescription(description);
    setIcon(icon);
    setModalHashMap(modalHashMap);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmitModal = (data) => {
    // Handle submit logic here
    console.log(data);
    // {Module Name: 'Artificial intelligence'}
    // {URL: 'https://port-mafia.netlify.app', DisplayName: 'Portfolio of Ayush'}

    if ("Module Name" in data) {
      setModulesNames((prevModules) => [...prevModules, data]);
    }

    if ("Display Name" in data) {
      setURL((prevURL) => [...prevURL, data.URL]);
      setModulesNames((prevModules) => [...prevModules, data]);
    }

    // Update the state of data
    if (data) {
      setData(true);
    }

    setModalOpen(false);
  };
  return (
    <>
      <Nav />
      <AddResources onOpenModal={handleOpenModal} />

      <div className="home-wrapper">
        {data ? (
          <>
            {modulesName.map((module, index) => (
              <Box
                key={index}
                module={module}
                description={module.description}
                icon={module.icon}
                onOpenModal={handleOpenModal}
                isOpen={openPanelIndex === index}
                onToggle={() => toggleActionPanel(index)}
              />
            ))}
          </>
        ) : (
          <div
            className="nothing-here-container"
            data-aos="fade-down"
            data-aos-delay="60"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
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
          description={description}
          icon={icon}
          hash_map={modalHashMap}
          onCancel={handleCloseModal}
          onSubmit={handleSubmitModal}
        />
      )}
    </>
  );
};

export default Home;
