// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
// import Footer from '../components/FooterAdvance';
// import jungle from '../assets/images/roe-deer.jpg';
// import forest from '../assets/images/forest.jpg';
// import forest2 from '../assets/images/forest2.jpg';
// import forest3 from '../assets/images/forest3.jpg';
// import tiger from '../assets/images/lion.jpg';
// import elephant from '../assets/images/elephant.jpg';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './HomePage.css';


// function HomePage() {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [categories, setCategories] = useState([]);
//     const [parks, setParks] = useState([]);
//     const navigate = useNavigate();

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     const sliderSettings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         arrows: false,
//         pauseOnHover: true,
//         lazyLoad: 'ondemand',
//     };

//     const sliderImages = [forest2, forest3, jungle];

//     const categories1 = [
//         { name: 'Wildlife', image: 'https://res.cloudinary.com/dhwlzmuhm/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1745430426/lion_ogishm.jpg', path: '/wildlife' },
//         { name: 'Forest', image: forest2, path: '/exploreforests' },
//         { name: 'Parks', image: jungle, path: '/explorepark' },
//         { name: 'Nature', image: forest, path: '/nature' },
//         { name: 'Animal', image: elephant, path: '/animal' },
//         { name: 'Ocean', image: forest3, path: '/ocean' },
//         { name: 'Climate', image: jungle, path: '/climate' },
//     ];

//     const parks1 = [
//         { name: 'Manas National Park', location: 'Assam, India', path: '/park/manas' },
//         { name: 'Kaziranga National Park', location: 'Assam, India', path: '/park/kaziranga' },
//         { name: 'Jim Corbett National Park', location: 'Uttarakhand, India', path: '/park/corbett' },
//     ];

//     useEffect(() => {
//         // axios.get('http://localhost:5000/api/categories')
//         //     .then(response => setCategories(response.data.data.categories))
//         //     .catch(error => console.error('Error fetching categories:', error));

//         // axios.get('http://localhost:5000/api/parks')
//         //     .then(response => setParks(response.data.data.parks))
//         //     .catch(error => console.error('Error fetching parks:', error));
//     }, []);
//     const handleExplore = (path) => {
//         navigate(path);
//     };

//     const handleCategoryClick = (path) => {
//         navigate(path);
//     };

//     const handleParkClick = (path) => {
//         navigate(path);
//     };

//     return (
//         <div className="wd-home-container">
//             <div className="wd-home-body-content mb-3">
//                 <Sidebar />
//                 <div className={`wd-home-main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
//                     <div className="wd-home-header">
//                         <h1 className="wd-home-header-text">WILDLIFE EXPLORER</h1>
//                         <p className="wd-home-tagline">Discover Nature’s Wonders</p>
//                     </div>
//                     <div className="wd-home-center-main-content mb-3">
//                         <div className="wd-home-sidebar-content">
//                             <div className="wd-home-intro-section">
//                                 <h3 className="wd-home-section-title">WELCOME</h3>
//                                 <p className="wd-home-description">
//                                     Explore the beauty of wildlife and national parks with Wildlife Explorer, your ultimate guide to nature’s wonders. Immerse yourself in diverse ecosystems, from lush jungles to sprawling wetlands, and learn about endangered species that call these habitats home. Whether you’re a nature enthusiast, wildlife photographer, or adventure seeker, our platform helps you explore breathtaking parks, uncover fascinating facts, and plan your journey into the wild. Join us in preserving the natural world!
//                                 </p>
//                                 <div className="mt-3 wd-home-species-slider">
//                                     <Slider {...sliderSettings}>
//                                         {sliderImages.map((image, index) => (
//                                             <div key={index}>
//                                                 <img
//                                                     src={image}
//                                                     alt={`Wildlife Scene ${index + 1}`}
//                                                     className="wd-home-species-image"
//                                                 />
//                                             </div>
//                                         ))}
//                                     </Slider>
//                                 </div>
//                             </div>
//                             <div className="wd-home-quick-links-section">
//                                 <h3 className="wd-home-section-title">Quick Links</h3>
//                                 <ul className="wd-home-quick-links">
//                                     <li><a href="/about" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>About Us</a></li>
//                                     <li><a href="/conservation" onClick={(e) => { e.preventDefault(); navigate('/conservation'); }}>Conservation Efforts</a></li>
//                                     <li><a href="/blog" onClick={(e) => { e.preventDefault(); navigate('/blog'); }}>Blog</a></li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="wd-home-right-section">
//                             <div className="wd-home-hero-section">
//                                 <img src={jungle} alt="Wildlife Explorer Hero" className="wd-home-hero-image" />
//                                 <div className="wd-home-hero-overlay">
//                                     <button
//                                         className="wd-home-explore-button"
//                                         onClick={() => handleExplore('/explorepark')}
//                                         aria-label="Start Exploring Parks"
//                                     >
//                                         Start Exploring
//                                     </button>
//                                 </div>
//                             </div>
//                             <div className="wd-home-featured-section">
//                                 <h2 className="wd-home-section-title">Featured Parks</h2>
//                                 <div className="wd-home-park-cards">
//                                     {parks1.map((park) => (
//                                         <div key={park.name} className="wd-home-park-card" onClick={() => handleParkClick(park.path)}>
//                                             <div className="wd-home-park-image" style={{ backgroundImage: `url(${jungle})` }}></div>
//                                             <h3>{park.name}</h3>
//                                             <p>{park.location}</p>
//                                             <button className="wd-home-action-button" aria-label={`Explore ${park.name}`}>
//                                                 Explore
//                                             </button>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="wd-home-categories-section">
//                         <h2 className="wd-home-section-title">Explore Categories</h2>
//                         <div className="wd-home-category-cards">
//                             {categories1.map((category) => (
//                                 <div
//                                     key={category.name}
//                                     className="wd-home-category-card"
//                                     onClick={() => handleCategoryClick(category.path)}
//                                 >
//                                     <div
//                                         className="wd-home-category-image"
//                                         style={{ backgroundImage: `url(${category.image})` }}
//                                     ></div>
//                                     <h3 className="wd-home-category-name">{category.name}</h3>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="wd-home-conservation-section">
//                         <h2 className="wd-home-section-title">Conservation Efforts</h2>
//                         <div className="wd-home-conservation-grid">
//                             <div className="wd-home-conservation-card">
//                                 <h3>Project Tiger</h3>
//                                 <p>Launched in 1973, this initiative increased tiger populations from 1,827 in 1972 to over 3,000 in 2024.</p>
//                             </div>
//                             <div className="wd-home-conservation-card">
//                                 <h3>Project Elephant</h3>
//                                 <p>Started in 1992, it protects elephants, their habitats, and addresses human-elephant conflict.</p>
//                             </div>
//                             <div className="wd-home-conservation-card">
//                                 <h3>Gharial Conservation</h3>
//                                 <p>Focuses on breeding and reintroduction of the critically endangered gharial crocodile in parks like Chambal and Nandankanan.</p>
//                             </div>
//                             <div className="wd-home-conservation-card">
//                                 <h3>Vulture Recovery</h3>
//                                 <p>A program to revive vulture populations crashed by the drug Diclofenac, with breeding centers in several states.</p>
//                             </div>
//                             <div className="wd-home-conservation-card">
//                                 <h3>One-Horned Rhino</h3>
//                                 <p>Special protection and habitat management for the vulnerable greater one-horned rhinoceros, primarily in Assam.</p>
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


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/FooterAdvance';
import jungle from '../assets/images/roe-deer.jpg';
import forest from '../assets/images/forest.jpg';
import forest2 from '../assets/images/forest2.jpg';
import forest3 from '../assets/images/forest3.jpg';
import elephant from '../assets/images/elephant.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet-async";
import './HomePage.css';
import { Buildimg } from '../utlis'

// Conservation effort images (you can replace these with actual image imports or URLs)
const conservationImages = {
    project_tiger: "https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745777656/Indochinese_Tiger_srkokw.jpg",
    project_elephant: "https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745430382/elephant_mugote.jpg",
    gharial_conservation: 'Gharial', // Placeholder, replace with actual image
    vulture_recovery: 'Vulture', // Placeholder, replace with actual image
    one_horned_rhino: 'Rhino', // Placeholder, replace with actual image
};

function HomePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [parks, setParks] = useState([]);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll

            : 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: true,
        lazyLoad: 'ondemand',
    };

    const sliderImages = [
        "https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745430370/deergroup2_nqwppe.jpg",
        "https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745777655/Saber-Toothed_Tiger_kbywoi.jpg",
        "https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745430379/roe-deer_s2xg2a.jpg"
    ];

    const categories1 = [
        { name: 'Wildlife', image: 'https://res.cloudinary.com/dhwlzmuhm/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1745430426/lion_ogishm.jpg', path: '/wildlife' },
        { name: 'Forest', image: forest2, path: '/exploreforests' },
        { name: 'Parks', image: jungle, path: '/explorepark' },
        { name: 'Nature', image: forest, path: '/nature' },
        { name: 'Animal', image: elephant, path: '/animal' },
        { name: 'Ocean', image: forest3, path: '/ocean' },
        { name: 'Climate', image: jungle, path: '/climate' },
    ];

    const parks1 = [
        { name: 'Manas National Park', location: 'Assam, India', path: '/park/manas' },
        { name: 'Kaziranga National Park', location: 'Assam, India', path: '/park/kaziranga' },
        { name: 'Jim Corbett National Park', location: 'Uttarakhand, India', path: '/park/corbett' },
    ];

    const conservationEfforts = [
        { title: 'Project Tiger', description: 'Launched in 1973, this initiative increased tiger populations from 1,827 in 1972 to over 3,000 in 2024.', image: conservationImages.project_tiger },
        { title: 'Project Elephant', description: 'Started in 1992, it protects elephants, their habitats, and addresses human-elephant conflict.', image: conservationImages.project_elephant },
        { title: 'Gharial Conservation', description: 'Focuses on breeding and reintroduction of the critically endangered gharial crocodile in parks like Chambal and Nandankanan.', image: conservationImages.gharial_conservation },
        { title: 'Vulture Recovery', description: 'A program to revive vulture populations crashed by the drug Diclofenac, with breeding centers in several states.', image: conservationImages.vulture_recovery },
        { title: 'One-Horned Rhino', description: 'Special protection and habitat management for the vulnerable greater one-horned rhinoceros, primarily in Assam.', image: conservationImages.one_horned_rhino },
    ];

    useEffect(() => {
        // Placeholder for API calls
        // axios.get('http://localhost:5000/api/categories')
        //     .then(response => setCategories(response.data.data.categories))
        //     .catch(error => console.error('Error fetching categories:', error));
        // axios.get('http://localhost:5000/api/parks')
        //     .then(response => setParks(response.data.data.parks))
        //     .catch(error => console.error('Error fetching parks:', error));
    }, []);

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
        <div className="wd-home-container">
            <Helmet>
                <title>Wildlife Explorer - Discover Nature’s Wonders</title>
                <meta name="description" content="Explore wildlife, national parks, and conservation efforts with Wildlife Explorer. Discover diverse ecosystems, endangered species, and plan your adventure into nature." />
                <meta name="keywords" content="wildlife, national parks, conservation, nature, ecosystems, endangered species, adventure, travel" />
                <meta name="author" content="Wildlife Explorer Team" />
                <meta property="og:title" content="Wildlife Explorer - Discover Nature’s Wonders" />
                <meta property="og:description" content="Join Wildlife Explorer to discover the beauty of wildlife, national parks, and conservation efforts. Plan your journey into nature today!" />
                <meta property="og:image" content={Buildimg(jungle)} />
                <meta property="og:url" content="https://www.wildlifeexplorer.com" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Wildlife Explorer - Discover Nature’s Wonders" />
                <meta name="twitter:description" content="Explore wildlife, national parks, and conservation efforts with Wildlife Explorer. Discover nature’s wonders!" />
                <meta name="twitter:image" content={Buildimg(jungle)} />
            </Helmet>
            <div className="wd-home-body-content mb-3">
                <Sidebar />
                <div className={`wd-home-main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                    <div className="wd-home-header">
                        <h1 className="wd-home-header-text">WILDLIFE EXPLORER</h1>
                        <p className="wd-home-tagline">Discover Nature’s Wonders</p>
                    </div>
                    <div className="wd-home-center-main-content mb-3">
                        <div className="wd-home-sidebar-content">
                            <div className="wd-home-intro-section">
                                <h3 className="wd-home-section-title">WELCOME</h3>
                                <p className="wd-home-description">
                                    Explore the beauty of wildlife and national parks with Wildlife Explorer, your ultimate guide to nature’s wonders. Immerse yourself in diverse ecosystems, from lush jungles to sprawling wetlands, and learn about endangered species that call these habitats home. Whether you’re a nature enthusiast, wildlife photographer, or adventure seeker, our platform helps you explore breathtaking parks, uncover fascinating facts, and plan your journey into the wild. Join us in preserving the natural world!
                                </p>
                                <div className="mt-3 wd-home-species-slider">
                                    <Slider {...sliderSettings}>
                                        {sliderImages.map((image, index) => (
                                            <div key={index}>
                                                <img
                                                    src={Buildimg(image)}
                                                    alt={`Wildlife Scene ${index + 1}`}
                                                    className="wd-home-species-image"
                                                />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="wd-home-right-section">
                            <div className="wd-home-hero-section">
                                <img src={Buildimg(jungle)} alt="Wildlife Explorer Hero" className="wd-home-hero-image" />
                                <div className="wd-home-hero-overlay">
                                    <button
                                        className="wd-home-explore-button"
                                        onClick={() => handleExplore('/explorepark')}
                                        aria-label="Start Exploring Parks"
                                    >
                                        Start Exploring
                                    </button>
                                </div>
                            </div>
                            <div className="wd-home-featured-section">
                                <h2 className="wd-home-section-title">Featured Parks</h2>
                                <div className="wd-home-park-cards">
                                    {parks1.map((park) => (
                                        <div key={park.name} className="wd-home-park-card" onClick={() => handleParkClick(park.path)}>
                                            <div className="wd-home-park-image" style={{ backgroundImage: `url(${jungle})` }}></div>
                                            <h3>{park.name}</h3>
                                            <p>{park.location}</p>
                                            <button className="wd-home-action-button" aria-label={`Explore ${park.name}`}>
                                                Explore
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wd-home-categories-section">
                        <h2 className="wd-home-section-title">Explore Categories</h2>
                        <div className="wd-home-category-cards">
                            {categories1.map((category) => (
                                <div
                                    key={category.name}
                                    className="wd-home-category-card"
                                    onClick={() => handleCategoryClick(category.path)}
                                >
                                    <div
                                        className="wd-home-category-image"
                                        style={{ backgroundImage: `url(${category.image})` }}
                                    ></div>
                                    <h3 className="wd-home-category-name">{category.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="wd-home-conservation-section">
                        <h2 className="wd-home-section-title">Conservation Efforts</h2>
                        <div className="wd-home-conservation-grid">
                            {conservationEfforts.map((effort) => (
                                <div key={effort.title} className="wd-home-conservation-card">
                                    <img
                                        src={Buildimg(effort.image)}
                                        alt={effort.title}
                                        className="wd-home-conservation-image"
                                        loading="lazy"
                                    />
                                    <h3>{effort.title}</h3>
                                    <p>{effort.description}</p>
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