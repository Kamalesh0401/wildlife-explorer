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
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar-icons ${isOpen ? 'open' : ''}`}>
            <div className="icon">
                <span className="tooltip"></span>
            </div>
            <div className="icon" aria-label="Home" onClick={() => navigate("/")}>
                🏠
                <span className="tooltip">Home</span>
            </div>
            <div className="icon" aria-label="Explore Parks" onClick={() => navigate("/explorepark")}>
                🌳
                <span className="tooltip">Explore Parks</span>
            </div>
            <div className="icon" aria-label="Wildlife" onClick={() => navigate("/wildlife")}>
                🐾
                <span className="tooltip">Wildlife</span>
            </div>
            <div className="icon" aria-label="About" onClick={() => navigate("/aboutus")}>
                ℹ️
                <span className="tooltip">About</span>
            </div>
            <div className="icon" aria-label="Contact" onClick={() => navigate("/contactus")}>
                📧
                <span className="tooltip">Contact</span>
            </div>

            <div className="icon last-icon" aria-label="Menu" onClick={toggleSidebar}>
                ≡
                <span className="tooltip">Menu</span>
            </div>
        </div>
    );
}

export default Sidebar;

{/* <div className="sidebar-icons">
//                     <div className="icon">🏠</div>
//                     <div className="icon">🌳🌿</div>
//                     <div className="icon">🐾</div>
//                     <div className="icon">ℹ️ 📍</div>
         <div className="icon" aria-label="Camera">
                📷
                <span className="tooltip">Camera</span>
            </div>
//                     <div className="icon last-icon">📧</div>
//                 </div> */}