import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "aos/dist/aos.css";
import { SpeedInsights } from '@vercel/speed-insights/react';
//import SocialPanel from './components/SocialPanel/SocialPanel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;
