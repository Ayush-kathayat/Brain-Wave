import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="spacer layer" />

        <div className="footer-mid">
          <ul className="listas">
            <Link to="/home">
              <li className="list">Home</li>
            </Link>
            <Link to="/about">
              <li className="list">About </li>
            </Link>
            <Link to="/faq">
              <li className="list">FAQ</li>
            </Link>
          </ul>

          <ul className="listas">
            <Link to="">
              <li className="list">Genral info</li>
            </Link>
            <Link to="">
              <li className="list">Privacy Policy</li>
            </Link>
            <Link to="">
              <li className="list">Terms of Service</li>
            </Link>
          </ul>

          <ul className="listas">
            <Link to="/contact">
              <li className="list">Contact </li>
            </Link>

            <Link>
              <li className="list">Linkedin</li>
            </Link>

            <Link>
              <li className="list">Twitter</li>
            </Link>
          </ul>
        </div>

        <div className="footer-bottom">
          <h1>TASCOPIA</h1>
          <p>© 2024, All rights reserved</p>
          {/* TOD0 :  ADD SOCIAL MEDIA ICONS */}

          <div className="social-icons">
            <div className="twitter-icon ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-twitter"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </div>

            <div className="linkedin-icon ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>

            <div className="instagram-icon ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-instagram"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
