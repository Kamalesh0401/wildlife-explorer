import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./SpeciesEncyclopedia.css";
import { ajax, data } from "jquery";

const SpeciesEncyclopedia = () => {
    const [search, setSearch] = useState("");
    const [filteredSpecies, setFilteredSpecies] = useState(null);
    const [selectedSpecies, setSelectedSpecies] = useState(null);
    const [speciesData, setSpeciesData] = useState(null);

    useEffect(() => {
        const fetchSpecies = async () => {
            try {
                const res = await fetch("http://localhost:8080/species");
                const response = await res.json();
                setSpeciesData(response);
            } catch (ex) {
                console.error("Error fetching species data: ", ex);
            }
        };

        fetchSpecies();
    }, []);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearch(query);
        if (query && query.length >= 3) {
            const filtered = speciesData.filter(
                (species) =>
                    species.commonName.toLowerCase().includes(query) ||
                    species.scientificName.toLowerCase().includes(query)
            );
            setFilteredSpecies(filtered);
        }
    };

    const getSelectedSpecies = async (id) => {
        try {
            const res = await fetch(`http://localhost:8080/species/${id}`);
            const response = await res.json();
            setSelectedSpecies(response);
        } catch (ex) {
            console.error("Error fetching individual species data: ", ex);
        }
    }

    return (
        <>
            <div className="encyclopedia-header">
                <Header />
            </div>

            <div className="encyclopedia-container">
                {/* Search Section */}
                <section className="search-section">
                    <h1 className="encyclopedia-title">Species Encyclopedia</h1>
                    <p className="encyclopedia-description">
                        Explore the fascinating world of wildlife. Search for species by name or browse by category.
                    </p>
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search by species name..."
                        value={search}
                        onChange={handleSearch}
                    />
                </section>

                {/* Species Cards Section */}
                <section className="species-grid">
                    {filteredSpecies && filteredSpecies.map((species, index) => (
                        <div className="species-card" key={index}>
                            <img
                                src={species.image}
                                alt={species.commonName}
                                className="species-image"
                            />
                            <div className="species-details">
                                <h3>{species.commonName}</h3>
                                <p>
                                    <strong>Scientific Name:</strong> {species.scientificName}
                                </p>
                                <p>
                                    <strong>Habitat:</strong> {species.habitat}
                                </p>
                                <p>
                                    <strong>Diet:</strong> {species.diet}
                                </p>
                                <p>
                                    <strong>Status:</strong> {species.conservationStatus}
                                </p>
                                <button
                                    className="view-details-btn"
                                    onClick={() =>
                                        getSelectedSpecies(species._id)
                                    }
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Add AR/Interactive Media Section (Future enhancement) */}
                <section className="interactive-section">
                    <h2>Future Features</h2>
                    <p>Stay tuned for 3D models and augmented reality experiences!</p>
                </section>
            </div>

            <div className="encyclopedia-footer">
                <Footer />
            </div>
        </>
    );
};

export default SpeciesEncyclopedia;
