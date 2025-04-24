import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import tropicalrainforest from '../assets/images/forest/tropical-rainforest.jpg';
import temperaturerainforest from '../assets/images/forest/temperature-rainforest.jpg';
import borealforest from '../assets/images/forest/boreal-forest.jpg';
import tropicaldeciduousforest from '../assets/images/forest/tropical-deciduous-forest.jpg';
import temperatedeciduousforest from '../assets/images/forest/temperate-deciduous-forest.jpg';
import mangroveforest from '../assets/images/forest/mangrove-forest.jpg';
import montaneforest from '../assets/images/forest/montane-forest.jpg';
import savannaforest from '../assets/images/forest/savanna-forest.jpg';
import coniferousforest from '../assets/images/forest/coniferous-forest.jpg';
import dryforest from '../assets/images/forest/dry-forest.jpg';
import mediterraneanforest from '../assets/images/forest/mediterranean-forest.jpg';
import forest2 from '../assets/images/forest2.jpg';
import './ForestPage.css';
import { useNavigate } from 'react-router-dom';
import { Buildimg } from '../utlis';

function ForestExplorer() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [forestData, setForestData] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const forestArray = [
        { name: "Tropical Rainforest", explanation: 'Home to the richest biodiversity on Earth, tropical forests are a treasure trove of life.', image: tropicalrainforest },
        { name: "Temperate Rainforest", explanation: "These forests are known for their stunning seasonal changes and diverse wildlife.", image: temperaturerainforest },
        { name: "Boreal Forest", explanation: "Also known as taiga, these forests are located in colder regions of the world.", image: borealforest },
        { name: "Tropical Deciduous Forest", explanation: "Forests that shed their leaves in the dry season, found in tropical regions.", image: tropicaldeciduousforest },
        { name: "Temperate Deciduous Forest", explanation: "Forests in temperate regions with trees that shed leaves seasonally.", image: temperatedeciduousforest },
        { name: "Mangrove Forest", explanation: "Coastal forests with salt-tolerant trees growing in brackish water.", image: mangroveforest },
        { name: "Montane Forest", explanation: "Forests found at high altitudes, with varying vegetation based on elevation.", image: montaneforest },
        { name: "Savanna Forest", explanation: "Scattered trees in tropical grasslands with distinct wet and dry seasons.", image: savannaforest },
        { name: "Coniferous Forest", explanation: "Forests dominated by conifer trees like pines, spruces, and firs, in cool climates.", image: coniferousforest },
        { name: "Dry Forest", explanation: "Found in arid regions, these forests have drought-resistant vegetation.", image: dryforest },
        { name: "Mediterranean Forest", explanation: "Found in Mediterranean climates, with evergreen and drought-adapted vegetation.", image: mediterraneanforest },
        { name: "Subtropical Forest", explanation: "Located in subtropical regions, with a mix of tropical and temperate species.", image: forest2 },
    ];

    const filteredForests = forestArray.filter((forest) =>
        forest.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = async (query) => {
        setSearchTerm(query);
        query = query.toLowerCase();

        if (query.length >= 3) {
            setLoading(true);
            try {
                const options = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                };
                const res = await fetch(`http://localhost:6003/api/forests/${query}`, options);
                const response = await res.json();
                console.log("Response : ", response);

                setForestData(response);
            } catch (ex) {
                console.error("Error fetching species data:", ex);
            } finally {
                setLoading(false);
            }
        }
        else {

        }
    };

    // Handle animal click
    const handleForestClick = (id) => {
        navigate(`/forestdetails/${encodeURIComponent(id)}`);
    };

    return (
        <div className="wd-forest-container">
            <div className="wd-forest-body-content mb-3">
                <Sidebar />
                <div className={`wd-forest-main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                    <div className="wd-forest-header">
                        <h1 className="wd-forest-header-text">EXPLORE FORESTS</h1>
                        <button
                            className="wd-forest-mobile-menu"
                            onClick={toggleSidebar}
                            aria-label="Toggle Sidebar"
                        >
                            ≡
                        </button>
                    </div>
                    <div className="wd-forest-center-main-content">
                        <div className="wd-forest-sidebar-content">
                            <div className="wd-forest-info-section">
                                <h3 className="wd-forest-section-title">FOREST INFO</h3>
                                <p className="wd-forest-info-text">
                                    Forests cover about 31% of the Earth's land surface, playing a vital role in carbon sequestration and oxygen production.
                                </p>
                                <p className="wd-forest-info-text">
                                    They are home to 80% of the world's terrestrial biodiversity, including countless species of plants, animals, and microorganisms.
                                </p>
                            </div>
                        </div>
                        <div className="wd-forest-right-section">
                            <div className="wd-forest-search-bar">
                                <input
                                    type="text"
                                    placeholder="Search forests..."
                                    value={searchTerm}
                                    onChange={(e) => handleSearch(e.target.value)}
                                    className="wd-forest-search-input"
                                />
                                <span className="wd-forest-search-icon">🔍</span>
                            </div>
                            <div className="wd-forest-grid">
                                {filteredForests.map((forest, index) => (
                                    <div className="wd-forest-card" key={index}>
                                        <img
                                            src={Buildimg(forest.image)}
                                            alt={forest.name}
                                            className="wd-forest-image"
                                        />
                                        <h3 className="wd-forest-name">{forest.name}</h3>
                                        <p className="wd-forest-description">{forest.explanation}</p>
                                        <button
                                            className="wd-forest-action-button"
                                            aria-label={`View details for ${forest.name}`}
                                            onClick={() => { handleForestClick(forest._id) }}
                                        >
                                            View Details
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <section className="wd-forest-additional-info">
                                <h3 className="wd-forest-section-title">Why Forests Matter</h3>
                                <p className="wd-forest-info-text">
                                    Forests are critical for global ecosystems. They regulate climate, store carbon, and provide resources like timber, food, and medicine. Protecting forests helps combat climate change and preserves habitats for future generations.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ForestExplorer;


// Fetch forests from backend
// useEffect(() => {
//     const fetchForests = async () => {
//         try {
//             const response = await fetch('http://localhost:3000/api/forests');
//             setForests(response.data);
//         } catch (error) {
//             console.error('Error fetching forests:', error);
//         }
//     };
//     fetchForests();
// }, []);