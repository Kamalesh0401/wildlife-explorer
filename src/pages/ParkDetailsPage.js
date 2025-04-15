// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
// import parkImage from '../assets/images/deer.jpg';
// import './ParkDetailsPage.css';

// function ParkDetailsPage() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [likes, setLikes] = useState(0);
//   const navigate = useNavigate();

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleLike = () => {
//     setLikes(likes + 1);
//   };

//   const handleClose = () => {
//     navigate('/explorepark'); // Return to Explore Parks Page
//   };

//   const park = {
//     name: 'Manas National Park, Assam',
//     image: parkImage,
//     description:
//       'Manas National Park is a UNESCO World Heritage Site located in Assam, India. It is known for its rich biodiversity, including the endangered Barasingha, tigers, and elephants. The park features dense jungles, grasslands, and riverine forests along the Manas River.',
//     featuredAnimal: {
//       name: 'Barasingha',
//       description:
//         'The Barasingha, or swamp deer, is a deer species native to the Indian subcontinent, thriving in wetland habitats within Manas.',
//     },
//   };

//   // Dummy data for nearby animals
//   const nearbyAnimals = [
//     { id: 1, name: 'Hog Deer', image: parkImage },
//     { id: 2, name: 'Chital Deer', image: parkImage },
//     { id: 3, name: 'Asian Water Buffalo', image: parkImage },
//   ];

//   const handleAnimalClick = (animalId) => {
//     navigate(`/wildlifedetail/${animalId}`, { state: { animal: nearbyAnimals.find(a => a.id === animalId) } });
//   };

//   return (
//     <div className="park-container">
//       <div className="body-content">
//         <Sidebar />
//         <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
//           <div className="header">
//             <h1 className="header-text">{park.name}</h1>
//             <button className="close-button" onClick={handleClose} aria-label="Close">
//               ✕
//             </button>
//           </div>
//           <div className="center-main-content">
//             <div className="sidebar-content">
//               <div className="you-are-here-section">
//                 <h3 className="section-title">You Are Here</h3>
//                 <div className="map-placeholder">
//                   <p className="placeholder-text">Map Placeholder</p>
//                 </div>
//                 <p className="description">{park.description}</p>
//               </div>
//               <div className="spot-nearby-section">
//                 <h3 className="section-title">Spot Nearby</h3>
//                 <div className="spot-nearby-carousel">
//                   <div className="carousel-inner">
//                     {nearbyAnimals.map((animal) => (
//                       <div
//                         key={animal.id}
//                         className="spot-nearby-item"
//                         onClick={() => handleAnimalClick(animal.id)}
//                       >
//                         <img
//                           src={animal.image}
//                           alt={`${animal.name}`}
//                           className="spot-nearby-image"
//                         />
//                         <span className="spot-nearby-name">{animal.name}</span>
//                       </div>
//                     ))}
//                   </div>
//                   <button className="carousel-next" aria-label="Next">
//                     ➡️
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="right-section">
//               <div className="main-image">
//                 <img src={park.image} alt={`${park.name}`} className="park-image" />
//               </div>
//               <div className="park-info">
//                 <h2 className="park-name">{park.featuredAnimal.name}</h2>
//                 <p className="park-description">{park.featuredAnimal.description}</p>
//                 <div className="like-section">
//                   <button className="like-button" onClick={handleLike}>
//                     ❤️ Like
//                   </button>
//                   <span className="like-count">{likes} Likes</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ParkDetailsPage;