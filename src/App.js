import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/FooterAdvance';
import Homepage from './pages/Homepage';
import WildlifePageDetailsPage from './pages/WildlifePageDetailsPage';
import ParkDetailsPage from './pages/ParkDetailsPage';
import WildlifePage from './pages/WildlifePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import ExploreParksPage from './pages/ExploreParksPage';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/explorepark" element={<ExploreParksPage />} />
            <Route path="/wildlife" element={<WildlifePage />} />
            <Route path="/wildlifedetail" element={<WildlifePageDetailsPage />} />
            <Route path="/parkdetails" element={<ParkDetailsPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/contactus" element={<ContactUsPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
