import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className="homepage-container">
            {/* Header */}
            <div className="header">
                <h1 className="header-text">WILDLIFE EXPLORER</h1>
                <p className="tagline">Discover Nature’s Wonders</p>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Left Sidebar */}
                <div className="sidebar">
                    {/* Sidebar Icons */}
                    <div className="sidebar-icons">
                        <div className="icon">🏠</div>
                        <div className="icon">🌳</div>
                        <div className="icon">🐾</div>
                        <div className="icon">ℹ️</div>
                        <div className="icon last-icon">📧</div>
                    </div>

                    {/* Sidebar Content */}
                    <div className="sidebar-content">
                        <div className="intro-section">
                            <h3 className="section-title">WELCOME</h3>
                            <p className="description">
                                Discover the beauty of wildlife and national parks with Wildlife Explorer. Explore diverse ecosystems, learn about endangered species, and plan your next adventure...
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="right-section">
                    <div className="hero-section">
                        <button className="explore-button">Start Exploring</button>
                    </div>
                    <div className="featured-section">
                        <h2 className="section-title">Featured Parks</h2>
                        <div className="park-cards">
                            <div className="park-card">
                                <div className="park-image"></div>
                                <h3>Manas National Park</h3>
                                <p>Assam, India</p>
                                <button className="action-button">Explore</button>
                            </div>
                            <div className="park-card">
                                <div className="park-image"></div>
                                <h3>Kaziranga National Park</h3>
                                <p>Assam, India</p>
                                <button className="action-button">Explore</button>
                            </div>
                            <div className="park-card">
                                <div className="park-image"></div>
                                <h3>Jim Corbett National Park</h3>
                                <p>Uttarakhand, India</p>
                                <button className="action-button">Explore</button>
                            </div>
                        </div>
                    </div>
                    <div className="featured-section">
                        <h2 className="section-title">Featured Wildlife</h2>
                        <div className="wildlife-cards">
                            <div className="wildlife-card">
                                <div className="wildlife-image"></div>
                                <h3>Barasingha</h3>
                                <p>Swamp Deer</p>
                                <button className="action-button">Learn More</button>
                            </div>
                            <div className="wildlife-card">
                                <div className="wildlife-image"></div>
                                <h3>Bengal Tiger</h3>
                                <p>Big Cat</p>
                                <button className="action-button">Learn More</button>
                            </div>
                            <div className="wildlife-card">
                                <div className="wildlife-image"></div>
                                <h3>Indian Elephant</h3>
                                <p>Mammal</p>
                                <button className="action-button">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;