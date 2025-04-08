// import "./index.css";

// const Sidebar = () => {
//     return (
//         <>
//             <div className="sidebar-icons">
//                 <div className="icon">🐾</div>
//                 <div className="icon">🌿</div>
//                 <div className="icon">📍</div>
//                 <div className="icon">📷</div>
//                 <div className="icon last-icon">≡</div>
//             </div>
//         </>
//     );
// };

// export default Sidebar;


import React, { useState } from 'react';
import './index.css';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false); // State for mobile sidebar toggle

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar-icons ${isOpen ? 'open' : ''}`}>
            <div className="icon" aria-label="Wildlife">
                🐾
                <span className="tooltip">Wildlife</span>
            </div>
            <div className="icon" aria-label="Explore Parks">
                🌿
                <span className="tooltip">Explore Parks</span>
            </div>
            <div className="icon" aria-label="Map">
                📍
                <span className="tooltip">Map</span>
            </div>
            <div className="icon" aria-label="Camera">
                📷
                <span className="tooltip">Camera</span>
            </div>
            <div className="icon last-icon" aria-label="Menu" onClick={toggleSidebar}>
                ≡
                <span className="tooltip">Menu</span>
            </div>
        </div>
    );
}

export default Sidebar;