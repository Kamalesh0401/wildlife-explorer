// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
// import parkImage from '../assets/images/deer.jpg';
// import './ParkDetailsPage.css';

// function ParkDetailsPage() {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [likes, setLikes] = useState(0);
//     const navigate = useNavigate();

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     const handleLike = () => {
//         setLikes(likes + 1);
//     };

//     const handleClose = () => {
//         navigate('/explorepark'); // Return to Explore Parks Page
//     };

//     const park = {
//         name: 'Manas National Park, Assam',
//         image: parkImage,
//         description:
//             'Manas National Park is a UNESCO World Heritage Site located in Assam, India. It is known for its rich biodiversity, including the endangered Barasingha, tigers, and elephants. The park features dense jungles, grasslands, and riverine forests along the Manas River.',
//         featuredAnimal: {
//             name: 'Barasingha',
//             description:
//                 'The Barasingha, or swamp deer, is a deer species native to the Indian subcontinent, thriving in wetland habitats within Manas.',
//         },
//     };

//     // Dummy data for nearby animals
//     const parkAnimals = [
//         { id: 1, name: 'Hog Deer', image: parkImage },
//         { id: 2, name: 'Chital Deer', image: parkImage },
//         { id: 3, name: 'Asian Water Buffalo', image: parkImage },
//     ];

//     const handleAnimalClick = (animalId) => {
//         navigate(`/wildlifedetail/${animalId}`, { state: { animal: parkAnimals.find(a => a.id === animalId) } });
//     };

//     return (
//         <div className="park-container">
//             <div className="body-content">
//                 <Sidebar />
//                 <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
//                     <div className="header">
//                         <h1 className="header-text">{park.name}</h1>
//                         <button className="close-button" onClick={handleClose} aria-label="Close">
//                             ✕
//                         </button>
//                     </div>
//                     <div className="center-main-content">
//                         <div className="sidebar-content">
//                             <div className="you-are-here-section">
//                                 <h3 className="section-title">You Are Here</h3>
//                                 <div className="map-placeholder">
//                                     <p className="placeholder-text">Map Placeholder</p>
//                                 </div>
//                                 <p className="description">{park.description}</p>
//                             </div>
//                             <div className="spot-nearby-section">
//                                 <h3 className="section-title">Spot Nearby</h3>
//                                 <div className="spot-nearby-carousel">
//                                     <div className="carousel-inner">
//                                         {parkAnimals.map((animal) => (
//                                             <div
//                                                 key={animal.id}
//                                                 className="spot-nearby-item"
//                                                 onClick={() => handleAnimalClick(animal.id)}
//                                             >
//                                                 <img
//                                                     src={animal.image}
//                                                     alt={`${animal.name}`}
//                                                     className="spot-nearby-image"
//                                                 />
//                                                 <span className="spot-nearby-name">{animal.name}</span>
//                                             </div>
//                                         ))}
//                                     </div>
//                                     <button className="carousel-next" aria-label="Next">
//                                         ➡️
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="right-section">
//                             <div className="park-main-image">
//                                 <img src={park.image} alt={`${park.name}`} className="parkdtl-image" />
//                             </div>
//                             <div className="park-info">
//                                 <h2 className="park-name">{park.featuredAnimal.name}</h2>
//                                 <p className="park-description">{park.featuredAnimal.description}</p>
//                                 <div className="like-section">
//                                     <button className="like-button" onClick={handleLike}>
//                                         ❤️ Like
//                                     </button>
//                                     <span className="like-count">{likes} Likes</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ParkDetailsPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import parkImage from '../assets/images/deer.jpg';
import './ParkDetailsPage.css';

function ParkDetailsPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [likes, setLikes] = useState(0);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleClose = () => {
        navigate('/explorepark');
    };

    const park = {
        name: 'Manas National Park, Assam',
        image: parkImage,
        description:
            'Manas National Park is a UNESCO World Heritage Site located in Assam, India. It spans over 500 square kilometers and is known for its rich biodiversity, including tigers, elephants, and the endangered Barasingha. The park features dense jungles, grasslands, and the scenic Manas River.',
        overview:
            'Established in 1990, Manas National Park is a biodiversity hotspot with over 60 mammal species. It offers guided safaris, bird watching, and elephant rides. The best time to visit is from November to April.',
        gallery: [
            { id: 1, image: parkImage, caption: 'Manas River View' },
            { id: 2, image: parkImage, caption: 'Jungle Trail' },
            { id: 3, image: parkImage, caption: 'Wildlife Spot' },
        ],
    };

    const parkAnimals = [
        { id: 1, name: 'Hog Deer', image: parkImage },
        { id: 2, name: 'Chital Deer', image: parkImage },
        { id: 3, name: 'Asian Water Buffalo', image: parkImage },
    ];

    const handleAnimalClick = (animalId) => {
        navigate(`/wildlifedetail/${animalId}`, { state: { animal: parkAnimals.find(a => a.id === animalId) } });
    };

    return (
        <div className="park-container">
            <div className="body-content">
                <Sidebar />
                <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                    <div className="header">
                        <h1 className="header-text">{park.name}</h1>
                        <button className="close-button" onClick={handleClose} aria-label="Close">
                            ✕
                        </button>
                    </div>
                    <div className="center-main-content">
                        <div className="sidebar-content">
                            <div className="you-are-here-section">
                                <h3 className="section-title">You Are Here</h3>
                                <div className="map-placeholder">
                                    {/* <p className="placeholder-text">Map Placeholder</p> */}
                                    <img
                                        src="https://example.com/manas-national-park-map.jpg" // Replace with actual URL or local path
                                        alt="Map of Manas National Park"
                                        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                                    />
                                </div>
                                <p className="description">{park.description}</p>
                            </div>
                            <div className="spot-nearby-section">
                                <h3 className="section-title">Animals in the Park</h3>
                                <div className="spot-nearby-carousel">
                                    <div className="carousel-inner">
                                        {parkAnimals.map((animal) => (
                                            <div
                                                key={animal.id}
                                                className="spot-nearby-item"
                                                onClick={() => handleAnimalClick(animal.id)}
                                            >
                                                <img
                                                    src={animal.image}
                                                    alt={`${animal.name}`}
                                                    className="spot-nearby-image"
                                                />
                                                <span className="spot-nearby-name">{animal.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="carousel-next" aria-label="Next">
                                        ➡️
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="right-section">
                            <div className="park-main-image">
                                <img src={park.image} alt={`${park.name}`} className="parkdtl-image" />
                            </div>
                            {/* <div className="park-info">
                                <h2 className="park-name">Park Overview</h2>
                                <p className="park-description">{park.overview}</p>
                                <div className="gallery-section">
                                    <h3 className="gallery-title">Gallery</h3>
                                    <div className="gallery-carousel">
                                        <div className="gallery-inner">
                                            {park.gallery.map((item) => (
                                                <div key={item.id} className="gallery-item">
                                                    <img
                                                        src={item.image}
                                                        alt={item.caption}
                                                        className="gallery-image"
                                                    />
                                                    <span className="gallery-caption">{item.caption}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <button className="carousel-next" aria-label="Next">
                                            ➡️
                                        </button>
                                    </div>
                                </div>
                                <div className="like-section">
                                    <button className="like-button" onClick={handleLike}>
                                        ❤️ Like
                                    </button>
                                    <span className="like-count">{likes} Likes</span>
                                </div>
                            </div> */}
                            <div className="park-info">
                                <h2 className="park-name">Park Highlights</h2>
                                <p className="park-description">
                                    Manas National Park covers 500 sq km with diverse ecosystems. Featured animal: Barasingha.
                                </p>
                                <div className="featured-animal">
                                    <img src={park.image} alt="Barasingha" className="animal-thumbnail" />
                                    <span>Barasingha - <a href={`/wildlifedetail/1`} onClick={(e) => { e.preventDefault(); handleAnimalClick(1); }}>Learn More</a></span>
                                </div>
                                <div className="like-section">
                                    <button className="like-button" onClick={handleLike}>
                                        ❤️ Like
                                    </button>
                                    <span className="like-count">{likes} Likes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ParkDetailsPage;