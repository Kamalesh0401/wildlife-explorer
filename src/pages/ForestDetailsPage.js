import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import forestImage from '../assets/images/forest2.jpg';
import './ForestDetailsPage.css';
import { Buildimg } from '../utlis';

function ForestDetailsPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [likes, setLikes] = useState(0);
    const [forest, setForest] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    console.log("id of Forest Details : ", id);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleClose = () => {
        navigate('/exploreforests');
    };

    const forest1 = {
        name: 'Tropical Rainforest',
        image: forestImage,
        description:
            'Tropical Rainforests are dense, warm, and wet forests found near the equator. They receive high rainfall, often exceeding 2000 mm annually, and maintain a consistent temperature of 20-30°C. These forests are known for their incredible biodiversity, hosting millions of plant and animal species.',
        overview:
            'Tropical Rainforests cover about 6% of the Earth’s surface but house over 50% of the world’s biodiversity. They play a crucial role in regulating the global climate by absorbing CO2 and producing oxygen. Key activities include hiking, bird watching, and wildlife tours. Best time to visit: Dry season (varies by region).',
        conservationStatus:
            'Threatened by deforestation, illegal logging, and climate change. Conservation efforts include protected areas and reforestation initiatives.',
        gallery: [
            { id: 1, image: forestImage, caption: 'Canopy View' },
            { id: 2, image: forestImage, caption: 'Waterfall' },
            { id: 3, image: forestImage, caption: 'Wildlife Habitat' },
        ],
    };

    const forestSpecies = [
        { id: 2, name: 'Macaw', caption: 'Macaw', image: forestImage },
        { id: 3, name: 'Sloth', caption: 'Sloth', image: forestImage },
        { id: 1, name: 'Jaguar', caption: 'Jaguar', image: forestImage },
    ];

    useEffect(() => {
        const fetchForestDetails = async () => {
            try {
                const options = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
                const res = await fetch(`http://localhost:6003/api/forests/id/${id}`, options);
                const response = await res.json();
                console.log("Response of Details : ", response);
                setForest(response?.data?.forest);
                setLoading(false);
            } catch (err) {
                //setError('Failed to load animal details');
                setLoading(false);
            }
        };
        fetchForestDetails();
    }, [id]);


    const handleSpeciesClick = (speciesId) => {
        navigate(`/wildlifedetail/${speciesId}`, { state: { species: forestSpecies.find(s => s.id === speciesId) } });
    };

    return (
        <div className="wd-forest-dtls-container">
            <div className="wd-forest-dtls-body-content">
                <Sidebar />
                <div className={`wd-forest-dtls-main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                    <div className="wd-forest-dtls-header">
                        <h1 className="wd-forest-dtls-header-text">{forest.name}</h1>
                        <button className="wd-forest-dtls-close-button" onClick={handleClose} aria-label="Close">
                            ✕
                        </button>
                    </div>
                    <div className="wd-forest-dtls-center-main-content">
                        <div className="wd-forest-dtls-sidebar-content">
                            <div className="wd-forest-dtls-you-are-here-section">
                                <h3 className="wd-forest-dtls-section-title">Forest Location</h3>
                                <div className="wd-forest-dtls-map-placeholder">
                                    <img
                                        src={Buildimg("https://example.com/tropical-rainforest-map.jpg")}
                                        alt="Map of Tropical Rainforest"
                                        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                                    />
                                </div>
                                <p className="wd-forest-dtls-description">{forest.description}</p>
                            </div>
                            <div className="wd-forest-dtls-spot-nearby-section">
                                <h3 className="wd-forest-dtls-section-title">Key Species in the Forest</h3>
                                <div className="wd-forest-dtls-spot-nearby-carousel">
                                    <div className="wd-forest-dtls-carousel-inner">
                                        {forestSpecies.map((species) => (
                                            <div
                                                key={species.id}
                                                className="wd-forest-dtls-spot-nearby-item"
                                                onClick={() => handleSpeciesClick(species.id)}
                                            >
                                                <img
                                                    src={Buildimg(species.image)}
                                                    alt={`${species.name}`}
                                                    className="wd-forest-dtls-spot-nearby-image"
                                                />
                                                <span className="wd-forest-dtls-spot-nearby-name">{species.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="wd-forest-dtls-carousel-next" aria-label="Next">
                                        ➡️
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="wd-forest-dtls-right-section">
                            <div className="wd-forest-dtls-forest-main-image">
                                <img src={forest.image} alt={`${forest.name}`} className="wd-forest-dtls-image" />
                            </div>
                            <div className="wd-forest-dtls-forest-info">
                                <h2 className="wd-forest-dtls-forest-name">Forest Overview</h2>
                                <p className="wd-forest-dtls-forest-description">{forest.overview}</p>
                                <h3 className="wd-forest-dtls-section-title">Conservation Status</h3>
                                <p className="wd-forest-dtls-forest-description">{forest.conservationStatus}</p>
                                <div className="wd-forest-dtls-gallery-section">
                                    <h3 className="wd-forest-dtls-gallery-title">Gallery</h3>
                                    <div className="wd-forest-dtls-gallery-carousel">
                                        <div className="wd-forest-dtls-gallery-inner">
                                            {forest?.gallery?.map((item) => (
                                                <div key={item.id} className="wd-forest-dtls-gallery-item">
                                                    <img
                                                        src={Buildimg(item.image)}
                                                        alt={item.caption}
                                                        className="wd-forest-dtls-gallery-image"
                                                    />
                                                    <span className="wd-forest-dtls-gallery-caption">{item.caption}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <button className="wd-forest-dtls-carousel-next" aria-label="Next">
                                            ➡️
                                        </button>
                                    </div>
                                </div>
                                <div className="wd-forest-dtls-like-section">
                                    <button className="wd-forest-dtls-like-button" onClick={handleLike}>
                                        ❤️ Like
                                    </button>
                                    <span className="wd-forest-dtls-like-count">{likes} Likes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForestDetailsPage;