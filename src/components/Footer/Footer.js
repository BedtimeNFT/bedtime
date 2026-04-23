import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

// Images

import Illustration_Webpage from "../../assets/Illustration_Webpage.png";
import TwitterIcon from "../../assets/logo-twitter.svg";
import DiscordIcon from "../../assets/logo-discord.svg";
import OpenseaIcon from "../../assets/socialIcon3.png";


const Footer = () => {
  return (
    <div>
      <img
        src={Illustration_Webpage}
        alt="Illustration Webpage"
        class="footerimg"
      />
      <div class="footer-socials">
        <Link to="https://x.com/bedtimenft">
          <img src={TwitterIcon} alt="Twitter" className="SocailIcon" />
        </Link>
        <Link to="https://discord.gg/bedtimecreations">
          <img src={DiscordIcon} alt="Discord" className="SocailIcon" />
        </Link>
        <Link to="https://bit.ly/BedtimeOS">
          <img src={OpenseaIcon} alt="Bedtime Creations on OpenSea" className="SocailIcon-adj" />
        </Link>
        <Link to="https://bit.ly/BedtimeCompanions">
          <img src={OpenseaIcon} alt="Bedtime Creations Creations on OpenSea" className="SocailIcon-adj" />
        </Link>          
      </div>
    </div>
  );
};

export default Footer;


