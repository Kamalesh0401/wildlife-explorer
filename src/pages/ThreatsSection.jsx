
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import './ThreatsSection.css';

// const ThreatsSection = () => {
//     return (
//         <>
//             {/* Header */}
//             <div className="threat-header">
//                 <Header />
//             </div>

//             {/* Hero Section */}
//             <section className="threat-hero-section animate fade-in">
//                 <div className="threat-hero-content">
//                     <h1 className="threat-title">The Threats to Our Wildlife and Forests</h1>
//                     <p className="threat-subtitle">
//                         Explore the dangers facing our planet’s biodiversity and learn how you can help make a difference.
//                     </p>
//                 </div>
//             </section>

//             {/* Main Content Section */}
//             <section className="threat-main-section animate slide-up">
//                 <h2 className="section-title">Major Threats to Wildlife</h2>
//                 <div className="threat-grid">
//                     <div className="threat-card">
//                         <img src={`${process.env.PUBLIC_URL}/images/deforestation.jpg`} alt="Deforestation" />
//                         <h3>Deforestation</h3>
//                         <p>
//                             Forests are being cleared at alarming rates, destroying habitats and threatening countless species.
//                         </p>
//                     </div>
//                     <div className="threat-card">
//                         <img src={`${process.env.PUBLIC_URL}/images/climate_change.jpg`} alt="Climate Change" />
//                         <h3>Climate Change</h3>
//                         <p>
//                             Rising temperatures and changing ecosystems are driving many species to extinction.
//                         </p>
//                     </div>
//                     <div className="threat-card">
//                         <img src={`${process.env.PUBLIC_URL}/images/poaching.jpg`} alt="Poaching" />
//                         <h3>Poaching</h3>
//                         <p>
//                             Illegal hunting and trading of animals threaten the survival of many iconic species.
//                         </p>
//                     </div>
//                     <div className="threat-card">
//                         <img src={`${process.env.PUBLIC_URL}/images/pollution.jpg`} alt="Pollution" />
//                         <h3>Pollution</h3>
//                         <p>
//                             Contamination of air, water, and land directly harms wildlife and their habitats.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* Call-to-Action Section */}
//             <section className="threat-cta-section animate zoom-in">
//                 <h2>How Can You Help?</h2>
//                 <p>
//                     Small actions can make a big difference. Get involved by supporting conservation efforts, reducing waste, and spreading awareness.
//                 </p>
//                 <a href="/contact" className="cta-btn">Take Action Now</a>
//             </section>

//             {/* Footer */}
//             <div className="threat-footer">
//                 <Footer />
//             </div>
//         </>
//     );
// };

const ThreatsSection = () => {
    const [threatData, setThreatData] = useState(null);

    useEffect(() => {
        const fetchThreats = async () => {
            try {
                const res = await fetch("http://localhost:8080/threats");
                const response = await res.json();
                setThreatData(response);
            } catch (ex) {
                console.error("Error fetching threats: ", ex);
            }
        };

        fetchThreats();
    }, []);

    return (
        <>
            {/* Header */}
            <div className="threat-header">
                <Header />
            </div>

            {/* Content Section */}
            <main>
                {threatData && threatData.length > 0 ?
                    (threatData.map((threat, index) => (
                        <div key={index} className="threat-container">
                            {/* Hero Section */}
                            <section className="threat-hero-section animate fade-in">
                                <div className="threat-hero-content">
                                    <h1 className="threat-title">{threat.name}</h1>
                                    <p className="threat-subtitle">{threat.description}</p>
                                </div>
                            </section>

                            {/* Main Section */}
                            <section className="threat-main-section animate slide-up">
                                <div className="threat-details">
                                    <div className="threat-image-container">
                                        <img
                                            src={threat.image}
                                            alt={threat.name}
                                            className="threat-image"
                                        />
                                    </div>
                                    <div className="threat-info">
                                        <h2 className="section-title">Details</h2>
                                        <p><strong>Impact Level:</strong> {threat.impactLevel}</p>
                                        <p><strong>Causes:</strong> {threat.causes}</p>
                                        <p><strong>Reported Cases:</strong> {threat.reportedCases}</p>
                                        <p>
                                            <strong>Geographic Regions:</strong>{" "}
                                            {threat.geographicRegions.join(", ")}
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Affected Species */}
                            <section className="affected-species-section animate fade-in">
                                <h2 className="section-title">Species Affected</h2>
                                <ul className="species-list">
                                    {threat.speciesAffected.map((species, index) => (
                                        <li key={index} className="species-item">
                                            {species}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Mitigation Strategies */}
                            <section className="mitigation-strategies-section animate zoom-in mt-4">
                                <h2 className="section-title">Mitigation Strategies</h2>
                                <ul className="strategies-list">
                                    {threat.mitigationStrategies.map((strategy, index) => (
                                        <li key={index} className="strategy-item">
                                            {strategy}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Video Section */}
                            {threat.video && (
                                <section className="threat-video-section animate fade-in">
                                    <h2>Learn More</h2>
                                    <div className="video-container">
                                        <iframe
                                            src={threat.video}
                                            title={`Learn more about ${threat.name}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                </section>
                            )}
                        </div>
                    ))) : (<p className="loading-message">Loading threats...</p>)}
                <section className="threat-container threat-cta-section animate slide-up">
                    <h2>How Can You Help?</h2>
                    <p>
                        Take part in global conservation efforts, spread awareness, and
                        support organizations that aim to combat overfishing.
                    </p>
                    <a href="/contact" className="cta-btn">
                        Get Involved
                    </a>
                </section>
            </main>
            {/* Call-to-Action Section */}

            {/* Footer */}
            <div className="threat-footer">
                <Footer />
            </div>
        </>
    );
};

export default ThreatsSection;