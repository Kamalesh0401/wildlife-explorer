import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from "react-helmet-async";
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';
import './WildlifeDetailsPage.css';
import { Buildimg } from '../utlis';
import { setFromPage } from '../store/generalSlice';

function WildlifeDetailsPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [likes, setLikes] = useState(0);
    const [animal, setAnimal] = useState([]);
    const [relatedAnimals, setRelatedAnimals] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const { fromPage } = useSelector((state) => state.general);

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
        navigate(fromPage);
        dispatch(setFromPage(""));
    };

    useEffect(() => {
        const fetchRelatedAnimals = async () => {
            try {
                const queryParams = new URLSearchParams({
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
                <Helmet>
                    <title>{animal.name ? `${animal.name} - Wildlife Details` : 'Wildlife Details - Wildlife Explorer'}</title>
                    <meta name="description" content={animal.description ? `${animal.description.substring(0, 160)}` : 'Discover detailed information about wildlife species, including habitat, conservation status, and more on Wildlife Explorer.'} />
                    <meta name="keywords" content="wildlife, animals, species, conservation, habitat, biodiversity, nature" />
                    <meta name="author" content="Wildlife Explorer Team" />
                    <meta property="og:title" content={animal.name ? `${animal.name} - Wildlife Details` : 'Wildlife Details - Wildlife Explorer'} />
                    <meta property="og:description" content={animal.description ? `${animal.description.substring(0, 160)}` : 'Explore wildlife species, their habitats, and conservation status with Wildlife Explorer.'} />
                    <meta property="og:image" content={animal.image ? Buildimg(animal.image) : 'https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745430426/lion_ogishm.jpg'} />
                    <meta property="og:url" content={`https://www.wildlifeexplorer.com/wildlifedetail/${id}`} />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={animal.name ? `${animal.name} - Wildlife Details` : 'Wildlife Details - Wildlife Explorer'} />
                    <meta name="twitter:description" content={animal.description ? `${animal.description.substring(0, 160)}` : 'Learn about wildlife species and their conservation with Wildlife Explorer.'} />
                    <meta name="twitter:image" content={animal.image ? Buildimg(animal.image) : 'https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745430426/lion_ogishm.jpg'} />
                </Helmet>
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
                                        </p>
                                        <p>
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

export default WildlifeDetailsPage;