import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Video from "../../components/Video/Video";
import Story from "../../components/Story/Story";
import Map from "../../components/Map/Map";
import Properties from "../../components/Properties/Properties";
import Creations from "../../components/Creations/Creations";
import Team from "../../components/Team/Team";
import Faqs from "../../components/Faqs/Faqs";
import Footer from "../../components/Footer/Footer";
import "./home.css";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Video />
      <Story />
      <Map />
      <ImageSlider />
      <Properties />
      <Creations />
      <Team />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Home;
