import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./SpeciesEncyclopedia.css";

const speciesData = [
    {
        commonName: "Tiger",
        scientificName: "Panthera tigris",
        habitat: "Forests, grasslands, and wetlands",
        diet: "Carnivore",
        behavior: "Solitary",
        conservationStatus: "Endangered",
        threats: "Habitat loss, poaching",
        funFacts: "Tigers are excellent swimmers and can leap over 30 feet in a single bound.",
        image: "/assets/images/tiger.jpg",
        video: "/assets/videos/tiger.mp4",
    },
    {
        commonName: "Bald Eagle",
        scientificName: "Haliaeetus leucocephalus",
        habitat: "Near large bodies of open water",
        diet: "Fish, small mammals",
        behavior: "Monogamous",
        conservationStatus: "Least Concern",
        threats: "Habitat destruction, pollution",
        funFacts: "Bald Eagles build the largest nests of any bird in North America.",
        image: "/assets/images/bald-eagle.jpg",
        video: "/assets/videos/bald-eagle.mp4",
    },
    // Add more species data here...
];

const SpeciesEncyclopedia = () => {
    const [search, setSearch] = useState("");
    const [filteredSpecies, setFilteredSpecies] = useState(speciesData);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearch(query);
        const filtered = speciesData.filter(
            (species) =>
                species.commonName.toLowerCase().includes(query) ||
                species.scientificName.toLowerCase().includes(query)
        );
        setFilteredSpecies(filtered);
    };

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
                    {filteredSpecies.map((species, index) => (
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
                                        alert(`More details about ${species.commonName} coming soon!`)
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
