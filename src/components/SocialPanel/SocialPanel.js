import React from 'react';
import './SocialPanel.css'; 

const SocialPanel = () => {
  return (
    <div className="social-panel">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">F</a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">T</a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">I</a>
      <br/>
      <a href="https://magiceden.io/collections/ethereum/0xacbc81fe1f56e4138aa1bc1cf0745d5b52bacab5" class="social-icon magiceden w-inline-block"><img
            src="../assets/magiceden.svg" loading="lazy" width="256" alt="" class="image-2">
    </div>
  );
};

export default SocialPanel;



