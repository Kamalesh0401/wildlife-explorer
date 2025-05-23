import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/wildlife_explorer.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Close sidebar on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isOpen &&
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div
            className={`wd-sidebar-icons ${isOpen ? 'wd-sidebar-open' : ''}`}
            ref={sidebarRef}
        >
            <div
                className="wd-sidebar-icon"
                aria-label="Home"
                onClick={() => navigate("/")}
            >
                <img src={logo} alt="Wildlife Explorer Logo" className="footer-logo-image" />
            </div>
            <div
                className="wd-sidebar-icon"
                aria-label="Explore Parks"
                onClick={() => navigate("/explorepark")}
            >
                <i className="fas fa-mountain"></i><br />
                {isOpen && <span className='wd-sidebar-icon-name'>Parks</span>}
                <span className="wd-sidebar-tooltip">Explore Parks</span>
            </div>
            <div
                className="wd-sidebar-icon"
                aria-label="Explore Forests"
                onClick={() => navigate("/exploreforests")}
            >
                <i className="fas fa-tree"></i><br />
                {isOpen && <span className='wd-sidebar-icon-name'>Forests</span>}
                <span className="wd-sidebar-tooltip">Explore Forests</span>
            </div>
            <div
                className="wd-sidebar-icon"
                aria-label="Wildlife"
                onClick={() => navigate("/wildlife")}
            >
                <i className="fas fa-paw"></i><br />
                {isOpen && <span className='wd-sidebar-icon-name'>Wildlife</span>}
                <span className="wd-sidebar-tooltip">Wildlife</span>
            </div>
            <div
                className="wd-sidebar-icon"
                aria-label="About"
                onClick={() => navigate("/aboutus")}
            >
                <i className="fas fa-info-circle"></i><br />
                {isOpen && <span className='wd-sidebar-icon-name'>About</span>}
                <span className="wd-sidebar-tooltip">About</span>
            </div>
            <div
                className="wd-sidebar-icon"
                aria-label="Contact"
                onClick={() => navigate("/contactus")}
            >
                <i className="fas fa-envelope"></i><br />
                {isOpen && <span className='wd-sidebar-icon-name'>Contact</span>}
                <span className="wd-sidebar-tooltip">Contact</span>
            </div>
            <div
                className="wd-sidebar-icon wd-sidebar-last-icon"
                aria-label="Menu"
                onClick={toggleSidebar}
            >
                <i className="fas fa-bars"></i><br />
                {isOpen && <span className='wd-sidebar-icon-name'>Menu</span>}
                <span className="wd-sidebar-tooltip">Menu</span>
            </div>
        </div>
    );
}

export default Sidebar;
