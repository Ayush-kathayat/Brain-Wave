import React, { useEffect } from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

import "./Navbar.css";

const Nav = ({ isAuthenticated }) => {
  const [showMobMenu, setShowMobMenu] = useState(false);

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 1000, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <>
      <div className="wrapper" data-aos="fade-down">
        <div className={showMobMenu ? "active nav" : "nav"}>
          <div className="logo-title">
            <Link to="/">
              <h1 className="app-name">Taskopia</h1>
            </Link>
          </div>

          <ul className="nav-links">
            <Link to="/home" className="links">
              <li>Home</li>
            </Link>
            <Link to="/about" className="links">
              {" "}
              <li>About</li>
            </Link>
            <Link to="/contact" className="links">
              {" "}
              <li>Contact</li>
            </Link>
            <Link to="/login" className="links">
              <li className=" mob-log-btn">
                <a>login</a>
              </li>
            </Link>
          </ul>

          <div
            className="mobile-navbar-btn"
            onClick={() => setShowMobMenu(!showMobMenu)}
          >
            <svg
              className="open-menu"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26 26"
              width="26px"
              height="26px"
            >
              <path
                d="M 0 4 L 0 6 L 26 6 L 26 4 Z M 0 12 L 0 14 L 26 14 L 26 12 Z M 0 20 L 0 22 L 26 22 L 26 20 Z"
                fill="#ffffff"
              />
            </svg>

            <svg
              className="close-menu"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="28px"
              height="28px"
            >
              <path
                d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
                fill="#ffffff"
              />
            </svg>
          </div>

          {isAuthenticated ? (
            <div>
              <p>Hi, Biolgical_Ayush</p>
              <img src="" alt="" srcset="" />
            </div>
          ) : (
            <div className="nav-cta">
              <Link to="/login" className="nav-btn log-btn">
                <button className="btn-log">Login</button>
              </Link>
              <Link to="/signup" className="nav-btn sign-btn">
                <button className="btn-sign">Signup</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
