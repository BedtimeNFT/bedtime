import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Creations.css";

// AOS Abimation Link
import AOS from "aos";

// Arrows Icons From react-icons

import LeftArrow from "../../assets/leftArrow.svg";
import RightArrow from "../../assets/rightArrow.svg";
import Arrow from "../../assets/arrow.svg";

// Images
import CreationSlide1 from "../../assets/1.png";
import CreationSlide2 from "../../assets/2.png";
import CreationSlide3 from "../../assets/3.png";
import CreationSlide4 from "../../assets/4.png";
import CreationSlide5 from "../../assets/5.png";
import CreationSlide6 from "../../assets/6.png";
import CreationSlide7 from "../../assets/7.png";
import CreationSlide8 from "../../assets/8.png";
import CreationSlide9 from "../../assets/9.png";
import CreationSlide10 from "../../assets/10.png";
import CreationSlide11 from "../../assets/11.png";
import CreationSlide12 from "../../assets/12.png";
import CreationSlide13 from "../../assets/13.png";
import CreationSlide14 from "../../assets/14.png";
import CreationSlide15 from "../../assets/15.png";

// Slides Data
const slideData = [
  {
    id: 1,
    heading: " Woodlander",
    image: CreationSlide1,
  },
  {
    id: 2,
    heading: "Candymen",
    image: CreationSlide2,
  },
  {
    id: 3,
    heading: "Frostmen",
    image: CreationSlide3,
  },
  {
    id: 4,
    heading: "Demons",
    image: CreationSlide4,
  },
  {
    id: 5,
    heading: "Mystic",
    image: CreationSlide5,
  },
  {
    id: 6,
    heading: "Woodlander",
    image: CreationSlide6,
  },
  {
    id: 7,
    heading: "Candymen",
    image: CreationSlide7,
  },
  {
    id: 8,
    heading: "Frostmen",
    image: CreationSlide8,
  },
  {
    id: 9,
    heading: "Demons",
    image: CreationSlide9,
  },
  {
    id: 10,
    heading: "Mystic",
    image: CreationSlide10,
  },
  {
    id: 11,
    heading: "Woodlander",
    image: CreationSlide11,
  },
  {
    id: 12,
    heading: "Candymen",
    image: CreationSlide12,
  },
  {
    id: 13,
    heading: "Frostmen",
    image: CreationSlide13,
  },
  {
    id: 14,
    heading: "Demons",
    image: CreationSlide14,
  },
  {
    id: 15,
    heading: "Mystic",
    image: CreationSlide15,
  },
];

//  Slide Responsive Settings
const responsiveSettings = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];

// Custom Arrows
const properties = {
  prevArrow: (
    <button className="btn1">
      <img src={RightArrow} alt=" Right Arrow" />
    </button>
  ),
  nextArrow: (
    <button className="btn2">
      <img src={LeftArrow} alt="Left Arrow" />
    </button>
  ),
};

const Creations = () => {
  AOS.init();

  return (
    <div className="storybg">
      <h2 data-aos="fade-up"> The Creations </h2>

      <div className="creations-slider">
        <Slide
          indicators={false}
          responsive={responsiveSettings}
          {...properties}
        >
          {slideData.map((slide) => (
            <div key={slide.id} className="slides">
              <div className="each-slide-effect creation-slide">
                <div className="slider-wrap">
                  <h3 className="text-block-2">{slide.heading}</h3>
                  <div className="link-block">
                    <img src={Arrow} alt="Arrow" />
                  </div>
                </div>
                <div className="slide-Image-container">
                  <img src={slide.image} alt={slide.heading} loading="lazy" className="slide-Image" />
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Creations;
