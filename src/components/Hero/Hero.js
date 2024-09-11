import React, {useState} from "react";
import "./Hero.css";

// Images
import BannerCloudBg from "../../assets/bannerclouds.png";
import BannerGif1 from "../../assets/bannergif1.gif";
import BedtimeGif from "../../assets/Bedtime-Title.gif";
import LogoBoy from "../../assets/Logo_Boy.png";
import MusicLogo from "../../assets/music.png";
import BackgroundMusic from "../../assets/track.mp3";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="banner" id="home">
      <div className="bannercenter">
      <img src={LogoBoy} alt="Logo Boy" className="logonav" />
        <button className="musicbtn" onClick={toggleMusic}>
          <img width="50" height="50" src={MusicLogo} alt="Music Logo" />
        </button>

        <audio ref={audioRef} src={BackgroundMusic} loop />
        <img
          src={BannerCloudBg}
          alt="Banner Background2"
          className="banerimg2"
        />
        <img src={BannerGif1} alt="Banner Main gif" className="banerimg2" />
        <img src={BedtimeGif} alt="BedTime gif" className="banerimg" />
        <p className="bannerdisc">
          Introducing the Creations, Bedtime’s mintable NFT’s stored in the
          Ethereum blockchain. Within the Bedtime Creations collection there are
          five factions, each inhabiting their own region in the Lucid Realm,
          Bedtime’s dream world.
          <br />
          <br />
          <br />
          <br />
          Scroll to learn about Bedtime and explore the Lucid Realm.
        </p>
      </div>
    </div>
  );
};

export default Hero;
