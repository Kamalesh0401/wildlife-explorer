import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from "react-helmet-async";
import Sidebar from '../components/Sidebar';
import ImageCard from "../components/ImageCard";
import Loader from '../components/Loader';
import './ForestDetailsPage.css';
import { Buildimg } from '../utlis';
import { setFromPage } from '../store/generalSlice';

function ForestDetailsPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [likes, setLikes] = useState(0);
    const [forest, setForest] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();

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

    useEffect(() => {
        const fetchForestDetails = async () => {
            setLoading(true);
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
        dispatch(setFromPage(`/forestdetails/${encodeURIComponent(id)}`));
        navigate(`/wildlifedetail/${encodeURIComponent(speciesId)}`);
    };

    return (
        <>
            {loading && <Loader />}
            <div className="wd-forest-dtls-container">
                <Helmet>
                    <title>{forest.name ? `${forest.name} - Forest Details` : 'Forest Details - Wildlife Explorer'}</title>
                    <meta name="description" content={forest.overview ? `${forest.overview.substring(0, 160)}` : 'Explore detailed information about forests, including key species, conservation status, and stunning galleries on Wildlife Explorer.'} />
                    <meta name="keywords" content="forest, ecosystem, biodiversity, conservation, wildlife, nature, key species" />
                    <meta name="author" content="Wildlife Explorer Team" />
                    <meta property="og:title" content={forest.name ? `${forest.name} - Forest Details` : 'Forest Details - Wildlife Explorer'} />
                    <meta property="og:description" content={forest.overview ? `${forest.overview.substring(0, 160)}` : 'Discover forest ecosystems, key species, and conservation efforts with Wildlife Explorer.'} />
                    <meta property="og:image" content={forest.image ? Buildimg(forest.image) : 'https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745430379/forest2.jpg'} />
                    <meta property="og:url" content={`https://www.wildlifeexplorer.com/forestdetails/${id}`} />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={forest.name ? `${forest.name} - Forest Details` : 'Forest Details - Wildlife Explorer'} />
                    <meta name="twitter:description" content={forest.overview ? `${forest.overview.substring(0, 160)}` : 'Explore forest ecosystems and conservation with Wildlife Explorer.'} />
                    <meta name="twitter:image" content={forest.image ? Buildimg(forest.image) : 'https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745430379/forest2.jpg'} />
                </Helmet>
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
                                            {forest?.keySpecies?.map((species) => (
                                                <div
                                                    key={species._id}
                                                    className="wd-forest-dtls-spot-nearby-item"
                                                    onClick={() => handleSpeciesClick(species._id)}
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
        </>
    );
}

export default ForestDetailsPage;