// import React from 'react';
// import Sidebar from '../components/Sidebar';
// import './WildlifePage.css';

// function WildlifePage() {
//     return (
//         <div className="wildlife-container">
//             <div className="body-content">
//                 <div className="">
//                     {/* Sidebar Icons */}
//                     <div className="sidebar-icons">
//                         <div className="icon">🐾</div>
//                         <div className="icon">🌿</div>
//                         <div className="icon">📍</div>
//                         <div className="icon">📷</div>
//                         <div className="icon last-icon">≡</div>
//                     </div>
//                 </div>
//                 <div className="main-content">
//                     <div className="header">
//                         <h1 className="header-text">MANAS NATIONAL PARK, ASSAM</h1>
//                         <button className="close-button">✕</button>
//                     </div>
//                     <div className="center-main-content">
//                         <div className="sidebar">
//                             <div className="sidebar-content">
//                                 <div className="map-section">
//                                     <h3 className="section-title">YOU ARE HERE</h3>
//                                     <div className="map-placeholder">
//                                         <p className="placeholder-text">Map Placeholder</p>
//                                     </div>
//                                     <p className="description">
//                                         Manas National Park of Assam is one of the only 2 localities in Assam where Barasingha is swamp deer appear. The sanctuary is also house other species of mammals including Asian water buffaloes, hog deer, barking deer and chital deers. The barasingha, also called swamp deer, is a deer species distributed in the Indian subcontinent...{' '}
//                                         <a href="#" className="read-more">READ MORE</a>
//                                     </p>
//                                 </div>
//                                 <div className="spot-nearby">
//                                     <h3 className="section-title">SPOT NEARBY</h3>
//                                     <div className="animal-images">
//                                         <div className="animal-image"></div>
//                                         <div className="animal-image"></div>
//                                         <div className="animal-image"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="right-section">
//                             <div className="main-image"></div>
//                             <div className="animal-info">
//                                 <h2 className="animal-name">BARASINGHA</h2>
//                                 <p className="animal-description">
//                                     The barasingha, also called swamp deer, is a deer species distributed in the Indian subcontinent. Populations in northern and central India are fragmented, and two isolated populations occur in southwestern...
//                                 </p>
//                                 <div className="hearts">
//                                     <span className="heart">❤️</span>
//                                     <span className="heart">❤️</span>
//                                     <span className="heart">❤️</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default WildlifePage;

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './WildlifePage.css';

function WildlifePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="wildlife-container">
            <div className="body-content">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                    <div className="header">
                        <h1 className="header-text">MANAS NATIONAL PARK, ASSAM</h1>
                        {/* <button
                            className="close-button mobile-menu"
                            onClick={toggleSidebar}
                            aria-label="Toggle Sidebar"
                        >
                            ≡
                        </button> */}
                        <button className="close-button desktop-close" aria-label="Close">
                            ✕
                        </button>
                    </div>
                    <div className="center-main-content">
                        <div className="sidebar-content">
                            <div className="map-section">
                                <h3 className="section-title">YOU ARE HERE</h3>
                                <div className="map-placeholder">
                                    <p className="placeholder-text">Map Placeholder</p>
                                </div>
                                <p className="description">
                                    Manas National Park of Assam is one of the only 2 localities in Assam where Barasingha is swamp deer appear. The sanctuary is also house other species of mammals including Asian water buffaloes, hog deer, barking deer and chital deers. The barasingha, also called swamp deer, is a deer species distributed in the Indian subcontinent...{' '}
                                    <a href="#" className="read-more">
                                        READ MORE
                                    </a>
                                </p>
                            </div>
                            <div className="spot-nearby">
                                <h3 className="section-title">SPOT NEARBY</h3>
                                <div className="animal-images">
                                    <div className="animal-image"></div>
                                    <div className="animal-image"></div>
                                    <div className="animal-image"></div>
                                </div>
                            </div>
                        </div>
                        <div className="right-section">
                            <div className="main-image"></div>
                            <div className="animal-info">
                                <h2 className="animal-name">BARASINGHA</h2>
                                <p className="animal-description">
                                    The barasingha, also called swamp deer, is a deer species distributed in the Indian subcontinent. Populations in northern and central India are fragmented, and two isolated populations occur in southwestern...
                                </p>
                                <div className="hearts">
                                    <span className="heart">❤️</span>
                                    <span className="heart">❤️</span>
                                    <span className="heart">❤️</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WildlifePage;