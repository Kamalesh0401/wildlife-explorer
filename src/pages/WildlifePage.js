import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/FooterAdvance';
import Loader from '../components/Loader';
import './WildlifePage.css';
import { useNavigate } from 'react-router-dom';
import { Buildimg } from '../utlis';

function WildlifePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [animalsData, setAnimalsData] = useState(null);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSearch = async (query) => {
        setSearchTerm(query);
        query = query.toLowerCase();
        setSearch(query);

        if (query.length >= 3) {
            setLoading(true);
            try {
                const options = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                };
                const res = await fetch(`http://localhost:6003/api/animals/name/${query}`, options);
                const response = await res.json();
                console.log("Response : ", response);

                setAnimalsData(response);
            } catch (ex) {
                console.error("Error fetching species data:", ex);
            } finally {
                setLoading(false);
            }
        }
        else {

        }
    };

    // Handle animal click
    const handleAnimalClick = (id) => {
        navigate(`/wildlifedetail/${encodeURIComponent(id)}`);
    };

    return (
        <>
            <div className="wd-wildlife-container">
                <div className="wd-wildlife-body-content mb-3">
                    <Sidebar />
                    <div className={`wd-wildlife-main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                        <div className="wd-wildlife-header">
                            <h1 className="wd-wildlife-header-text">WILDLIFE SPECIES</h1>
                            <button
                                className="wd-wildlife-mobile-menu"
                                onClick={toggleSidebar}
                                aria-label="Toggle Sidebar"
                            >
                                ≡
                            </button>
                        </div>
                        <div className="wd-wildlife-center-main-content">
                            <div className="wd-wildlife-sidebar-content">
                                <div className="wd-wildlife-filter-section">
                                    <h3 className="wd-wildlife-section-title">FILTERS</h3>
                                    <div className="wd-wildlife-filter-options">
                                        <label htmlFor="species">Species:</label>
                                        <select id="species" className="wd-wildlife-filter-dropdown">
                                            <option value="">All</option>
                                            <option value="mammal">Mammal</option>
                                            <option value="bird">Bird</option>
                                            <option value="reptile">Reptile</option>
                                        </select>
                                        <label htmlFor="habitat">Habitat:</label>
                                        <select id="habitat" className="wd-wildlife-filter-dropdown">
                                            <option value="">All</option>
                                            <option value="forest">Forest</option>
                                            <option value="wetland">Wetland</option>
                                            <option value="grassland">Grassland</option>
                                        </select>
                                        <label htmlFor="status">Conservation Status:</label>
                                        <select id="status" className="wd-wildlife-filter-dropdown">
                                            <option value="">All</option>
                                            <option value="endangered">Endangered</option>
                                            <option value="vulnerable">Vulnerable</option>
                                            <option value="least-concern">Least Concern</option>
                                        </select>
                                        <label htmlFor="status">Diet :</label>
                                        <select id="status" className="wd-wildlife-filter-dropdown">
                                            <option value="">All</option>
                                            <option value="herbivore">Herbivore</option>
                                            <option value="carnivore">Carnivore</option>
                                            <option value="omnivore">Omnivore</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="wd-wildlife-right-section">
                                <div className="wd-wildlife-search-bar">
                                    <input
                                        type="text"
                                        placeholder="Search wildlife..."
                                        value={searchTerm}
                                        onChange={(e) => handleSearch(e.target.value)}
                                        className="wd-wildlife-search-input"
                                    />
                                    <span className="wd-wildlife-search-icon">🔍</span>
                                </div>
                                <div className="wd-wildlife-grid">
                                    {animalsData?.map((animal, index) => (
                                        <div className="wd-wildlife-card" key={index}>
                                            <div className="wd-wildlife-image-container">
                                                <img
                                                    src={Buildimg(animal.image)}
                                                    alt={animal.name}
                                                    className="wd-wildlife-image"
                                                />
                                            </div>
                                            <h3 className="wd-wildlife-name">{animal.name}</h3>
                                            <p className="wd-wildlife-habitat">Habitat: {animal.habitat}</p>
                                            <button
                                                className="wd-wildlife-action-button"
                                                aria-label={`Learn more about ${animal.name}`}
                                                onClick={() => { handleAnimalClick(animal._id) }}
                                            >
                                                Learn More
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default WildlifePage;



// // Dummy wildlife data (replace with API data later)
// const wildlife = [
//     {
//         name: 'Barasingha',
//         habitat: 'Wetland',
//         description: 'A rare swamp deer found in northern India.',
//         //image: `${process.env.PUBLIC_URL}/src/assets/images/barasingha.jpg`,
//         image: deer,
//     },
//     {
//         name: 'Bengal Tiger',
//         habitat: 'Forest',
//         description: 'A majestic big cat native to India.',
//         image: elephant,
//     },
//     {
//         name: 'Indian Elephant',
//         habitat: 'Grassland/Forest',
//         description: 'A large mammal key to India’s ecosystems.',
//         image: roedeer,
//     },
//     {
//         name: 'One-Horned Rhinoceros',
//         habitat: 'Grassland',
//         description: 'A unique species found in Assam.',
//         image: roedeer,
//     },
// ];

// const filteredWildlife = wildlife.filter((animal) =>
//     animal.name.toLowerCase().includes(searchTerm.toLowerCase())
// );