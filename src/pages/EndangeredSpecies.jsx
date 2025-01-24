
import Header from '../components/Header';
import Footer from '../components/Footer';
import './EndangeredSpecies.css';
import React, { useEffect, useState } from "react";


const EndangeredSpecies = () => {
    const [endangeredSpecies, setEndangeredSpecies] = useState(null);

    useEffect(() => {
        const fetchEndangeredSpecies = async () => {
            try {
                const res = await fetch("http://localhost:8080/endangerdspecies");
                const response = await res.json();
                setEndangeredSpecies(response);
            } catch (ex) {
                console.error("Error fetching endangered species: ", ex);
            }
        };

        fetchEndangeredSpecies();
    }, []);

    return (
        <>
            {/* Header */}
            <div className="endangered-header">
                <Header />
            </div>

            <main className="endangered-main">
                {endangeredSpecies && endangeredSpecies.length > 0 ? (
                    endangeredSpecies.map((selectedSpecies) => (
                        <div key={selectedSpecies._id} className="species-card">
                            <section className="species-hero-section">
                                <div className="hero-content">
                                    <h1 className="species-title">{selectedSpecies.commonName}</h1>
                                    <p className={`species-status ${selectedSpecies.endangeredStatus.replace(' ', '-').toLowerCase()}`}>
                                        {selectedSpecies.endangeredStatus}
                                    </p>
                                </div>
                                <div className="hero-image">
                                    <img src={selectedSpecies.image} alt={selectedSpecies.commonName} />
                                </div>
                            </section>

                            <section className="species-info-section">
                                <div className="info-block">
                                    <h2>Population</h2>
                                    <p><strong>Current:</strong> {selectedSpecies.population.current}</p>
                                    <p><strong>Trend:</strong> {selectedSpecies.population.trend}</p>
                                </div>
                                <div className="info-block">
                                    <h2>Conservation Efforts</h2>
                                    <p>{selectedSpecies.conservationEfforts}</p>
                                </div>
                            </section>

                            <section className="species-threats-section">
                                <h2>Primary Threats</h2>
                                <ul className="threats-list">
                                    {selectedSpecies.primaryThreats.map((threat, index) => (
                                        <li key={index} className="threat-item">{threat}</li>
                                    ))}
                                </ul>
                            </section>

                            <section className="species-protection-section">
                                <h2>Protection Measures</h2>
                                <ul className="protection-list">
                                    {selectedSpecies.protectionMeasures.map((measure, index) => (
                                        <li key={index} className="protection-item">{measure}</li>
                                    ))}
                                </ul>
                            </section>

                            <section className="species-redlist-section">
                                <h2>Red List Category</h2>
                                <p>{selectedSpecies.redListCategory}</p>
                            </section>
                        </div>
                    ))
                ) : (
                    <p className="loading-message">Loading endangered species data...</p>
                )}

                <section className="species-cta-section">
                    <h2>Take Action</h2>
                    <p>Support global efforts to protect endangered species. Spread awareness, volunteer, or donate to conservation programs.</p>
                    <a href="/contact" className="cta-button">Get Involved</a>
                </section>
            </main>

            {/* Footer */}
            <div className="endangered-footer">
                <Footer />
            </div>
        </>
    );
};


export default EndangeredSpecies;