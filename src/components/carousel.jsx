import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./carousel.css";

const Carousel = ({ dataset }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1800, // width to change options
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
   };
   

  return (
    <>
      <Slider {...settings}>
        {dataset.map((item, index) => (
          <div className="card" key={index}>
            <div className="testi-left">
              <img className="testi-img" src={item.pic} alt="img" />
            </div>
            <div className="testi-right">
              <h2>{item.name}</h2>
              <p>{item.testi}</p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Carousel;
