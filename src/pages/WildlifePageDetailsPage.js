import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import deer from '../assets/images/deer.jpg';
import './WildlifePageDetailsPage.css';

function WildlifePageDetailsPage() {
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
        navigate('/wildlife');
    };

    const animal = {
        name: 'Barasingha',
        image: deer,
        description:
            'The barasingha, also called swamp deer, is a deer species distributed in the Indian subcontinent. Populations in northern and central India are fragmented, and two isolated populations occur in southwestern Nepal and Assam, India. Known for its multi-tined antlers, it thrives in wetland habitats.',
        habitat: 'Wetland',
        conservationStatus: 'Vulnerable',
        foundIn: ['Manas National Park', 'Kaziranga National Park', 'Dudhwa National Park'],
    };

    // Dummy data for related habitat animals
    const relatedAnimals = [
        { name: 'Hog Deer', image: deer },
        { name: 'Chital Deer', image: deer },
        { name: 'Asian Water Buffalo', image: deer },
    ];

    return (
        <div className="wildlife-container">
            <div className="body-content">
                <Sidebar />
                <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                    <div className="header">
                        <h1 className="header-text">{animal.name}</h1>
                        <button className="close-button" onClick={handleClose} aria-label="Close">
                            ✕
                        </button>
                    </div>
                    <div className="center-main-content">
                        <div className="sidebar-content">
                            <div className="found-in-section">
                                <h3 className="section-title">Found In</h3>
                                <ul className="found-in-list">
                                    {animal.foundIn.map((park, index) => (
                                        <li key={index} className="found-in-item">
                                            {park}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="related-animals-section">
                                <h3 className="section-title">Related Habitat Animals</h3>
                                <div className="related-animals-list">
                                    {relatedAnimals.map((animal, index) => (
                                        <div key={index} className="related-animal-item">
                                            <img
                                                src={animal.image}
                                                alt={`${animal.name}`}
                                                className="related-animal-image"
                                            />
                                            <span className="related-animal-name">{animal.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="right-section">
                            <div className="main-image">
                                <img src={animal.image} alt={`${animal.name}`} className="animal-image" />
                            </div>
                            <div className="animal-info">
                                <h2 className="animal-name">{animal.name}</h2>
                                <p className="animal-description">{animal.description}</p>
                                <div className="animal-details">
                                    <p>
                                        <span className="detail-label">Habitat:</span> {animal.habitat}
                                    </p>
                                    <p>
                                        <span className="detail-label">Conservation Status:</span>{' '}
                                        {animal.conservationStatus}
                                    </p>
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

export default WildlifePageDetailsPage;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
// import deer from '../assets/images/deer.jpg';
// import './WildlifePageDetailsPage.css';

// function WildlifePageDetailsPage() {
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
//         navigate('/wildlife');
//     };

//     const animal = {
//         name: 'Barasingha',
//         image: deer,
//         description:
//             'The barasingha, also called swamp deer, is a deer species distributed in the Indian subcontinent. Populations in northern and central India are fragmented, and two isolated populations occur in southwestern Nepal and Assam, India. Known for its multi-tined antlers, it thrives in wetland habitats.',
//         habitat: 'Wetland',
//         conservationStatus: 'Vulnerable',
//         foundIn: ['Manas National Park', 'Kaziranga National Park', 'Dudhwa National Park'],
//     };

//     // Dummy data for related habitat animals with unique identifiers
//     const relatedAnimals = [
//         { id: 1, name: 'Hog Deer', image: deer },
//         { id: 2, name: 'Chital Deer', image: deer },
//         { id: 3, name: 'Asian Water Buffalo', image: deer },
//     ];

//     const handleAnimalClick = (animalId) => {
//         navigate(`/wildlifedetail/${animalId}`, { state: { animal: relatedAnimals.find(a => a.id === animalId) } });
//     };

//     const scrollNext = () => {
//         const carousel = document.querySelector('.carousel-inner');
//         carousel.scrollLeft += 120; // Adjust based on item width
//     };

//     return (
//         <div className="wildlife-container">
//             <div className="body-content">
//                 <Sidebar />
//                 <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
//                     <div className="header">
//                         <h1 className="header-text">{animal.name}</h1>
//                         <button className="close-button" onClick={handleClose} aria-label="Close">
//                             ✕
//                         </button>
//                     </div>
//                     <div className="center-main-content">
//                         <div className="sidebar-content">
//                             <div className="found-in-section">
//                                 <h3 className="section-title">Found In</h3>
//                                 <ul className="found-in-list">
//                                     {animal.foundIn.map((park, index) => (
//                                         <li key={index} className="found-in-item">
//                                             {park}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                             <div className="related-animals-section">
//                                 <h3 className="section-title">Related Habitat Animals</h3>
//                                 <div className="related-animals-carousel">
//                                     <div className="carousel-inner">
//                                         {relatedAnimals.map((animal) => (
//                                             <div
//                                                 key={animal.id}
//                                                 className="related-animal-item"
//                                                 onClick={() => handleAnimalClick(animal.id)}
//                                             >
//                                                 <img
//                                                     src={animal.image}
//                                                     alt={`${animal.name}`}
//                                                     className="related-animal-image"
//                                                 />
//                                                 <span className="related-animal-name">{animal.name}</span>
//                                             </div>
//                                         ))}
//                                     </div>
//                                     <button className="carousel-next" aria-label="Next" onClick={() => scrollNext()}>
//                                         ➡️
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="right-section">
//                             <div className="main-image">
//                                 <img src={animal.image} alt={`${animal.name}`} className="animal-image" />
//                             </div>
//                             <div className="animal-info">
//                                 <h2 className="animal-name">{animal.name}</h2>
//                                 <p className="animal-description">{animal.description}</p>
//                                 <div className="animal-details">
//                                     <p>
//                                         <span className="detail-label">Habitat:</span> {animal.habitat}
//                                     </p>
//                                     <p>
//                                         <span className="detail-label">Conservation Status:</span>{' '}
//                                         {animal.conservationStatus}
//                                     </p>
//                                 </div>
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

// export default WildlifePageDetailsPage;