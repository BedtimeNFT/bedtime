import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header class="sticky">
      <div class="navbarmid">
        <ul>
          <a href="#home" spy={true} smooth={true} duration={500}>
            <li>Home</li>
          </a>
          <a href="#story" spy={true} smooth={true} duration={500}>
            <li>Story</li>
          </a>
          <a href="#team" spy={true} smooth={true} duration={500}>
            <li>Team</li>
          </a>
          <a href="https://bedtimecreation.com/indexmint.html">
            <li>Mint</li>
          </a>
          <a href="https://tokenthread.io" target="_blank"><li>Merch</li>
          </a>
       </ul>
      </div>
    </header>
  );
};

export default Header;
