import { useEffect, useState } from "react";
import "./index.css";

const SpeciesCard = ({ selectedSpecies, setSelectedSpecies }) => {
    const [data, setData] = useState(selectedSpecies);

    return (
        <div className="species-details-expanded">
            <button className="back-button" onClick={() => setSelectedSpecies(null)}>
                ← Back to Encyclopedia
            </button>

            <h2 className="species-title">{data.name}</h2>
            <img src={data.imageUrl} alt={data.name} className="detail-image" />

            <div className="details-grid">
                {Object.entries({
                    "Scientific Name": data.taxonomy.scientific_name,
                    Kingdom: data.taxonomy.kingdom,
                    Phylum: data.taxonomy.phylum,
                    Class: data.taxonomy.class,
                    Order: data.taxonomy.order,
                    Family: data.taxonomy.family,
                    Genus: data.taxonomy.genus,
                    Habitat: data.characteristics.habitat,
                    Diet: data.characteristics.diet,
                    Predators: data.characteristics.predators,
                    "Top Speed": data.characteristics.top_speed,
                    Weight: data.characteristics.weight,
                    Lifespan: data.characteristics.lifespan,
                }).map(([key, value], index) => (
                    <div className="detail-item" key={index}>
                        <strong>{key}:</strong> {value || "N/A"}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpeciesCard;
