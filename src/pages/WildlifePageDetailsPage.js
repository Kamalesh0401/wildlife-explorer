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

//     // Dummy data for related habitat animals
//     const relatedAnimals = [
//         { name: 'Hog Deer', image: deer },
//         { name: 'Chital Deer', image: deer },
//         { name: 'Asian Water Buffalo', image: deer },
//     ];

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
//                                 <div className="related-animals-list">
//                                     {relatedAnimals.map((animal, index) => (
//                                         <div key={index} className="related-animal-item">
//                                             <img
//                                                 src={animal.image}
//                                                 alt={`${animal.name}`}
//                                                 className="related-animal-image"
//                                             />
//                                             <span className="related-animal-name">{animal.name}</span>
//                                         </div>
//                                     ))}
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



import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import deer from '../assets/images/deer.jpg';
import './WildlifePageDetailsPage.css';
import { Buildimg } from '../utlis';

function WildlifePageDetailsPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [likes, setLikes] = useState(0);
    const [animal, setAnimal] = useState([]);
    const [relatedAnimals, setRelatedAnimals] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams(); // Assuming dynamic routing (e.g., /wildlife/:animalId)

    // Fetch animal details
    useEffect(() => {
        const fetchAnimalDetails = async () => {
            try {
                const options = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
                const res = await fetch(`http://localhost:6003/api/animals/id/${id}`, options);
                const response = await res.json();
                console.log("Response of Details : ", response);
                setAnimal(response);
                setLoading(false);
            } catch (err) {
                //setError('Failed to load animal details');
                setLoading(false);
            }
        };
        fetchAnimalDetails();
    }, [id]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleClose = () => {
        navigate('/wildlife');
    };

    // const animal = {
    //     id: 'barasingha',
    //     name: 'Barasingha',
    //     scientificName: 'Rucervus duvaucelii',
    //     habitat: 'Wetland',
    //     description:
    //         'The barasingha, also called swamp deer, is a deer species distributed in the Indian subcontinent. Populations in northern and central India are fragmented, and two isolated populations occur in southwestern Nepal and Assam, India. Known for its multi-tined antlers, it thrives in wetland habitats.',
    //     conservationStatus: 'Vulnerable',
    //     populationTrend: 'Decreasing',
    //     geographicRange: ['Northern India', 'Nepal'],
    //     threats: ['Habitat loss', 'Poaching', 'Human-wildlife conflict'],
    //     weight: '170-280 kg',
    //     lifespan: '15-20 years',
    //     diet: 'Herbivore (grasses, aquatic plants)',
    //     foundIn: ['Manas National Park', 'Kaziranga National Park', 'Dudhwa National Park'],
    //     image: deer,
    // };

    // Mock data for all animals (replace with API call)
    const allAnimals = [
        { id: 'hog-deer', name: 'Hog Deer', habitat: 'Wetland', image: deer },
        { id: 'chital-deer', name: 'Chital Deer', habitat: 'Forest', image: deer },
        { id: 'asian-water-buffalo', name: 'Asian Water Buffalo', habitat: 'Wetland', image: deer },
        { id: 'bengal-tiger', name: 'Bengal Tiger', habitat: 'Forest', image: deer },
        { id: 'indian-elephant', name: 'Indian Elephant', habitat: 'Forest', image: deer },
    ];

    // Logic to fetch related animals based on habitat
    // useEffect(() => {
    //     const fetchRelatedAnimals = () => {
    //         // Filter animals with the same habitat, excluding the current animal
    //         const related = allAnimals
    //             .filter((a) => a.habitat === animal.habitat && a.id !== animal.id)
    //             .slice(0, 3); // Limit to 3 related animals
    //         setRelatedAnimals(related);
    //     };

    //     fetchRelatedAnimals();
    // }, [animal._id, animal.habitat]);

    // useEffect(() => {
    //     const fetchRelatedAnimals = async () => {
    //         try {
    //             const response = await fetch('/api/animals');
    //             const data = await response.json();
    //             const related = data
    //                 .filter((a) => a.habitat === animal.habitat && a.id !== animal.id)
    //                 .slice(0, 3);
    //             setRelatedAnimals(related);
    //         } catch (error) {
    //             console.error('Error fetching related animals:', error);
    //         }
    //     };
    //     fetchRelatedAnimals();
    // }, [animal.id, animal.habitat]);

    const handleRelatedAnimalClick = (animalId) => {
        navigate(`/wildlife/${animalId}`);
    };

    return (
        <div className="wildlife-container">
            <div className="body-content">
                <Sidebar />
                <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                    <div className="header">
                        <h1 className="header-text">{animal.name}</h1>
                        <button className="close-button" onClick={handleClose} aria-label="Close Details Page">
                            ✕
                        </button>
                    </div>
                    <div className="center-main-content">
                        <div className="sidebar-content">
                            <div className="found-in-section">
                                <h3 className="section-title">Found In</h3>
                                <ul className="found-in-list">
                                    {animal?.foundIn?.map((park, index) => (
                                        <li key={index} className="found-in-item">
                                            {park}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="related-animals-section">
                                <h3 className="section-title">Related Habitat Animals</h3>
                                {relatedAnimals.length > 0 ? (
                                    <div className="related-animals-list">
                                        {relatedAnimals?.map((relatedAnimal) => (
                                            <div
                                                key={relatedAnimal.id}
                                                className="related-animal-item"
                                                onClick={() => handleRelatedAnimalClick(relatedAnimal.id)}
                                                role="button"
                                                tabIndex={0}
                                                onKeyPress={(e) => e.key === 'Enter' && handleRelatedAnimalClick(relatedAnimal.id)}
                                                aria-label={`View details for ${relatedAnimal.name}`}
                                            >
                                                <img
                                                    src={Buildimg(relatedAnimal.image)}
                                                    alt={relatedAnimal.name}
                                                    className="related-animal-image"
                                                />
                                                <span className="related-animal-name">{relatedAnimal.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="no-related-text">No related animals found in this habitat.</p>
                                )}
                            </div>
                        </div>
                        <div className="right-section">
                            <div className="main-image">
                                <img src={Buildimg(animal.image)} alt={animal.name} className="animal-image" />
                            </div>
                            <div className="animal-info">
                                <h2 className="animal-name">{animal.name}</h2>
                                <p className="scientific-name">Scientific Name: {animal.scientificName}</p>
                                <p className="animal-description">{animal.description}</p>
                                <div className="animal-details">
                                    <p>
                                        <span className="detail-label">Habitat:</span> {animal.habitat}
                                    </p>
                                    <p>
                                        <span className="detail-label">Conservation Status:</span> {animal.conservationStatus}
                                    </p>
                                    <p>
                                        <span className="detail-label">Population Trend:</span> {animal.populationTrend}
                                    </p>
                                    <p>
                                        <span className="detail-label">Geographic Range:</span>{' '}
                                        {animal?.geographicRange?.join(', ')}
                                    </p>
                                    {/* <p>
                                        <span className="detail-label">Threats:</span> {animal.threats.join(', ')}
                                    </p> */}
                                    {/* <p>
                                        <span className="detail-label">Weight:</span> {animal.weight}
                                    </p>
                                    <p>
                                        <span className="detail-label">Lifespan:</span> {animal.lifespan}
                                    </p> */}
                                    <p>
                                        <span className="detail-label">Diet:</span> {animal.diet}
                                    </p>
                                </div>
                                <div className="like-section">
                                    <button
                                        className="like-button"
                                        onClick={handleLike}
                                        aria-label={`Like ${animal.name}`}
                                    >
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