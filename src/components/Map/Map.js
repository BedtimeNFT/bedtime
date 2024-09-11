import React, { useState } from "react";
import "./Map.css";

// AOS Abimation Link
import AOS from "aos";

// Images
import Mapbg from "../../assets/mapbg.png";
import Mapfrostland from "../../assets/map-frostland.png";
import MapMystics from "../../assets/map-mystics.png";
import MapWoodland from "../../assets/map-woodland.png";
import MapDemons from "../../assets/map-demons.png";
import MapCandyLand from "../../assets/map-candyland.png";

const Map = () => {
  AOS.init();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMapClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Map Title  */}
      <div className="welcome-box" data-aos="fade-up">
        <div className="about-title">
          <h2> MAP </h2>
          <br />
          <p className="subheading">Click on a region</p>
        </div>
      </div>
      {/* Map  */}
      <div className="parentmap" onClick={handleMapClick}>
        <img src={Mapbg} alt="Map Background" className="mapbg" />
        <img
          src={Mapfrostland}
          className="mapfimg"
          aria-describedby="popup-1"
        />
        <img src={MapMystics} className="mapmimg" aria-describedby="popup-2" />
        <img src={MapWoodland} className="mapwimg" aria-describedby="popup-3" />
        <img src={MapDemons} className="mapdimg" aria-describedby="popup-4" />
        <img
          src={MapCandyLand}
          className="mapcimg"
          aria-describedby="popup-5"
        />
      </div>
      {/* Modal  */}
      {isModalOpen && (
        <div
          data-testid="overlay"
          data-popup="modal"
          className="popup-overlay"
          tabindex="-1"
        >
          <div className="popup-content" role="dialog" id="popup-2">
            <div className="modal">
              <button className="close" onClick={handleCloseModal}>
                ×
              </button>
              <div className="header"> Mystical Region </div>
              <div className="content">
                The Mystical region is a place of exceptional power. It is home
                to the Mystics, guardians of The Lucid Realm. In this region
                there exists a variety of enchanted places and sanctums
                including the Ritual Altar, the Old Fort, the Titan Tower, and
                most importantly, the Lucid Gates - a place where the sacred
                portals can be found. These portals have been used by Mystics
                for ages to travel to any region at any time. This land is known
                for its purity; even the waters found here have extraordinary
                cleansing abilities. The Mystic’s floating village holds
                numerous artifacts including the Amarak, a key source of all
                ethereal forces in the Lucid Realm. One can only imagine what
                would happen if the Amarak were to end up in the wrong hands.
              </div>
              <div className="actions">
                <button className="discord-btn" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
