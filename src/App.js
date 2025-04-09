import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import Homepage from './pages/Homepage';
import WildlifePage from './pages/WildlifePage';
import WildlifeGallery from './pages/WildlifeGallery';
import ThreatsSection from './pages/ThreatsSection';
import ContactForm from './pages/ContactForm';
import ForestExplorer from './pages/ForestExplorer';
import HeroSection from './pages/HeroSection';
import SpeciesEncyclopedia from './pages/SpeciesEncyclopedia';
import Community from './pages/Community';
import Blogs from './pages/Blogs';
import KidsCorner from './pages/KidsCorner';
import EndangeredSpecies from './pages/EndangeredSpecies';
import Quiz from './pages/Quiz';
import About from './pages/About';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out', // Animation easing
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<WildlifePage />}></Route> */}
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/wildlife" element={<WildlifeGallery />}></Route>
          <Route path="/threat" element={<ThreatsSection />}></Route>
          <Route path="/contact" element={<ContactForm />}></Route>
          <Route path="/forestexplorer" element={<ForestExplorer />}></Route>
          <Route path="/hero" element={<HeroSection />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/encyclopedia" element={<SpeciesEncyclopedia />}></Route>
          <Route path="/endangered" element={<EndangeredSpecies />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/kidscorner" element={<KidsCorner />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;



// import './App.css';
// import AboutPage from './Pages/AboutPage';
// import ConatctPage from './Pages/ContactPage';
// import ResumePage from './Pages/Resume';
// import Home from "./Pages/Home";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ProjectPage from './Pages/ProjectsPage';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/about" element={<AboutPage />}></Route>
//           <Route path="/contact" element={<ConatctPage />}></Route>
//           <Route path="/resume" element={<ResumePage />}></Route>
//           <Route path="/projects" element={<ProjectPage />}></Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
