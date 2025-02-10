import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SpeciesCard from "../components/SpeciesCard";
import "./SpeciesEncyclopedia.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const SpeciesEncyclopedia = () => {
    const [search, setSearch] = useState("");
    const [filteredSpecies, setFilteredSpecies] = useState(null);
    const [selectedSpecies, setSelectedSpecies] = useState(null);
    const [speciesData, setSpeciesData] = useState(null);
    const [master, setMaster] = useState(false);
    const [loading, setLoading] = useState(false); // Added loading state

    const token = 'gI0vZnwYXry/R8Y5yR5n8A==fEWLtokF2rbFue9r';
    const key = '47881857-9a836ab9e4de036a26a49459e';

    useEffect(() => {
        const fetchSpecies = async () => {
            setLoading(true); // Show loading
            try {
                const res = await fetch("http://localhost:8080/species");
                const response = await res.json();
                setSpeciesData(response);
            } catch (ex) {
                console.error("Error fetching species data: ", ex);
            } finally {
                setLoading(false); // Hide loading
            }
        };
        fetchSpecies();
    }, []);

    const handleSearch = async (e) => {
        const query = e.target.value.toLowerCase();
        setSearch(query);

        if (query.length >= 3) {
            setLoading(true); // Show loading when searching
            try {
                const options = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": `${token}`
                    }
                };

                // Fetch species data
                const res = await fetch(`https://api.api-ninjas.com/v1/animals?name=${query}`, options);
                const response = await res.json();

                setSpeciesData(response);
                setMaster(!response.length);

                const updatedSpecies = await Promise.all(
                    response.map(async (item) => {
                        try {
                            const imageRes = await fetch(`https://pixabay.com/api/?key=${key}&q=${item.name}&image_type=photo`);
                            const imageData = await imageRes.json();
                            const imageUrl = imageData.hits?.[0]?.webformatURL || "";
                            return { ...item, imageUrl };
                        } catch (error) {
                            console.error("Error fetching image for:", item.name, error);
                            return { ...item, imageUrl: "" };
                        }
                    })
                );

                setFilteredSpecies(updatedSpecies);
            } catch (ex) {
                console.error("Error fetching species data:", ex);
            } finally {
                setLoading(false); // Hide loading when done
            }
        }
        else {
            setFilteredSpecies(null);
        }
    };

    return (
        <>
            <div className="encyclopedia-header">
                <Header />
            </div>

            <div className="encyclopedia-container">
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

                {loading ? (
                    <div className="loading-container">
                        <FontAwesomeIcon icon={faSpinner} />
                        <p>Loading species...</p>
                    </div>
                ) : (
                    <section className="species-grid">
                        {!selectedSpecies ? (
                            filteredSpecies &&
                            filteredSpecies.map((species, index) => (
                                <div className="species-card animate-fade-in" key={index}>
                                    <img
                                        src={species.imageUrl || "https://via.placeholder.com/150"}
                                        alt={species.name}
                                        className="species-image"
                                    />
                                    <div className="species-details">
                                        <h3>{species.name}</h3>
                                        <p><strong>Scientific Name:</strong> {species?.taxonomy?.scientific_name}</p>
                                        <p><strong>Habitat:</strong> {species?.characteristics?.habitat}</p>
                                        <p><strong>Diet:</strong> {species?.characteristics?.diet}</p>
                                        <p><strong>Locations:</strong> {species.locations?.join(",")}</p>
                                        <button
                                            className="view-details-btn"
                                            onClick={() => setSelectedSpecies(species)}
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="animate-slide-in">
                                {/* <button className="back-button" onClick={() => setSelectedSpecies(null)}>
                                    ← Back to Encyclopedia
                                </button> */}
                                <SpeciesCard selectedSpecies={selectedSpecies} setSelectedSpecies={setSelectedSpecies} />
                            </div>
                        )}
                    </section>
                )}
            </div>

            <Footer />
        </>
    );
};

export default SpeciesEncyclopedia;
