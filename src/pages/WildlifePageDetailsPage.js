import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';
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
                setLoading(true);
                const options = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
                const res = await fetch(`http://localhost:6004/api/animals/id/${id}`, options);
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

    // // Mock data for all animals (replace with API call)
    // const allAnimals = [
    //     { id: 'hog-deer', name: 'Hog Deer', habitat: 'Wetland', image: deer },
    //     { id: 'chital-deer', name: 'Chital Deer', habitat: 'Forest', image: deer },
    //     { id: 'asian-water-buffalo', name: 'Asian Water Buffalo', habitat: 'Wetland', image: deer },
    //     { id: 'bengal-tiger', name: 'Bengal Tiger', habitat: 'Forest', image: deer },
    //     { id: 'indian-elephant', name: 'Indian Elephant', habitat: 'Forest', image: deer },
    // ];

    useEffect(() => {
        const fetchRelatedAnimals = async () => {
            try {
                const queryParams = new URLSearchParams({
                    //habitat: animal.habitat || '',
                    diet: animal.diet || '',
                }).toString();
                const response = await fetch(`http://localhost:6004/api/animals/related?${queryParams}`);
                const data = await response.json();
                const related = data
                    .filter((a) => a._id !== animal._id)
                    .slice(0, 3);
                setRelatedAnimals(related);
            } catch (error) {
                console.error('Error fetching related animals:', error);
            }
        };
        if (animal.habitat) {
            fetchRelatedAnimals();
        }
    }, [animal._id, animal.habitat]);

    const handleRelatedAnimalClick = (animalId) => {
        navigate(`/wildlife/${animalId}`);
    };

    return (
        <>
            {loading && <Loader />}
            <div className="wd-wildlife-dtls-container">
                <div className="wd-wildlife-dtls-body-content">
                    <Sidebar />
                    <div className={`wd-wildlife-dtls-main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                        <div className="wd-wildlife-dtls-header">
                            <h1 className="wd-wildlife-dtls-header-text">{animal.name}</h1>
                            <button className="wd-wildlife-dtls-close-button" onClick={handleClose} aria-label="Close Details Page">
                                ✕
                            </button>
                        </div>
                        <div className="wd-wildlife-dtls-center-main-content">
                            <div className="wd-wildlife-dtls-sidebar-content">
                                <div className="wd-wildlife-dtls-found-in-section">
                                    <h3 className="wd-wildlife-dtls-section-title">Found In</h3>
                                    <ul className="wd-wildlife-dtls-found-in-list">
                                        {animal?.foundIn?.map((park, index) => (
                                            <li key={index} className="wd-wildlife-dtls-found-in-item">
                                                {park}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="wd-wildlife-dtls-related-animals-section">
                                    <h3 className="wd-wildlife-dtls-section-title">Related Habitat Animals</h3>
                                    {relatedAnimals.length > 0 ? (
                                        <div className="wd-wildlife-dtls-related-animals-list">
                                            {relatedAnimals?.map((relatedAnimal, i) => (
                                                <div
                                                    key={relatedAnimal.id}
                                                    className="wd-wildlife-dtls-related-animal-item"
                                                    onClick={() => handleRelatedAnimalClick(relatedAnimal._id)}
                                                    role="button"
                                                    tabIndex={i}
                                                    onKeyPress={(e) => e.key === 'Enter' && handleRelatedAnimalClick(relatedAnimal._id)}
                                                    aria-label={`View details for ${relatedAnimal.name}`}
                                                >
                                                    <img
                                                        src={Buildimg(relatedAnimal.image)}
                                                        alt={relatedAnimal.name}
                                                        className="wd-wildlife-dtls-related-animal-image"
                                                    />
                                                    <span className="wd-wildlife-dtls-related-animal-name">{relatedAnimal.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="wd-wildlife-dtls-no-related-text">No related animals found in this habitat.</p>
                                    )}
                                </div>
                            </div>
                            <div className="wd-wildlife-dtls-right-section">
                                <div className="wd-wildlife-dtls-main-image">
                                    <img src={Buildimg(animal.image)} alt={animal.name} className="wd-wildlife-dtls-animal-image" />
                                </div>
                                <div className="wd-wildlife-dtls-animal-info">
                                    <h2 className="wd-wildlife-dtls-animal-name">{animal.name}</h2>
                                    <p className="wd-wildlife-dtls-scientific-name">Scientific Name: {animal.scientificName}</p>
                                    <p className="wd-wildlife-dtls-animal-description">{animal.description}</p>
                                    <div className="wd-wildlife-dtls-animal-details">
                                        <p>
                                            <span className="wd-wildlife-dtls-detail-label">Habitat:</span> {animal.habitat}
                                        </p>
                                        <p>
                                            <span className="wd-wildlife-dtls-detail-label">Conservation Status:</span> {animal.conservationStatus}
                                        </p>
                                        <p>
                                            <span className="wd-wildlife-dtls-detail-label">Population Trend:</span> {animal.populationTrend}
                                        </p>
                                        <p>
                                            <span className="wd-wildlife-dtls-detail-label">Geographic Range:</span>{' '}
                                            {animal?.geographicRange?.join(', ')}
                                        </p>
                                        <p>
                                            <span className="wd-wildlife-dtls-detail-label">Threats:</span> {animal?.threats?.join(', ')}
                                        </p> <p>
                                            <span className="wd-wildlife-dtls-detail-label">Weight:</span> {animal.weight}
                                        </p>
                                        <p>
                                            <span className="wd-wildlife-dtls-detail-label">Lifespan:</span> {animal.lifespan}
                                        </p>
                                        <p>
                                            <span className="wd-wildlife-dtls-detail-label">Diet:</span> {animal.diet}
                                        </p>
                                    </div>
                                    <div className="wd-wildlife-dtls-like-section">
                                        <button
                                            className="wd-wildlife-dtls-like-button"
                                            onClick={handleLike}
                                            aria-label={`Like ${animal.name}`}
                                        >
                                            ❤️ Like
                                        </button>
                                        <span className="wd-wildlife-dtls-like-count">{likes} Likes</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WildlifePageDetailsPage;