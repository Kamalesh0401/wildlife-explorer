// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import Footer from '../components/FooterAdvance';
// import forest from '../assets/images/forest.jpg';
// import forest2 from '../assets/images/forest2.jpg';
// import forest3 from '../assets/images/forest3.jpg';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './HomePage.css';


// function HomePage() {

//     const sliderSettings = {
//         dots: true, // Show dots for navigation
//         infinite: true, // Loop the slider
//         speed: 500, // Transition speed
//         slidesToShow: 1, // Show 1 slide at a time
//         slidesToScroll: 1, // Scroll 1 slide at a time
//         autoplay: true, // Auto-play the slider
//         autoplaySpeed: 3000, // 3 seconds per slide
//         arrows: false, // Hide arrows (we'll use dots for navigation)
//         pauseOnHover: true, // Pause autoplay on hover
//         lazyLoad: 'ondemand', //Enable lazy loading
//     };
//     const sliderImages = [
//         forest2, forest3
//     ];

//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     return (
//         <div className="homepage-container">
//             <div className="body-content mb-3">
//                 <Sidebar />
//                 <div className={`main-content`}>
//                     <div className="header">
//                         <h1 className="header-text">WILDLIFE EXPLORER</h1>
//                         <p className="tagline">Discover Nature’s Wonders</p>
//                         {/* <button
//                             className="mobile-menu"
//                             onClick={toggleSidebar}
//                             aria-label="Toggle Sidebar"
//                         >
//                             ≡
//                         </button> */}
//                     </div>
//                     <div className="center-main-content">
//                         <div className="sidebar-content">
//                             <div className="intro-section">
//                                 <h3 className="section-title">WELCOME</h3>
//                                 <p className="description">
//                                     Discover the beauty of wildlife and national parks with Wildlife Explorer, your ultimate guide to nature’s wonders. Immerse yourself in diverse ecosystems, from lush forests to sprawling wetlands, and learn about endangered species that call these habitats home. Whether you’re a nature enthusiast, a wildlife photographer, or an adventure seeker, our platform helps you explore breathtaking national parks, uncover fascinating facts about animals, and plan your next unforgettable journey into the wild. Join us in celebrating and preserving the natural world for generations to come!
//                                 </p>
//                                 <div className="mt-3 species-slider">
//                                     <Slider {...sliderSettings}>
//                                         {sliderImages.map((image, index) => (
//                                             <div key={index}>
//                                                 <img
//                                                     src={image}
//                                                     alt={`Wildlife Scene ${index + 1}`}
//                                                     className="species-image"
//                                                 />
//                                             </div>
//                                         ))}
//                                     </Slider>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="right-section">
//                             <div className="hero-section">
//                                 <div className="hero-overlay">
//                                     <button className="explore-button" aria-label="Start Exploring">
//                                         Start Exploring
//                                     </button>
//                                 </div>
//                             </div>
//                             <div className="featured-section">
//                                 <h2 className="section-title">Featured Parks</h2>
//                                 <div className="park-cards">
//                                     <div className="park-card">
//                                         <div className="park-image"></div>
//                                         <h3>Manas National Park</h3>
//                                         <p>Assam, India</p>
//                                         <button className="action-button" aria-label="Explore Manas National Park">
//                                             Explore
//                                         </button>
//                                     </div>
//                                     <div className="park-card">
//                                         <div className="park-image"></div>
//                                         <h3>Kaziranga National Park</h3>
//                                         <p>Assam, India</p>
//                                         <button className="action-button" aria-label="Explore Kaziranga National Park">
//                                             Explore
//                                         </button>
//                                     </div>
//                                     <div className="park-card">
//                                         <div className="park-image"></div>
//                                         <h3>Jim Corbett National Park</h3>
//                                         <p>Uttarakhand, India</p>
//                                         <button className="action-button" aria-label="Explore Jim Corbett National Park">
//                                             Explore
//                                         </button>
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
//                                         <button className="action-button" aria-label="Learn More about Barasingha">
//                                             Learn More
//                                         </button>
//                                     </div>
//                                     <div className="wildlife-card">
//                                         <div className="wildlife-image"></div>
//                                         <h3>Bengal Tiger</h3>
//                                         <p>Big Cat</p>
//                                         <button className="action-button" aria-label="Learn More about Bengal Tiger">
//                                             Learn More
//                                         </button>
//                                     </div>
//                                     <div className="wildlife-card">
//                                         <div className="wildlife-image"></div>
//                                         <h3>Indian Elephant</h3>
//                                         <p>Mammal</p>
//                                         <button className="action-button" aria-label="Learn More about Indian Elephant">
//                                             Learn More
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default HomePage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/FooterAdvance';
import jungle from '../assets/images/roe-deer.jpg';
import forest from '../assets/images/forest.jpg';
import forest2 from '../assets/images/forest2.jpg';
import forest3 from '../assets/images/forest3.jpg';
import tiger from '../assets/images/lion.jpg';
import elephant from '../assets/images/elephant.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomePage.css';

function HomePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: true,
        lazyLoad: 'ondemand',
    };

    const sliderImages = [forest2, forest3, jungle];

    const categories = [
        { name: 'Nature', image: forest, path: '/nature' },
        { name: 'Forest', image: forest2, path: '/forest' },
        { name: 'Wildlife', image: tiger, path: '/wildlife' },
        { name: 'Animal', image: elephant, path: '/animal' },
        { name: 'Ocean', image: forest3, path: '/ocean' },
        { name: 'Climate', image: jungle, path: '/climate' },
    ];

    const parks = [
        { name: 'Manas National Park', location: 'Assam, India', path: '/park/manas' },
        { name: 'Kaziranga National Park', location: 'Assam, India', path: '/park/kaziranga' },
        { name: 'Jim Corbett National Park', location: 'Uttarakhand, India', path: '/park/corbett' },
    ];

    const handleExplore = (path) => {
        navigate(path);
    };

    const handleCategoryClick = (path) => {
        navigate(path);
    };

    const handleParkClick = (path) => {
        navigate(path);
    };

    return (
        <div className="homepage-container">
            <div className="body-content mb-3">
                <Sidebar />
                <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                    <div className="header">
                        <h1 className="header-text">WILDLIFE EXPLORER</h1>
                        <p className="tagline">Discover Nature’s Wonders</p>
                    </div>
                    <div className="center-main-content mb-3">
                        <div className="sidebar-content">
                            <div className="intro-section">
                                <h3 className="section-title">WELCOME</h3>
                                <p className="description">
                                    Explore the beauty of wildlife and national parks with Wildlife Explorer, your ultimate guide to nature’s wonders. Immerse yourself in diverse ecosystems, from lush jungles to sprawling wetlands, and learn about endangered species that call these habitats home. Whether you’re a nature enthusiast, wildlife photographer, or adventure seeker, our platform helps you explore breathtaking parks, uncover fascinating facts, and plan your journey into the wild. Join us in preserving the natural world!
                                </p>
                                <div className="mt-3 species-slider">
                                    <Slider {...sliderSettings}>
                                        {sliderImages.map((image, index) => (
                                            <div key={index}>
                                                <img
                                                    src={image}
                                                    alt={`Wildlife Scene ${index + 1}`}
                                                    className="species-image"
                                                />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                            <div className="quick-links-section">
                                <h3 className="section-title">Quick Links</h3>
                                <ul className="quick-links">
                                    <li><a href="/about" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>About Us</a></li>
                                    <li><a href="/conservation" onClick={(e) => { e.preventDefault(); navigate('/conservation'); }}>Conservation Efforts</a></li>
                                    <li><a href="/blog" onClick={(e) => { e.preventDefault(); navigate('/blog'); }}>Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-section">
                            <div className="hero-section">
                                <img src={jungle} alt="Wildlife Explorer Hero" className="hero-image" />
                                <div className="hero-overlay">
                                    <button
                                        className="explore-button"
                                        onClick={() => handleExplore('/explorepark')}
                                        aria-label="Start Exploring Parks"
                                    >
                                        Start Exploring
                                    </button>
                                </div>
                            </div>
                            <div className="featured-section">
                                <h2 className="section-title">Featured Parks</h2>
                                <div className="park-cards">
                                    {parks.map((park) => (
                                        <div key={park.name} className="park-card" onClick={() => handleParkClick(park.path)}>
                                            <div className="park-image" style={{ backgroundImage: `url(${jungle})` }}></div>
                                            <h3>{park.name}</h3>
                                            <p>{park.location}</p>
                                            <button className="action-button" aria-label={`Explore ${park.name}`}>
                                                Explore
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="categories-section">
                        <h2 className="section-title">Explore Categories</h2>
                        <div className="category-cards">
                            {categories.map((category) => (
                                <div
                                    key={category.name}
                                    className="category-card"
                                    onClick={() => handleCategoryClick(category.path)}
                                >
                                    <div
                                        className="category-image"
                                        style={{ backgroundImage: `url(${category.image})` }}
                                    ></div>
                                    <h3 className="category-name">{category.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;