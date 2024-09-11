import React, { useState, useRef } from "react";
import "./Video.css";
import AOS from "aos";


// Images & Video
import PlayIcon from "../../assets/play-icon.png";
import FinalAnimationVideo from "../../assets/finalanimation.a7feb23f.mp4";

const Video = () => {
  AOS.init();

  // States
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Conditions
  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Video Pause Function
  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  // Video Play Function
  const handleVideoPlay = () => {
    setIsPlaying(true);
  };
  return (
    <div className="video-container">
      {/* Heading  */}
      <div className="about-title">
        <h2 data-aos="fade-up" className="welcome-box aos-init aos-animate">
          The Lucid Realm Awaits You
        </h2>
      </div>

      <div className="contentMain" >
        {/* Play Icon  */}
        {isPlaying ? null : (
          <img
            className="PlayIcon"
            src={PlayIcon}
            alt="Play Icon"
            onClick={handlePlayClick}
          />
        )}

        {/* Video  */}
        <div className="container-video">
          <video
            controls
            playsInline
            poster=""
            id="player"
            ref={videoRef}
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
          >
            <source src={FinalAnimationVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Video;
