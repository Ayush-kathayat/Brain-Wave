import React from "react";

import "./testi.css";

import Carousel from "../../../components/carousel";

const Testi = () => {
  // below is the dataset for the carousel component

  const dataset = [
    {
      name: "John Doe",
      pic: "testi-1.webp",
      testi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget felis facilisis fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.",
    },
    {
      name: "John Doe",
      pic: "testi-2.webp",
      testi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget felis facilisis fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.",
    },
    {
      name: "John Doe",
      pic: "testi-3.webp",
      testi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget felis facilisis fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.",
    },
    {
      name: "John Doe",
      pic: "testi-4.webp",
      testi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget felis facilisis fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.",
    },
  ];

  return (
    <>
     
      <div className="testi-title-wrapper">
      <div
          className="testi-title"
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h>TESTIMONIALS</h>
        </div>
      </div>

      <Carousel className= "card" dataset={dataset} />
    </>
  );
};

export default Testi;
