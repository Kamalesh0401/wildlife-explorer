import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './WildlifePage.css';
import deer from '../assets/images/deer.jpg';
import elephant from '../assets/images/elephant.jpg';
import roedeer from '../assets/images/roe-deer.jpg';

function WildlifePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Dummy wildlife data (replace with API data later)
    const wildlife = [
        {
            name: 'Barasingha',
            habitat: 'Wetland',
            description: 'A rare swamp deer found in northern India.',
            //image: `${process.env.PUBLIC_URL}/src/assets/images/barasingha.jpg`,
            image: deer,
        },
        {
            name: 'Bengal Tiger',
            habitat: 'Forest',
            description: 'A majestic big cat native to India.',
            image: elephant,
        },
        {
            name: 'Indian Elephant',
            habitat: 'Grassland/Forest',
            description: 'A large mammal key to India’s ecosystems.',
            image: roedeer,
        },
        {
            name: 'One-Horned Rhinoceros',
            habitat: 'Grassland',
            description: 'A unique species found in Assam.',
            image: roedeer,
        },
    ];

    // Filter wildlife based on search term
    const filteredWildlife = wildlife.filter((animal) =>
        animal.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="wildlife-container">
            <div className="body-content">
                <Sidebar />
                <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                    <div className="header">
                        <h1 className="header-text">WILDLIFE SPECIES</h1>
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
                                    <label htmlFor="species">Species:</label>
                                    <select id="species" className="filter-dropdown">
                                        <option value="">All</option>
                                        <option value="mammal">Mammal</option>
                                        <option value="bird">Bird</option>
                                        <option value="reptile">Reptile</option>
                                    </select>
                                    <label htmlFor="habitat">Habitat:</label>
                                    <select id="habitat" className="filter-dropdown">
                                        <option value="">All</option>
                                        <option value="forest">Forest</option>
                                        <option value="wetland">Wetland</option>
                                        <option value="grassland">Grassland</option>
                                    </select>
                                    <label htmlFor="status">Conservation Status:</label>
                                    <select id="status" className="filter-dropdown">
                                        <option value="">All</option>
                                        <option value="endangered">Endangered</option>
                                        <option value="vulnerable">Vulnerable</option>
                                        <option value="least-concern">Least Concern</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="right-section">
                            <div className="search-bar">
                                <input
                                    type="text"
                                    placeholder="Search wildlife..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="search-input"
                                />
                                <span className="search-icon">🔍</span>
                            </div>
                            <div className="wildlife-grid">
                                {filteredWildlife.map((animal, index) => (
                                    <div className="wildlife-card" key={index}>
                                        <div className="wildlife-image-container">
                                            <img
                                                src={animal.image}
                                                alt={animal.name}
                                                className="wildlife-image"
                                            />
                                        </div>
                                        <h3 className="wildlife-name">{animal.name}</h3>
                                        <p className="wildlife-habitat">Habitat: {animal.habitat}</p>
                                        <button
                                            className="action-button"
                                            aria-label={`Learn more about ${animal.name}`}
                                        >
                                            Learn More
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

export default WildlifePage;