import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Nav from "../../components/Navbar";
import AddResources from "@/components/AddResources";

import "./home.css";

const Home = () => {
  const [data, setData] = useState(false);
  return (
    <>
      <Nav />

      <div className="home-wrapper">
        {data ? (
          <></>
        ) : (
          <div className="nothing-here-container">
            {/* //! the thing is here will be a component which will be used irrespective of if the data is there or not */}

            <AddResources />
            <div className="nothing-here-wrapper">
              <img
                className="nothing-here-svg"
                src="./nothing-here.svg"
                alt="Nothing :{"
              />
              <h1 className="nothing-here-title">Nothing Added Here Yet</h1>
              <p className="nothing-here-para">
                {" "}
                Click on the [ + ] add button to add items in this course.{" "}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
