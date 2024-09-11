import React, { useState } from "react";
import "./Story.css";

// Image
import StoryBook from "../../assets/Storybook.png";

const Story = () => {
  const [magnifierPosition, setMagnifierPosition] = useState({
    left: 0,
    top: 0,
  });
  const [showMagnifier, setShowMagnifier] = useState(false);

  const handleMouseEnter = () => {
    setShowMagnifier(true);
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMagnifierPosition({
      left: x - 75,
      top: y - 75,
    });
  };
  return (
    <div className="storybook" id="story">
      <h2 data-aos="fade-up" class="welcome-box aos-init aos-animate">
        STORY
      </h2>

      <div className="storybookcloud">
        <div
          className="magnifierWeb"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <div
            className="magnifier"
            style={{ width: "100%", height: "auto", overflow: "visible" }}
          >
            <img
              className="magnifier-image"
              src={StoryBook}
              alt="Story Book"
              width="100%"
              height="100%"
            />
            {showMagnifier && (
              <div
                className="magnifying-glass visible circle"
                style={{
                  left: magnifierPosition.left,
                  top: magnifierPosition.top,
                }}
              ></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
