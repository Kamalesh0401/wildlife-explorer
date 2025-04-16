// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import './AboutUsPage.css';

// function AboutUsPage() {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     // Dummy team data (replace with real data later)
//     const teamMembers = [
//         {
//             name: 'John Doe',
//             role: 'Founder',
//             image: `${process.env.PUBLIC_URL}/src/assets/images/team1.jpg`,
//         },
//         {
//             name: 'Jane Smith',
//             role: 'Wildlife Expert',
//             image: `${process.env.PUBLIC_URL}/src/assets/images/team2.jpg`,
//         },
//         {
//             name: 'Alex Brown',
//             role: 'Content Creator',
//             image: `${process.env.PUBLIC_URL}/src/assets/images/team3.jpg`,
//         },
//     ];

//     return (
//         <div className="about-us-container">
//             <div className="body-content">
//                 <Sidebar />
//                 <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
//                     <div className="header">
//                         <h1 className="header-text">ABOUT US</h1>
//                         <button
//                             className="mobile-menu"
//                             onClick={toggleSidebar}
//                             aria-label="Toggle Sidebar"
//                         >
//                             ≡
//                         </button>
//                     </div>
//                     <div className="center-main-content">
//                         <div className="sidebar-content">
//                             <div className="mission-section">
//                                 <h3 className="section-title">OUR MISSION</h3>
//                                 <p className="mission-statement">
//                                     We aim to inspire wildlife conservation and education by connecting people with the wonders of nature. Our platform fosters a deeper understanding of ecosystems and endangered species, encouraging sustainable travel and preservation efforts worldwide.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="right-section">
//                             <div className="purpose-section">
//                                 <h2 className="purpose-title">Our Purpose</h2>
//                                 <p className="purpose-text">
//                                     Wildlife Explorer was created to bridge the gap between nature enthusiasts and the wild. Our goal is to provide a comprehensive resource for exploring national parks, learning about wildlife, and supporting conservation initiatives. Through stunning visuals, detailed insights, and interactive tools, we empower users to appreciate and protect the natural world, fostering a global community dedicated to sustainability.
//                                 </p>
//                             </div>
//                             <div className="team-section">
//                                 <h2 className="team-title">Meet the Team</h2>
//                                 <div className="team-grid">
//                                     {teamMembers.map((member, index) => (
//                                         <div className="team-card" key={index}>
//                                             <div className="team-image-container">
//                                                 <img
//                                                     src={member.image}
//                                                     alt={member.name}
//                                                     className="team-image"
//                                                 />
//                                             </div>
//                                             <h3 className="team-name">{member.name}</h3>
//                                             <p className="team-role">{member.role}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AboutUsPage;


import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/FooterAdvance';
import './AboutUsPage.css';
import deer from '../assets/images/deer.jpg';
import elephant from '../assets/images/elephant.jpg';
import roedeer from '../assets/images/roe-deer.jpg';

function AboutUsPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Dummy team data (replace with real data later)
    const teamMembers = [
        {
            name: 'John Doe',
            role: 'Founder',
            //image: `${process.env.PUBLIC_URL}/src/assets/images/team1.jpg`,
            image: deer,
        },
        {
            name: 'Jane Smith',
            role: 'Wildlife Expert',
            image: deer,
        },
        {
            name: 'Alex Brown',
            role: 'Content Creator',
            image: deer,
        },
    ];

    return (
        <div className="about-us-container">
            <div className="body-content mb-3">
                <Sidebar />
                <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                    <div className="header">
                        <h1 className="header-text">ABOUT US</h1>
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
                            <div className="mission-section">
                                <h3 className="section-title">
                                    <span className="section-icon">🌿</span> OUR MISSION
                                </h3>
                                <p className="mission-statement">
                                    We aim to inspire wildlife conservation and education by connecting people with the wonders of nature. Our platform fosters a deeper understanding of ecosystems and endangered species, encouraging sustainable travel and preservation efforts worldwide.
                                </p>
                                <button className="mission-button">Learn More About Our Mission</button>
                            </div>
                        </div>
                        <div className="right-section">
                            <div className="purpose-section">
                                <h2 className="purpose-title">Our Purpose</h2>
                                <p className="purpose-text">
                                    Wildlife Explorer was created to bridge the gap between nature enthusiasts and the wild. Our goal is to provide a comprehensive resource for exploring national parks, learning about wildlife, and supporting conservation initiatives. Through stunning visuals, detailed insights, and interactive tools, we empower users to appreciate and protect the natural world, fostering a global community dedicated to sustainability.
                                </p>
                            </div>
                            <div className="team-section">
                                <h2 className="team-title">Meet the Team</h2>
                                <div className="team-grid">
                                    {teamMembers.map((member, index) => (
                                        <div className="team-card" key={index}>
                                            <div className="team-image-container">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="team-image"
                                                />
                                            </div>
                                            <h3 className="team-name">{member.name}</h3>
                                            <p className="team-role">{member.role}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUsPage;