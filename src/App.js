import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "aos/dist/aos.css";
//import SocialPanel from './components/SocialPanel';

function App() {
  return (
    <BrowserRouter>
      {/* SocialPanel should be outside of Routes */}
      <SocialPanel /> 

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
