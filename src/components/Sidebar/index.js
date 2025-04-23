import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`wd-sidebar-icons ${isOpen ? 'wd-sidebar-open' : ''}`}>
            <div className="wd-sidebar-icon">
                <span className="wd-sidebar-tooltip"></span>
            </div>
            <div
                className="wd-sidebar-icon"
                aria-label="Home"
                onClick={() => navigate("/")}
            >
                <i className="fas fa-home"></i>
                <span className="wd-sidebar-tooltip">Home</span>
            </div>
            <div
                className="wd-sidebar-icon"
                aria-label="Explore Parks"
                onClick={() => navigate("/explorepark")}
            >
                <i className="fas fa-mountain"></i>
                <span className="wd-sidebar-tooltip">Explore Parks</span>
            </div>
            <div
                className="wd-sidebar-icon"
                aria-label="Explore Forests"
                onClick={() => navigate("/forests")}
            >
                <i className="fas fa-tree"></i>
                <span className="wd-sidebar-tooltip">Explore Forests</span>
            </div>
            <div
                className="wd-sidebar-icon"
                aria-label="Wildlife"
                onClick={() => navigate("/wildlife")}
            >
                <i className="fas fa-paw"></i>
                <span className="wd-sidebar-tooltip">Wildlife</span>
            </div>
            <div
                className="wd-sidebar-icon"
                aria-label="About"
                onClick={() => navigate("/aboutus")}
            >
                <i className="fas fa-info-circle"></i>
                <span className="wd-sidebar-tooltip">About</span>
            </div>
            <div
                className="wd-sidebar-icon"
                aria-label="Contact"
                onClick={() => navigate("/contactus")}
            >
                <i className="fas fa-envelope"></i>
                <span className="wd-sidebar-tooltip">Contact</span>
            </div>
            <div
                className="wd-sidebar-icon wd-sidebar-last-icon"
                aria-label="Menu"
                onClick={toggleSidebar}
            >
                <i className="fas fa-bars"></i>
                <span className="wd-sidebar-tooltip">Menu</span>
            </div>
        </div>
    );
}

export default Sidebar;