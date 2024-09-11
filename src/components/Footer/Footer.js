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
        <Link to="https://discord.gg/xgWDBFgcQM">
          <img src={TwitterIcon} className="SocailIcon" />
        </Link>
        <Link to="https://discord.gg/xgWDBFgcQM">
          <img src={DiscordIcon} className="SocailIcon" />
        </Link>
        <Link to="https://opensea.io/">
          <img src={OpenseaIcon} className="SocailIcon" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
