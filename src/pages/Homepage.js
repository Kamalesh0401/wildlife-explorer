// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import './HomePage.css';

// function HomePage() {

//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };
//     return (
//         <div className="homepage-container">
//             <div className="body-content">
//                 <Sidebar />
//                 <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
//                     <div className="header">
//                         <h1 className="header-text">WILDLIFE EXPLORER</h1>
//                         <p className="tagline">Discover Nature’s Wonders</p>
//                     </div>
//                     <div className="center-main-content">
//                         <div className="sidebar-content">
//                             <div className="intro-section">
//                                 <h3 className="section-title">WELCOME</h3>
//                                 <p className="description">
//                                     Discover the beauty of wildlife and national parks with Wildlife Explorer. Explore diverse ecosystems, learn about endangered species, and plan your next adventure...
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="right-section">
//                             <div className="hero-section">
//                                 <button className="explore-button">Start Exploring</button>
//                             </div>
//                             <div className="featured-section">
//                                 <h2 className="section-title">Featured Parks</h2>
//                                 <div className="park-cards">
//                                     <div className="park-card">
//                                         <div className="park-image"></div>
//                                         <h3>Manas National Park</h3>
//                                         <p>Assam, India</p>
//                                         <button className="action-button">Explore</button>
//                                     </div>
//                                     <div className="park-card">
//                                         <div className="park-image"></div>
//                                         <h3>Kaziranga National Park</h3>
//                                         <p>Assam, India</p>
//                                         <button className="action-button">Explore</button>
//                                     </div>
//                                     <div className="park-card">
//                                         <div className="park-image"></div>
//                                         <h3>Jim Corbett National Park</h3>
//                                         <p>Uttarakhand, India</p>
//                                         <button className="action-button">Explore</button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="featured-section">
//                                 <h2 className="section-title">Featured Wildlife</h2>
//                                 <div className="wildlife-cards">
//                                     <div className="wildlife-card">
//                                         <div className="wildlife-image"></div>
//                                         <h3>Barasingha</h3>
//                                         <p>Swamp Deer</p>
//                                         <button className="action-button">Learn More</button>
//                                     </div>
//                                     <div className="wildlife-card">
//                                         <div className="wildlife-image"></div>
//                                         <h3>Bengal Tiger</h3>
//                                         <p>Big Cat</p>
//                                         <button className="action-button">Learn More</button>
//                                     </div>
//                                     <div className="wildlife-card">
//                                         <div className="wildlife-image"></div>
//                                         <h3>Indian Elephant</h3>
//                                         <p>Mammal</p>
//                                         <button className="action-button">Learn More</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default HomePage;

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './HomePage.css';

function HomePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="homepage-container">
            <div className="body-content">
                <Sidebar />
                <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                    <div className="header">
                        <h1 className="header-text">WILDLIFE EXPLORER</h1>
                        <p className="tagline">Discover Nature’s Wonders</p>
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
                            <div className="intro-section">
                                <h3 className="section-title">WELCOME</h3>
                                <p className="description">
                                    Discover the beauty of wildlife and national parks with Wildlife Explorer. Explore diverse ecosystems, learn about endangered species, and plan your next adventure...
                                </p>
                            </div>
                        </div>
                        <div className="right-section">
                            <div className="hero-section">
                                <div className="hero-overlay">
                                    <button className="explore-button" aria-label="Start Exploring">
                                        Start Exploring
                                    </button>
                                </div>
                            </div>
                            <div className="featured-section">
                                <h2 className="section-title">Featured Parks</h2>
                                <div className="park-cards">
                                    <div className="park-card">
                                        <div className="park-image"></div>
                                        <h3>Manas National Park</h3>
                                        <p>Assam, India</p>
                                        <button className="action-button" aria-label="Explore Manas National Park">
                                            Explore
                                        </button>
                                    </div>
                                    <div className="park-card">
                                        <div className="park-image"></div>
                                        <h3>Kaziranga National Park</h3>
                                        <p>Assam, India</p>
                                        <button className="action-button" aria-label="Explore Kaziranga National Park">
                                            Explore
                                        </button>
                                    </div>
                                    <div className="park-card">
                                        <div className="park-image"></div>
                                        <h3>Jim Corbett National Park</h3>
                                        <p>Uttarakhand, India</p>
                                        <button className="action-button" aria-label="Explore Jim Corbett National Park">
                                            Explore
                                        </button>
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
                                        <button className="action-button" aria-label="Learn More about Barasingha">
                                            Learn More
                                        </button>
                                    </div>
                                    <div className="wildlife-card">
                                        <div className="wildlife-image"></div>
                                        <h3>Bengal Tiger</h3>
                                        <p>Big Cat</p>
                                        <button className="action-button" aria-label="Learn More about Bengal Tiger">
                                            Learn More
                                        </button>
                                    </div>
                                    <div className="wildlife-card">
                                        <div className="wildlife-image"></div>
                                        <h3>Indian Elephant</h3>
                                        <p>Mammal</p>
                                        <button className="action-button" aria-label="Learn More about Indian Elephant">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;