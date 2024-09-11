import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./ImageSlider.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import Woodlanders_slide from "../../assets/Woodlanders-slide.png";
import Woodlanders_logo from "../../assets/Woodlanders-logo.png";
import Candymen_slide from "../../assets/Candymen-slide.png";
import Candymen_logo from "../../assets/Candymen-Logo.png";
import Frostmen_slide from "../../assets/Frostmen-slide.png";
import Frostmen_logo from "../../assets/Frostmen-Logo.png";
import Demons_slide from "../../assets/Demons-slide.png";
import Demons_logo from "../../assets/Demon-Logo.png";
import Mystics_slide from "../../assets/Mystics-slide.png";
import Mystics_logo from "../../assets/Mystics-Logo.png";

const slideData = [
  {
    id: 1,
    heading: " Woodlanders",
    logo: Woodlanders_logo,
    image: Woodlanders_slide,
  },
  {
    id: 2,
    heading: "Candymen",
    logo: Candymen_logo,
    image: Candymen_slide,
  },
  {
    id: 3,
    heading: "Frostmen",
    logo: Frostmen_logo,
    image: Frostmen_slide,
  },
  {
    id: 4,
    heading: "Demons",
    logo: Demons_logo,
    image: Demons_slide,
  },
  {
    id: 5,
    heading: "Mystics",
    logo: Mystics_logo,
    image: Mystics_slide,
  },
];

const Slider = () => {
  return (
    <div className="storybg">
      <div className="image-slider">
        <Slide
          nextArrow={
            <button>
              <MdArrowForwardIos className="ArrowIcon" />
            </button>
          }
          prevArrow={
            <button>
              <MdArrowBackIos className="ArrowIcon" />
            </button>
          }
        >
          {slideData.map((slide) => (
            <div key={slide.id} className="slides">
              <div className="each-slide-effect slider-image">
                <div className="slide-header">
                  <h2>{slide.heading}</h2>
                  <img src={slide.logo} alt={slide.heading} />
                </div>
                <div className="slide-Image">
                  <img src={slide.image} alt={slide.heading} />
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Slider;
