import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/FooterAdvance';
import Loader from '../components/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './NotFoundPage.css';

const NotFoundPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    // Simulate loading to match other pages
    React.useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out' });
        const timer = setTimeout(() => setIsLoading(false), 500); // Simulate load
        return () => clearTimeout(timer);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleRedirect = (path) => {
        setIsLoading(true);
        setTimeout(() => navigate(path), 500); // Simulate transition
    };

    return (
        <>
            {isLoading && <Loader />}
            <div className="wd-notfound-container">
                <Helmet>
                    <title>404 - Page Not Found | Wildlife Explorer</title>
                    <meta
                        name="description"
                        content="The page you are looking for does not exist. Explore our wildlife, national parks, and forests at Wildlife Explorer."
                    />
                    <meta name="keywords" content="404, not found, wildlife, national parks, forests, exploration" />
                    <meta name="author" content="Wildlife Explorer Team" />
                    <meta property="og:title" content="404 - Page Not Found | Wildlife Explorer" />
                    <meta
                        property="og:description"
                        content="The page you are looking for does not exist. Discover wildlife and national parks with Wildlife Explorer."
                    />
                    <meta
                        property="og:image"
                        content="https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745430379/roe-deer.jpg"
                    />
                    <meta property="og:url" content="https://www.wildlifeexplorer.com/404" />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="404 - Page Not Found | Wildlife Explorer" />
                    <meta
                        name="twitter:description"
                        content="The page you are looking for does not exist. Explore wildlife and national parks with Wildlife Explorer."
                    />
                    <meta
                        name="twitter:image"
                        content="https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745430379/roe-deer.jpg"
                    />
                </Helmet>
                <div className="wd-notfound-body-content">
                    {/* <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}
                    <div className={`wd-notfound-main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                        <div className="wd-notfound-header" data-aos="fade-down">
                            <h1 className="wd-notfound-header-text">404 - Lost in the Wild</h1>
                            <button
                                className="wd-notfound-mobile-menu"
                                onClick={toggleSidebar}
                                aria-label="Toggle Sidebar"
                            >
                                ≡
                            </button>
                        </div>
                        <div className="wd-notfound-center-main-content" data-aos="fade-up">
                            <div className="wd-notfound-content">
                                <h2 className="wd-notfound-title">Oops! Page Not Found</h2>
                                <p className="wd-notfound-message">
                                    It looks like you've wandered off the trail. The page you're looking for doesn't exist, but there's plenty more to explore in the wild!
                                </p>
                                <div className="wd-notfound-cta">
                                    <button
                                        className="wd-notfound-action-button"
                                        onClick={() => handleRedirect('/')}
                                        aria-label="Go to Homepage"
                                    >
                                        Back to Homepage
                                    </button>
                                    <button
                                        className="wd-notfound-action-button secondary"
                                        onClick={() => handleRedirect('/wildlife')}
                                        aria-label="Explore Wildlife"
                                    >
                                        Explore Wildlife
                                    </button>
                                </div>
                                <div className="wd-notfound-image" data-aos="zoom-in">
                                    <img
                                        src="https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745430426/lion_ogishm.jpg"
                                        alt="Wildlife Explorer 404"
                                        className="wd-notfound-img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default NotFoundPage;