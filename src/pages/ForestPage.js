import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/FooterAdvance';

import forestvideo from '../assets/images/forestvideo.mp4';
import temperaturerainforest from '../assets/images/forest/temperature-rainforest.jpg';
import tropicalrainforest from '../assets/images/forest/tropical-rainforest.jpg';
import forest2 from '../assets/images/forest2.jpg';
import borealforest from '../assets/images/forest/boreal-forest.jpg';
import tropicaldeciduousforest from '../assets/images/forest/tropical-deciduous-forest.jpg';
import temperatedeciduousforest from '../assets/images/forest/temperate-deciduous-forest.jpg';
import mangroveforest from '../assets/images/forest/mangrove-forest.jpg';
import montaneforest from '../assets/images/forest/montane-forest.jpg';
import savannaforest from '../assets/images/forest/savanna-forest.jpg';
import coniferousforest from '../assets/images/forest/coniferous-forest.jpg';
import dryforest from '../assets/images/forest/dry-forest.jpg';
import mediterraneanforest from '../assets/images/forest/mediterranean-forest.jpg';
import './ForestExplorer.css';

const forestArray = [
    { name: "Tropical Rainforest", explanation: 'Home to the richest biodiversity on Earth, tropical forests are a treasure trove of life.', image: tropicalrainforest, style: 'fade-down' },
    { name: "Temperate Rainforest", explanation: "These forests are known for their stunning seasonal changes and diverse wildlife.", image: temperaturerainforest, style: 'fade-down' },
    { name: "Boreal Forest", explanation: "Also known as taiga, these forests are located in colder regions of the world.", image: borealforest, style: 'fade-down' },
    { name: "Tropical Deciduous Forest", explanation: "Forests that shed their leaves in the dry season, found in tropical regions.", image: tropicaldeciduousforest, style: 'fade-up' },
    { name: "Temperate Deciduous Forest", explanation: "Forests in temperate regions with trees that shed leaves seasonally.", image: temperatedeciduousforest, style: 'fade-up' },
    { name: "Mangrove Forest", explanation: "Coastal forests with salt-tolerant trees growing in brackish water.", image: mangroveforest, style: 'fade-up' },
    { name: "Montane Forest", explanation: "Forests found at high altitudes, with varying vegetation based on elevation.", image: montaneforest, style: 'zoom-out' },
    { name: "Savanna Forest", explanation: "Scattered trees in tropical grasslands with distinct wet and dry seasons.", image: savannaforest, style: 'zoom-out' },
    { name: "Coniferous Forest", explanation: "Forests dominated by conifer trees like pines, spruces, and firs, in cool climates.", image: coniferousforest, style: 'zoom-out' },
    { name: "Dry Forest", explanation: "Found in arid regions, these forests have drought-resistant vegetation.", image: dryforest, style: 'flip-up' },
    { name: "Mediterranean Forest", explanation: "Found in Mediterranean climates, with evergreen and drought-adapted vegetation.", image: mediterraneanforest, style: 'flip-up' },
    { name: "Subtropical Forest", explanation: "Located in subtropical regions, with a mix of tropical and temperate species.", image: forest2, style: 'flip-up' },
    { name: "Flooded Forest", explanation: "Forests that are seasonally or permanently flooded, like in river deltas.", image: forest2, style: 'zoom-in' },
    { name: "Temperate Mixed Forest", explanation: "Combination of deciduous and coniferous trees, with moderate climates.", image: forest2, style: 'zoom-in' },
    { name: "Plantation Forest", explanation: "Artificially planted forests for timber, paper, or conservation purposes.", image: forest2, style: 'zoom-in' },
];

const ForestExplorer = () => {
    const [forests, setForests] = useState(forestArray);
    const [searchTerm, setSearchTerm] = useState('');
    const [regionFilter, setRegionFilter] = useState('All');
    const [wildlifeFilter, setWildlifeFilter] = useState('All');
    const [activitiesFilter, setActivitiesFilter] = useState('All');
    const navigate = useNavigate();

    // Fetch forests from backend
    // useEffect(() => {
    //     const fetchForests = async () => {
    //         try {
    //             const response = await fetch('http://localhost:3000/api/forests');
    //             setForests(response.data);
    //         } catch (error) {
    //             console.error('Error fetching forests:', error);
    //         }
    //     };
    //     fetchForests();
    // }, []);

    // Filter forests based on search and filters
    const filteredForests = forests.filter(forest => {
        const matchesSearch = forest.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRegion = regionFilter === 'All' || forest.region === regionFilter;
        const matchesWildlife = wildlifeFilter === 'All' || forest.wildlife === wildlifeFilter;
        const matchesActivities = activitiesFilter === 'All' || forest.activities === activitiesFilter;
        return matchesSearch && matchesRegion && matchesWildlife && matchesActivities;
    });

    // Handle forest click
    const handleForestClick = (id) => {
        navigate(`/forestdetail/${encodeURIComponent(id)}`);
    };

    return (
        <>
            <div className="forest-container">
                <h1 className="forest-title">EXPLORE NATIONAL PARKS</h1>
                <div className="forest-content">
                    <aside className="forest-filters">
                        <h3>FILTERS</h3>
                        <div className="filter-group">
                            <label>Region:</label>
                            <select value={regionFilter} onChange={(e) => setRegionFilter(e.target.value)}>
                                <option value="All">All</option>
                                <option value="Asia">Asia</option>
                                <option value="Europe">Europe</option>
                                <option value="Africa">Africa</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>Wildlife:</label>
                            <select value={wildlifeFilter} onChange={(e) => setWildlifeFilter(e.target.value)}>
                                <option value="All">All</option>
                                <option value="Tigers">Tigers</option>
                                <option value="Elephants">Elephants</option>
                                <option value="Rhinos">Rhinos</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>Activities:</label>
                            <select value={activitiesFilter} onChange={(e) => setActivitiesFilter(e.target.value)}>
                                <option value="All">All</option>
                                <option value="Safari">Safari</option>
                                <option value="Hiking">Hiking</option>
                                <option value="Bird Watching">Bird Watching</option>
                            </select>
                        </div>
                    </aside>
                    <main className="forest-main">
                        <div className="forest-search">
                            <input
                                type="text"
                                placeholder="Search parks..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="forest-grid">
                            {filteredForests.map(forest => (
                                <div key={forest.name} className="forest-card">
                                    <img src={forest.image} alt={forest.name} />
                                    <h3>{forest.name}</h3>
                                    <p>{forest.explanation}</p>
                                    <button onClick={() => handleForestClick(forest.name)}>View Details</button>
                                </div>
                            ))}
                        </div>
                        <section className="forest-video">
                            <h2>Explore the Beauty of Forests</h2>
                            <video controls>
                                <source src={forestvideo} type="video/mp4" />
                            </video>
                        </section>
                        <section className="forest-conservation">
                            <h2>Why Forest Conservation Matters</h2>
                            <p>
                                Forests play a crucial role in maintaining the Earth's ecological balance. They absorb carbon dioxide,
                                produce oxygen, and provide habitats for countless species. Conserving forests is vital for our planet's
                                future.
                            </p>
                        </section>
                    </main>
                </div>
            </div>
            <div className="forest-footer">
                <Footer />
            </div>
        </>
    );
};

export default ForestExplorer;