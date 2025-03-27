import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import BackgroundEffects from "./components/BackgroundEffects/BackgroundEffects";
import CursorEffects from "./components/CursorEffects/CursorEffects";

// Page Components
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Tnc from './pages/TNC/Tnc';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import RefundCancelPolicy from './pages/RefundCancelPolicy/RefundCancelPolicy';
import GamesYt from "./pages/GamesYt/GamesYt";
import ProjectsYt from "./pages/ProjectsYt/ProjectsYt";

// Service Components
import WebDev from "./components/SerDetails/WebDev";
import AppDev from './components/SerDetails/AppDev';
import VideoDev from './components/SerDetails/VideoDev';
import HostDomDev from './components/SerDetails/HostDomDev';
import LogoDev from './components/SerDetails/LogoDev';
import UiUxDev from './components/SerDetails/UiUxDev';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <BackgroundEffects />
      <CursorEffects />
      
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Policy Pages */}
        <Route path="/tnc" element={<Tnc />} />
        <Route path="/cancelrefund" element={<RefundCancelPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* Service Detail Pages */}
        <Route path='/webdev' element={<WebDev />} />
        <Route path='/appdev' element={<AppDev />} />
        <Route path='/videodev' element={<VideoDev />} />
        <Route path='/hostdomdev' element={<HostDomDev />} />
        <Route path='/logodev' element={<LogoDev />} />
        <Route path='/uiuxdev' element={<UiUxDev />} />

        {/* YouTube Content Pages */}
        <Route path="/gamesyt" element={<GamesYt />} />
        <Route path="/projectsyt" element={<ProjectsYt />} />
      </Routes>
    </>
  );
}

export default App;