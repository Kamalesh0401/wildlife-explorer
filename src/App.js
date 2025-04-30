// import React, { useEffect } from 'react';
// import { HelmetProvider } from 'react-helmet-async';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from './store';
// import Homepage from './pages/Homepage';
// import WildlifeDetailsPage from './pages/WildlifeDetailsPage';
// import ParkDetailsPage from './pages/ParkDetailsPage';
// import WildlifePage from './pages/WildlifePage';
// import AboutUsPage from './pages/AboutUsPage';
// import ContactUsPage from './pages/ContactUsPage';
// import ExploreParksPage from './pages/ExploreParksPage';
// import ForestExplorer from './pages/ForestPage';
// import ForestDetailsPage from './pages/ForestDetailsPage';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// function App() {
//   const location = useLocation();

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: 'ease-in-out',
//     });
//   }, []);

//   return (
//     <div className="App">
//       <Provider store={store}>
//         <HelmetProvider>
//           <Router>
//             <Routes key={location.pathname}>
//               <Route path="/" element={<Homepage />} />
//               <Route path="/exploreforests" element={<ForestExplorer />} />
//               <Route
//                 path="/forestdetails/:id"
//                 element={<ForestDetailsPage />}
//                 key="forestdetails/:id"
//               />
//               <Route path="/explorepark" element={<ExploreParksPage />} />
//               <Route path="/wildlife" element={<WildlifePage />} />
//               <Route
//                 path="/wildlifedetail/:id"
//                 element={<WildlifeDetailsPage />}
//                 key="wildlifedetail/:id"
//               />
//               <Route
//                 path="/parkdetails/:id"
//                 element={<ParkDetailsPage />}
//                 key="parkdetails/:id"
//               />
//               <Route path="/aboutus" element={<AboutUsPage />} />
//               <Route path="/contactus" element={<ContactUsPage />} />
//             </Routes>
//           </Router>
//         </HelmetProvider>
//       </Provider>
//     </div>
//   );
// }

// export default App;


// src/App.js
import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ViewLoader from './components/ViewLoader';

// Define route-to-component mapping
const ROUTES = [
  { path: '/', componentName: 'Homepage' },
  { path: '/exploreforests', componentName: 'ForestExplorer' },
  { path: '/forestdetails/:id', componentName: 'ForestDetailsPage' },
  { path: '/explorepark', componentName: 'ExploreParksPage' },
  { path: '/wildlife', componentName: 'WildlifePage' },
  { path: '/wildlifedetail/:id', componentName: 'WildlifeDetailsPage' },
  { path: '/parkdetails/:id', componentName: 'ParkDetailsPage' },
  { path: '/aboutus', componentName: 'AboutUsPage' },
  { path: '/contactus', componentName: 'ContactUsPage' },
];

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
    // Refresh AOS animations after lazy-loaded components mount
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <HelmetProvider>
          <Routes key={location.pathname}>
            {ROUTES.map(({ path, componentName }) => (
              <Route
                key={path}
                path={path}
                element={<ViewLoader componentName={componentName} />}
              />
            ))}
            <Route path="*" element={<ViewLoader componentName="NotFound" />} />
          </Routes>
        </HelmetProvider>
      </Provider>
    </div>
  );
}

// Wrap App with Router since useLocation is used
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}