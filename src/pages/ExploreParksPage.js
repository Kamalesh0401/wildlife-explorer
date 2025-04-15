import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import forest from '../assets/images/forest.jpg';
import forest2 from '../assets/images/forest2.jpg';
import forest3 from '../assets/images/forest3.jpg';
import './ExploreParksPage.css';
import { useNavigate } from 'react-router-dom';

function ExploreParksPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const naviagte = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Dummy park data (replace with API data later)
    const parks = [
        {
            name: 'Manas National Park',
            location: 'Assam, India',
            description: 'Home to the rare Barasingha and diverse wildlife.',
            image: forest,
            //image: `${process.env.PUBLIC_URL}/src/assets/images/manas.jpg`,
        },
        {
            name: 'Jim Corbett National Park',
            location: 'Uttarakhand, India',
            description: 'Famous for its Bengal Tiger population.',
            image: forest2,
        },
        {
            name: 'Kaziranga National Park',
            location: 'Assam, India',
            description: 'A UNESCO site known for the one-horned rhinoceros.',
            image: forest3,
        },
        {
            name: 'Bandhavgarh National Park',
            location: 'Madhya Pradesh, India',
            description: 'Renowned for its high tiger density.',
            image: `${process.env.PUBLIC_URL}/src/assets/images/bandhavgarh.jpg`,
        },
    ];

    // Filter parks based on search term
    const filteredParks = parks.filter((park) =>
        park.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="explore-parks-container">
            <div className="body-content">
                <Sidebar />
                <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                    <div className="header">
                        <h1 className="header-text">EXPLORE NATIONAL PARKS</h1>
                        <button
                            className="mobile-menu"
                            onClick={toggleSidebar}
                            aria-label="Toggle Sidebar"
                        >
                            ≡
                        </button>
                    </div>
                    <div className="center-main-content">
                        <div className="sidebar-content">
                            <div className="filter-section">
                                <h3 className="section-title">FILTERS</h3>
                                <div className="filter-options">
                                    <label htmlFor="region">Region:</label>
                                    <select id="region" className="filter-dropdown">
                                        <option value="">All</option>
                                        <option value="assam">Assam</option>
                                        <option value="karnataka">Karnataka</option>
                                        <option value="uttarakhand">Uttarakhand</option>
                                        <option value="madhya-pradesh">Madhya Pradesh</option>
                                    </select>
                                    <label htmlFor="wildlife">Wildlife:</label>
                                    <select id="wildlife" className="filter-dropdown">
                                        <option value="">All</option>
                                        <option value="deer">Deer</option>
                                        <option value="tiger">Tiger</option>
                                        <option value="rhinoceros">Rhinoceros</option>
                                    </select>
                                    <label htmlFor="activity">Activities:</label>
                                    <select id="activity" className="filter-dropdown">
                                        <option value="">All</option>
                                        <option value="hiking">Hiking</option>
                                        <option value="safari">Safari</option>
                                        <option value="bird-watching">Bird Watching</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="right-section">
                            <div className="search-bar">
                                <input
                                    type="text"
                                    placeholder="Search parks..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="search-input"
                                />
                                <span className="search-icon">🔍</span>
                            </div>
                            <div className="park-grid">
                                {filteredParks.map((park, index) => (
                                    <div className="park-card" key={index}>
                                        <img
                                            src={park.image}
                                            alt={park.name}
                                            className="park-image"
                                        />
                                        <h3 className="park-name">{park.name}</h3>
                                        <p className="park-location">{park.location}</p>
                                        <p className="park-description">{park.description}</p>
                                        <button
                                            className="action-button"
                                            aria-label={`View details for ${park.name}`}
                                            onClick={() => { naviagte("/parkdetails") }}
                                        >
                                            View Details
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExploreParksPage;