import React from 'react';
import './SocialPanel.css'; 

const SocialPanel = () => {
  return (
    <div className="social-panel">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">F</a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">T</a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">I</a>
    </div>
  );
};

export default SocialPanel;



