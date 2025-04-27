import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';
import './ParkDetailsPage.css';

function ParkDetailsPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [likes, setLikes] = useState(0);
    const [park, setPark] = useState(null);
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
    const animalCarouselRef = useRef(null);
    const galleryCarouselRef = useRef(null);

    useEffect(() => {
        const fetchParkDetails = async () => {
            if (!id) {
                setError('Invalid park ID');
                setLoading(false);
                return;
            }

            setLoading(true);
            setError(null);

            try {
                // Fetch park details
                const parkResponse = await axios.get(`http://localhost:6005/api/parks/id/${id}`, {
                    headers: { 'Content-Type': 'application/json' },
                });
                const parkData = parkResponse.data?.data?.park;
                if (!parkData) throw new Error('Park not found');

                // Ensure gallery and majorAnimals are arrays
                parkData.gallery = Array.isArray(parkData.gallery) ? parkData.gallery : [];
                parkData.majorAnimals = Array.isArray(parkData.majorAnimals) ? parkData.majorAnimals : [];

                setPark(parkData);

                // Fetch animal details if majorAnimals contains ObjectIds
                const animalPromises = parkData.majorAnimals.map(async (animalId) => {
                    try {
                        const animalResponse = await axios.get(`http://localhost:6005/api/animals/id/${animalId}`);
                        return animalResponse.data?.data?.animal;
                    } catch (err) {
                        console.error(`Failed to fetch animal ${animalId}:`, err);
                        return null;
                    }
                });
                const animalData = (await Promise.all(animalPromises)).filter(Boolean);
                setAnimals(animalData);
                setLoading(false);
            } catch (err) {
                console.error('Failed to load park details:', err);
                setError('Failed to load park details. Please try again.');
                setLoading(false);
            } finally {
                // setLoading(false);
            }
        };

        fetchParkDetails();
    }, [id]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLike = async () => {
        setLikes(likes + 1);
        // Optional: Persist likes to backend
        /*
        try {
          await axios.patch(`http://localhost:6005/api/parks/id/${id}`, { likes: likes + 1 });
        } catch (err) {
          console.error('Failed to update likes:', err);
        }
        */
    };

    const handleClose = () => {
        navigate('/explorepark');
    };

    const handleAnimalClick = (animalId) => {
        const animal = animals.find((a) => a._id === animalId);
        if (animal) {
            navigate(`/wildlifedetail/${animalId}`, { state: { animal } });
        }
    };

    const scrollCarousel = (ref, direction) => {
        if (ref.current) {
            const scrollAmount = direction === 'next' ? ref.current.clientWidth * 0.8 : -ref.current.clientWidth * 0.8;
            ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    if (loading) {
        return (
            // <div className="wd-park-dtls-container">
            //     <div className="wd-park-dtls-loading">Loading...</div>
            // </div>
            <Loader />
        );
    }

    if (error || !park) {
        return (
            <div className="wd-park-dtls-container">
                <div className="wd-park-dtls-error">{error || 'Park not found'}</div>
            </div>
        );
    }

    const placeholderImage = 'https://via.placeholder.com/800x400?text=Park+Image';
    const placeholderMap = 'https://via.placeholder.com/300x150?text=Park+Map';

    return (
        <>
            {loading && <Loader />}
            <div className="wd-park-dtls-container">
                <div className="wd-park-dtls-body-content">
                    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                    <div className={`wd-park-dtls-main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                        <div className="wd-park-dtls-header">
                            <h1 className="wd-park-dtls-header-text">{park.name}</h1>
                            <button
                                className="wd-park-dtls-close-button"
                                onClick={handleClose}
                                aria-label="Close Park Details"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="wd-park-dtls-center-main-content">
                            <div className="wd-park-dtls-sidebar-content">
                                <div className="wd-park-dtls-you-are-here-section">
                                    <h3 className="wd-park-dtls-section-title">You Are Here</h3>
                                    <div className="wd-park-dtls-map-placeholder">
                                        <img
                                            src={placeholderMap}
                                            alt={`Map of ${park.name}`}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <p className="wd-park-dtls-description">{park.description}</p>
                                </div>
                                <div className="wd-park-dtls-spot-nearby-section">
                                    <h3 className="wd-park-dtls-section-title">Animals in the Park</h3>
                                    <div className="wd-park-dtls-spot-nearby-carousel">
                                        <div className="wd-park-dtls-carousel-inner" ref={animalCarouselRef}>
                                            {animals.length > 0 ? (
                                                animals.map((animal) => (
                                                    <div
                                                        key={animal._id}
                                                        className="wd-park-dtls-spot-nearby-item"
                                                        onClick={() => handleAnimalClick(animal._id)}
                                                        onKeyDown={(e) => e.key === 'Enter' && handleAnimalClick(animal._id)}
                                                        role="button"
                                                        tabIndex={0}
                                                        aria-label={`View details for ${animal.name}`}
                                                    >
                                                        <img
                                                            src={animal.image || placeholderImage}
                                                            alt={animal.name}
                                                            className="wd-park-dtls-spot-nearby-image"
                                                        />
                                                        <span className="wd-park-dtls-spot-nearby-name">{animal.name}</span>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="wd-park-dtls-placeholder-text">No animals available</p>
                                            )}
                                        </div>
                                        {animals.length > 2 && (
                                            <>
                                                <button
                                                    className="wd-park-dtls-carousel-prev"
                                                    onClick={() => scrollCarousel(animalCarouselRef, 'prev')}
                                                    aria-label="Previous Animals"
                                                >
                                                    ⬅️
                                                </button>
                                                <button
                                                    className="wd-park-dtls-carousel-next"
                                                    onClick={() => scrollCarousel(animalCarouselRef, 'next')}
                                                    aria-label="Next Animals"
                                                >
                                                    ➡️
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="wd-park-dtls-right-section">
                                <div className="wd-park-dtls-park-main-image">
                                    <img
                                        src={park.image || placeholderImage}
                                        alt={park.name}
                                        className="wd-park-dtls-parkdtl-image"
                                    />
                                </div>
                                <div className="wd-park-dtls-park-info">
                                    <h2 className="wd-park-dtls-park-name">Park Highlights</h2>
                                    <p className="wd-park-dtls-park-description">{park.overview}</p>
                                    {animals.length > 0 && (
                                        <div className="wd-park-dtls-featured-animal">
                                            <img
                                                src={animals[0].image || placeholderImage}
                                                alt={animals[0].name}
                                                className="wd-park-dtls-animal-thumbnail"
                                            />
                                            <span>
                                                {animals[0].name} -{' '}
                                                <button
                                                    className="wd-park-dtls-learn-more"
                                                    onClick={() => handleAnimalClick(animals[0]._id)}
                                                    aria-label={`Learn more about ${animals[0].name}`}
                                                >
                                                    Learn More
                                                </button>
                                            </span>
                                        </div>
                                    )}
                                    <div className="wd-park-dtls-gallery-section">
                                        <h3 className="wd-park-dtls-gallery-title">Gallery</h3>
                                        <div className="wd-park-dtls-gallery-carousel">
                                            <div className="wd-park-dtls-gallery-inner" ref={galleryCarouselRef}>
                                                {park.gallery.length > 0 ? (
                                                    park.gallery.map((galleryItem) => (
                                                        <div
                                                            key={galleryItem._id}
                                                            className="wd-park-dtls-gallery-item"
                                                            onClick={() => alert(`Viewing ${galleryItem.caption}`)}
                                                            onKeyDown={(e) => e.key === 'Enter' && alert(`Viewing ${galleryItem.caption}`)}
                                                            role="button"
                                                            tabIndex={0}
                                                            aria-label={`View ${galleryItem.caption}`}
                                                        >
                                                            <img
                                                                src={galleryItem.image || placeholderImage}
                                                                alt={galleryItem.caption}
                                                                className="wd-park-dtls-gallery-image"
                                                            />
                                                            <span className="wd-park-dtls-gallery-caption">{galleryItem.caption}</span>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p className="wd-park-dtls-placeholder-text">No gallery images available</p>
                                                )}
                                            </div>
                                            {park.gallery.length > 2 && (
                                                <>
                                                    <button
                                                        className="wd-park-dtls-carousel-prev"
                                                        onClick={() => scrollCarousel(galleryCarouselRef, 'prev')}
                                                        aria-label="Previous Gallery Images"
                                                    >
                                                        ⬅️
                                                    </button>
                                                    <button
                                                        className="wd-park-dtls-carousel-next"
                                                        onClick={() => scrollCarousel(galleryCarouselRef, 'next')}
                                                        aria-label="Next Gallery Images"
                                                    >
                                                        ➡️
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className="wd-park-dtls-like-section">
                                        <button
                                            className="wd-park-dtls-like-button"
                                            onClick={handleLike}
                                            aria-label={`Like ${park.name}`}
                                        >
                                            ❤️ Like
                                        </button>
                                        <span className="wd-park-dtls-like-count">{likes} Likes</span>
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

export default ParkDetailsPage;