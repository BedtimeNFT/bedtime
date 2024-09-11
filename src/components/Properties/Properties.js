import React from "react";
import "./properties.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
// AOS Abimation Link
import AOS from "aos";

import Properties1 from "../../assets/properties1.svg";
import Properties2 from "../../assets/properties2.svg";
import Properties3 from "../../assets/properties3.svg";
import Properties4 from "../../assets/properties4.svg";
import Properties5 from "../../assets/properties5.svg";

const slideData = [
  {
    id: 1,
    image: Properties1,
  },
  {
    id: 2,
    image: Properties2,
  },
  {
    id: 3,
    image: Properties3,
  },
  {
    id: 4,
    image: Properties4,
  },
  {
    id: 5,
    image: Properties5,
  },
];

const Properties = () => {
  AOS.init();

  return (
    <div className="storybg ">
      <h2 data-aos="fade-up" className="properties-container">
        {" "}
        Properties | 400+ traits
      </h2>

      <div className="properties-slider">
        <Slide
          nextArrow={
            <MdArrowForwardIos className="propertiesIcon ArrowForward" />
          }
          prevArrow={<MdArrowBackIos className="propertiesIcon ArrowBack" />}
        >
          {slideData.map((slide) => (
            <div key={slide.id} className="">
              <div className="each-slide-effect properties-slides">
                <header className="slides-header">
                  <ul className="list">
                    <li className="list-item">Head</li>
                    <li className="list-item">Mouth</li>
                    <li className="list-item">Armor</li>
                    <li className="list-item">Shield</li>
                  </ul>
                  <div className="slies-image">
                    <img src={slide.image} alt="" />
                  </div>
                  <ul className="list">
                    <li className="list-item">eyes</li>
                    <li className="list-item">Skin</li>
                    <li className="list-item">Weapon</li>
                    <li className="list-item">Background</li>
                  </ul>
                </header>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Properties;
