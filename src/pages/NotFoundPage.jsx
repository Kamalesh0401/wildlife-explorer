// import React, { useState } from 'react';
// import { Helmet } from 'react-helmet-async';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
// import Footer from '../components/FooterAdvance';
// import Loader from '../components/Loader';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './NotFoundPage.css';

// const NotFoundPage = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [isLoading, setIsLoading] = useState(true);
//     const navigate = useNavigate();

//     // Simulate loading to match other pages
//     React.useEffect(() => {
//         AOS.init({ duration: 1000, easing: 'ease-in-out' });
//         const timer = setTimeout(() => setIsLoading(false), 500); // Simulate load
//         return () => clearTimeout(timer);
//     }, []);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     const handleRedirect = (path) => {
//         setIsLoading(true);
//         setTimeout(() => navigate(path), 500); // Simulate transition
//     };

//     return (
//         <>
//             {isLoading && <Loader />}
//             <div className="wd-notfound-container">
//                 <Helmet>
//                     <title>404 - Page Not Found | Wildlife Explorer</title>
//                     <meta
//                         name="description"
//                         content="The page you are looking for does not exist. Explore our wildlife, national parks, and forests at Wildlife Explorer."
//                     />
//                     <meta name="keywords" content="404, not found, wildlife, national parks, forests, exploration" />
//                     <meta name="author" content="Wildlife Explorer Team" />
//                     <meta property="og:title" content="404 - Page Not Found | Wildlife Explorer" />
//                     <meta
//                         property="og:description"
//                         content="The page you are looking for does not exist. Discover wildlife and national parks with Wildlife Explorer."
//                     />
//                     <meta
//                         property="og:image"
//                         content="https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745430379/roe-deer.jpg"
//                     />
//                     <meta property="og:url" content="https://www.wildlifeexplorer.com/404" />
//                     <meta property="og:type" content="website" />
//                     <meta name="twitter:card" content="summary_large_image" />
//                     <meta name="twitter:title" content="404 - Page Not Found | Wildlife Explorer" />
//                     <meta
//                         name="twitter:description"
//                         content="The page you are looking for does not exist. Explore wildlife and national parks with Wildlife Explorer."
//                     />
//                     <meta
//                         name="twitter:image"
//                         content="https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745430379/roe-deer.jpg"
//                     />
//                 </Helmet>
//                 <div className="wd-notfound-body-content">
//                     {/* <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}
//                     <div className={`wd-notfound-main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
//                         <div className="wd-notfound-header" data-aos="fade-down">
//                             <h1 className="wd-notfound-header-text">404 - Lost in the Wild</h1>
//                             {/* <button
//                                 className="wd-notfound-mobile-menu"
//                                 onClick={toggleSidebar}
//                                 aria-label="Toggle Sidebar"
//                             >
//                                 ≡
//                             </button> */}
//                         </div>
//                         <div className="wd-notfound-center-main-content" data-aos="fade-up">
//                             <div className="wd-notfound-content">
//                                 <h2 className="wd-notfound-title">Oops! Page Not Found</h2>
//                                 <p className="wd-notfound-message">
//                                     It looks like you've wandered off the trail. The page you're looking for doesn't exist, but there's plenty more to explore in the wild!
//                                 </p>
//                                 <div className="wd-notfound-cta">
//                                     <button
//                                         className="wd-notfound-action-button"
//                                         onClick={() => handleRedirect('/')}
//                                         aria-label="Go to Homepage"
//                                     >
//                                         Back to Homepage
//                                     </button>
//                                     <button
//                                         className="wd-notfound-action-button secondary"
//                                         onClick={() => handleRedirect('/wildlife')}
//                                         aria-label="Explore Wildlife"
//                                     >
//                                         Explore Wildlife
//                                     </button>
//                                 </div>
//                                 {/* <div className="wd-notfound-image" data-aos="zoom-in">
//                                     <img
//                                         src="https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745430426/lion_ogishm.jpg"
//                                         alt="Wildlife Explorer 404"
//                                         className="wd-notfound-img"
//                                     />
//                                 </div> */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <Footer />
//             </div>
//         </>
//     );
// };

// export default NotFoundPage;


// import React, { useEffect, useRef } from 'react';
// import { Helmet } from 'react-helmet-async';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Loader from '../components/Loader';
// import './NotFoundPage.css';

// const NotFoundPage = () => {
//     const navigate = useNavigate();
//     const [isLoading, setIsLoading] = React.useState(true);
//     const trailRef = useRef(null);
//     const mousePos = useRef({ x: 0, y: 0 });
//     const trailPos = useRef({ x: 0, y: 0 });

//     // Simulate loading
//     useEffect(() => {
//         const timer = setTimeout(() => setIsLoading(false), 800);
//         return () => clearTimeout(timer);
//     }, []);

//     // Mouse trail effect
//     useEffect(() => {
//         const trail = trailRef.current;
//         const animateTrail = () => {
//             trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.1;
//             trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.1;
//             trail.style.left = `${trailPos.current.x - 10}px`;
//             trail.style.top = `${trailPos.current.y - 10}px`;
//             trail.style.opacity = '0.6';
//             requestAnimationFrame(animateTrail);
//         };

//         const handleMouseMove = (e) => {
//             mousePos.current.x = e.clientX;
//             mousePos.current.y = e.clientY;
//         };

//         const handleMouseLeave = () => {
//             trail.style.opacity = '0';
//         };

//         const handleMouseEnter = () => {
//             trail.style.opacity = '0.6';
//         };

//         // Parallax effect for leaves
//         const handleParallax = (e) => {
//             const leaves = document.querySelectorAll('.floating-leaf');
//             const x = e.clientX / window.innerWidth;
//             const y = e.clientY / window.innerHeight;
//             leaves.forEach((leaf, index) => {
//                 const speed = (index + 1) * 0.5;
//                 const xMove = (x - 0.5) * speed * 20;
//                 const yMove = (y - 0.5) * speed * 20;
//                 leaf.style.transform = `translate(${xMove}px, ${yMove}px) rotate(${xMove * 0.1}deg)`;
//             });
//         };

//         document.addEventListener('mousemove', handleMouseMove);
//         document.addEventListener('mousemove', handleParallax);
//         document.addEventListener('mouseleave', handleMouseLeave);
//         document.addEventListener('mouseenter', handleMouseEnter);
//         animateTrail();

//         return () => {
//             document.removeEventListener('mousemove', handleMouseMove);
//             document.removeEventListener('mousemove', handleParallax);
//             document.removeEventListener('mouseleave', handleMouseLeave);
//             document.removeEventListener('mouseenter', handleMouseEnter);
//         };
//     }, []);

//     // Counter animation
//     const animateCounter = (element) => {
//         const counter = element.querySelector('.stat-number');
//         const target = parseInt(counter.getAttribute('data-target'));
//         const increment = target / 50;
//         let current = 0;

//         const updateCounter = () => {
//             if (current < target) {
//                 current += increment;
//                 counter.textContent = Math.ceil(current);
//                 requestAnimationFrame(updateCounter);
//             } else {
//                 counter.textContent = target;
//             }
//         };
//         updateCounter();
//     };

//     // Auto-animate counters on load
//     useEffect(() => {
//         setTimeout(() => {
//             document.querySelectorAll('.stat-item').forEach((item, index) => {
//                 setTimeout(() => animateCounter(item), index * 200);
//             });
//         }, 1500);
//     }, []);

//     // Navigation handlers
//     const goHome = () => {
//         setIsLoading(true);
//         setTimeout(() => navigate('/'), 500);
//     };

//     const exploreWildlife = () => {
//         setIsLoading(true);
//         setTimeout(() => navigate('/wildlife'), 500);
//     };

//     // Animation variants
//     const buttonVariants = {
//         hover: { scale: 1.1, boxShadow: "0px 8px 25px rgba(16, 185, 129, 0.4)" },
//         tap: { scale: 0.95 }
//     };

//     const iconVariants = {
//         hover: { scale: 1.2, rotate: 10, filter: "grayscale(0) hue-rotate(0deg)" },
//         tap: { scale: 1.5, rotate: 360, filter: "hue-rotate(180deg)" }
//     };

//     const errorCodeVariants = {
//         hover: { scale: 1.05, rotate: 360, color: "#34d399" },
//         initial: { scale: 1, rotate: 0, color: "#10b981" }
//     };

//     return (
//         <>
//             {isLoading && <Loader />}
//             <Helmet>
//                 <title>404 - Lost in the Wild | Wildlife Explorer</title>
//                 <meta
//                     name="description"
//                     content="Oops! The page you're looking for has migrated to a different habitat. Explore wildlife, national parks, and forests at Wildlife Explorer."
//                 />
//                 <meta name="keywords" content="404, not found, wildlife, national parks, forests, adventure" />
//                 <meta name="author" content="Wildlife Explorer Team" />
//                 <meta property="og:title" content="404 - Lost in the Wild | Wildlife Explorer" />
//                 <meta
//                     property="og:description"
//                     content="The page you're looking for is missing. Join the adventure and explore wildlife with Wildlife Explorer."
//                 />
//                 <meta
//                     property="og:image"
//                     content="https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745430379/roe-deer.jpg"
//                 />
//                 <meta property="og:url" content="https://www.wildlifeexplorer.com/404" />
//                 <meta property="og:type" content="website" />
//                 <meta name="twitter:card" content="summary_large_image" />
//                 <meta name="twitter:title" content="404 - Lost in the Wild | Wildlife Explorer" />
//                 <meta
//                     name="twitter:description"
//                     content="The page you're looking for is missing. Explore wildlife and national parks with Wildlife Explorer."
//                 />
//                 <meta
//                     name="twitter:image"
//                     content="https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745430379/roe-deer.jpg"
//                 />
//             </Helmet>
//             <div className="wd-notfound-container">
//                 <div className="background-animation">
//                     <div className="floating-leaf">🍃</div>
//                     <div className="floating-leaf">🌿</div>
//                     <div className="floating-leaf">🍃</div>
//                     <div className="floating-leaf">🌱</div>
//                 </div>
//                 <div className="wd-notfound-body-content">
//                     <motion.div
//                         className="wd-notfound-main-content"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <motion.div
//                             className="wd-notfound-header loading"
//                             initial={{ opacity: 0, y: -50 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 1 }}
//                         >
//                             <h1 className="wd-notfound-header-text">Lost in the Wild</h1>
//                             <p className="subtitle">Wildlife Explorer - 404 Adventure</p>
//                         </motion.div>
//                         <motion.div
//                             className="wd-notfound-content loading"
//                             initial={{ opacity: 0, y: 50 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 1, delay: 0.3 }}
//                         >
//                             <motion.div
//                                 className="error-code"
//                                 variants={errorCodeVariants}
//                                 initial="initial"
//                                 whileHover="hover"
//                                 transition={{ duration: 0.6 }}
//                             >
//                                 404
//                             </motion.div>
//                             <h2 className="wd-notfound-title">Oops! You've Wandered Off the Trail</h2>
//                             <p className="wd-notfound-message">
//                                 It looks like you've discovered an uncharted territory! The page you're looking for has migrated to a different habitat. But don't worry – there's an entire ecosystem of amazing wildlife content waiting for you to explore.
//                             </p>
//                             <div className="wd-notfound-cta">
//                                 <motion.button
//                                     className="wd-notfound-action-button"
//                                     onClick={goHome}
//                                     variants={buttonVariants}
//                                     whileHover="hover"
//                                     whileTap="tap"
//                                     aria-label="Go to Homepage"
//                                 >
//                                     {/* 🏠 Return to Base Camp */}
//                                     <i className="fas fa-home"></i> Return to Base Camp
//                                 </motion.button>
//                                 <motion.button
//                                     className="wd-notfound-action-button secondary"
//                                     onClick={exploreWildlife}
//                                     variants={buttonVariants}
//                                     whileHover="hover"
//                                     whileTap="tap"
//                                     aria-label="Explore Wildlife"
//                                 >
//                                     {/* 🦁 Explore Wildlife */}
//                                     <i className="fas fa-paw"></i> Explore Wildlife
//                                 </motion.button>
//                             </div>
//                             <div className="wildlife-icons">
//                                 {['🦁', '🐘', '🐅', '🦅', '🐺', '🐻'].map((icon, index) => (
//                                     <motion.div
//                                         key={index}
//                                         className="wildlife-icon"
//                                         variants={iconVariants}
//                                         whileHover="hover"
//                                         whileTap="tap"
//                                         title={['Lions', 'Elephants', 'Tigers', 'Eagles', 'Wolves', 'Bears'][index]}
//                                     >
//                                         {icon}
//                                     </motion.div>
//                                 ))}
//                             </div>
//                             <div className="stats-container">
//                                 {[
//                                     { target: 150, label: 'Species Documented' },
//                                     { target: 25, label: 'National Parks' },
//                                     { target: 500, label: 'Photos Captured' }
//                                 ].map((stat, index) => (
//                                     <div
//                                         key={index}
//                                         className="stat-item"
//                                         onClick={(e) => animateCounter(e.currentTarget)}
//                                     >
//                                         <span className="stat-number" data-target={stat.target}>0</span>
//                                         <div className="stat-label">{stat.label}</div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </motion.div>
//                     </motion.div>
//                 </div>
//                 <div className="mouse-trail" ref={trailRef}></div>
//             </div>
//         </>
//     );
// };

// export default NotFoundPage;

import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from '../components/Loader';
import './NotFoundPage.css';

const NotFoundPage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = React.useState(true);
    const trailRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const trailPos = useRef({ x: 0, y: 0 });

    // Simulate loading
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    // Mouse trail effect
    useEffect(() => {
        const trail = trailRef.current;
        const animateTrail = () => {
            trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.1;
            trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.1;
            trail.style.left = `${trailPos.current.x - 10}px`;
            trail.style.top = `${trailPos.current.y - 10}px`;
            trail.style.opacity = '0.6';
            requestAnimationFrame(animateTrail);
        };

        const handleMouseMove = (e) => {
            mousePos.current.x = e.clientX;
            mousePos.current.y = e.clientY;
        };

        const handleMouseLeave = () => {
            trail.style.opacity = '0';
        };

        const handleMouseEnter = () => {
            trail.style.opacity = '0.6';
        };

        // Parallax effect for leaves
        const handleParallax = (e) => {
            const leaves = document.querySelectorAll('.floating-leaf');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            leaves.forEach((leaf, index) => {
                const speed = (index + 1) * 0.5;
                const xMove = (x - 0.5) * speed * 20;
                const yMove = (y - 0.5) * speed * 20;
                leaf.style.transform = `translate(${xMove}px, ${yMove}px) rotate(${xMove * 0.1}deg)`;
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousemove', handleParallax);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        animateTrail();

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousemove', handleParallax);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    // Counter animation
    const animateCounter = (element) => {
        const counter = element.querySelector('.stat-number');
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 50;
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        updateCounter();
    };

    // Auto-animate counters on load
    useEffect(() => {
        setTimeout(() => {
            document.querySelectorAll('.stat-item').forEach((item, index) => {
                setTimeout(() => animateCounter(item), index * 200);
            });
        }, 1500);
    }, []);

    // Navigation handlers
    const goHome = () => {
        setIsLoading(true);
        setTimeout(() => navigate('/'), 500);
    };

    const exploreWildlife = () => {
        setIsLoading(true);
        setTimeout(() => navigate('/wildlife'), 500);
    };

    // Animation variants
    const buttonVariants = {
        hover: { scale: 1.1, boxShadow: "0px 8px 25px rgba(16, 185, 129, 0.4)" },
        tap: { scale: 0.95 }
    };

    const iconVariants = {
        hover: { scale: 1.2, rotate: 10, filter: "grayscale(0) hue-rotate(0deg)" },
        tap: { scale: 1.5, rotate: 360, filter: "hue-rotate(180deg)" }
    };

    const errorCodeVariants = {
        hover: { scale: 1.05, rotate: 360, color: "#34d399" },
        initial: { scale: 1, rotate: 0, color: "#10b981" }
    };

    return (
        <>
            {isLoading && <Loader />}
            <Helmet>
                <title>404 - Lost in the Wild | Wildlife Explorer</title>
                <meta
                    name="description"
                    content="Oops! The page you're looking for has migrated to a different habitat. Explore wildlife, national parks, and forests at Wildlife Explorer."
                />
                <meta name="keywords" content="404, not found, wildlife, national parks, forests, adventure" />
                <meta name="author" content="Wildlife Explorer Team" />
                <meta property="og:title" content="404 - Lost in the Wild | Wildlife Explorer" />
                <meta
                    property="og:description"
                    content="The page you're looking for is missing. Join the adventure and explore wildlife with Wildlife Explorer."
                />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745430379/roe-deer.jpg"
                />
                <meta property="og:url" content="https://www.wildlifeexplorer.com/404" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="404 - Lost in the Wild | Wildlife Explorer" />
                <meta
                    name="twitter:description"
                    content="The page you're looking for is missing. Explore wildlife and national parks with Wildlife Explorer."
                />
                <meta
                    name="twitter:image"
                    content="https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745430379/roe-deer.jpg"
                />
            </Helmet>
            <div className="wd-notfound-container">
                <div className="background-animation">
                    <div className="floating-leaf">🍃</div>
                    <div className="floating-leaf">🌿</div>
                    <div className="floating-leaf">🍃</div>
                    <div className="floating-leaf">🌱</div>
                </div>
                <div className="wd-notfound-body-content">
                    <motion.div
                        className="wd-notfound-main-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className="wd-notfound-header loading"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className="wd-notfound-header-text">Lost in the Wild</h1>
                            <p className="subtitle">Wildlife Explorer - 404 Adventure</p>
                        </motion.div>
                        <motion.div
                            className="wd-notfound-content loading"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <motion.div
                                className="error-code"
                                variants={errorCodeVariants}
                                initial="initial"
                                whileHover="hover"
                                transition={{ duration: 0.6 }}
                            >
                                404
                            </motion.div>
                            <h2 className="wd-notfound-title">Oops! You've Wandered Off the Trail</h2>
                            <p className="wd-notfound-message">
                                It looks like you've discovered an uncharted territory! The page you're looking for has migrated to a different habitat. But don't worry – there's an entire ecosystem of amazing wildlife content waiting for you to explore.
                            </p>
                            <div className="wd-notfound-cta">
                                <motion.button
                                    className="wd-notfound-action-button"
                                    onClick={goHome}
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    aria-label="Go to Homepage"
                                >
                                    🏠 Return to Base Camp
                                </motion.button>
                                <motion.button
                                    className="wd-notfound-action-button secondary"
                                    onClick={exploreWildlife}
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    aria-label="Explore Wildlife"
                                >
                                    🦁 Explore Wildlife
                                </motion.button>
                            </div>
                            <div className="wildlife-icons">
                                {['🦁', '🐘', '🐅', '🦅', '🐺', '🐻'].map((icon, index) => (
                                    <motion.div
                                        key={index}
                                        className="wildlife-icon"
                                        variants={iconVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                        title={['Lions', 'Elephants', 'Tigers', 'Eagles', 'Wolves', 'Bears'][index]}
                                    >
                                        {icon}
                                    </motion.div>
                                ))}
                            </div>
                            <div className="stats-container">
                                {[
                                    { target: 150, label: 'Species Documented' },
                                    { target: 25, label: 'National Parks' },
                                    { target: 500, label: 'Photos Captured' }
                                ].map((stat, index) => (
                                    <div
                                        key={index}
                                        className="stat-item"
                                        onClick={(e) => animateCounter(e.currentTarget)}
                                    >
                                        <span className="stat-number" data-target={stat.target}>0</span>
                                        <div className="stat-label">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
                <div className="mouse-trail" ref={trailRef}></div>
            </div>
        </>
    );
};

export default NotFoundPage;