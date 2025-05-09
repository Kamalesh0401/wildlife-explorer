import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import { Helmet } from "react-helmet-async";
import { fetchAnimals, setSearchTerm, setFilter, clearSearchAndFilters, clearSearch, setAnimalsData } from '../store/wildlifeSlice';
import { setFromPage } from '../store/generalSlice';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';
import Footer from '../components/FooterAdvance';
import './WildlifePage.css';
import { Buildimg } from '../utlis';

function WildlifePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { searchTerm, animalsData, error, filters } = useSelector((state) => state.wildlife);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Debounced search handler
    const debouncedFetchAnimals = useCallback(
        debounce((query, filters) => {
            fetchAnimals(query, filters);
        }, 500),
        []
    );

    // Fetch animals with search term and filters
    const fetchAnimals = async (query, { species, habitat, conservationStatus, diet }) => {
        if (!query && !species && !habitat && !conservationStatus && !diet) {
            dispatch(clearSearchAndFilters());
            return;
        }
        try {
            setLoading(true);
            const queryParams = new URLSearchParams({
                name: query?.toLowerCase() || '',
                species: species || '',
                habitat: habitat || '',
                conservationStatus: conservationStatus || '',
                diet: diet || ''
            }).toString();
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const res = await fetch(`http://localhost:6004/api/animals?${queryParams}`, options);
            const response = await res.json();
            console.log("Animals : ", response);
            dispatch(setAnimalsData(response));
        } catch (ex) {
            console.error('Error fetching animals data:', ex);
        } finally {
            setLoading(false);
        }
    };

    // Handle search input changes
    const handleSearch = (e) => {
        const query = e.target.value;
        dispatch(setSearchTerm(query));
        debouncedFetchAnimals(query, filters);
    };

    // Handle filter changes
    const handleFilterChange = (key, value) => {
        dispatch(setFilter({ key, value }));
        debouncedFetchAnimals(searchTerm, { ...filters, [key]: value });
    };

    const handleClearSearchAndFilters = () => {
        dispatch(clearSearchAndFilters());
        debouncedFetchAnimals(searchTerm, filters);
    };
    const handleClearSearch = () => {
        dispatch(clearSearch());
    };
    const handleAnimalClick = (id) => {
        dispatch(setFromPage("/wildlife"));
        navigate(`/wildlifedetail/${encodeURIComponent(id)}`);
    };

    return (
        <>
            {loading && <Loader />}
            <div className="wd-wildlife-container">
                <Helmet>
                    <title>Wildlife Explorer - Discover Wildlife Species</title>
                    <meta name="description" content="Explore diverse wildlife species with Wildlife Explorer. Search and filter by species, habitat, conservation status, or diet to discover fascinating animals." />
                    <meta name="keywords" content="wildlife, animals, species, conservation, nature, biodiversity, exploration" />
                    <meta name="author" content="Wildlife Explorer Team" />
                    <meta property="og:title" content="Wildlife Explorer - Discover Wildlife Species" />
                    <meta property="og:description" content="Discover wildlife species with Wildlife Explorer. Use filters to explore animals by species, habitat, conservation status, or diet." />
                    <meta property="og:image" content="https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745430426/lion_ogishm.jpg" />
                    <meta property="og:url" content="https://www.wildlifeexplorer.com/wildlife" />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Wildlife Explorer - Discover Wildlife Species" />
                    <meta name="twitter:description" content="Explore wildlife species with Wildlife Explorer. Filter by species, habitat, or conservation status to learn more." />
                    <meta name="twitter:image" content="https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745430426/lion_ogishm.jpg" />
                </Helmet>
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
                                        <select
                                            id="species"
                                            className="wd-wildlife-filter-dropdown"
                                            value={filters.species}
                                            onChange={(e) => handleFilterChange('species', e.target.value)}
                                        >
                                            <option value="">All</option>
                                            <option value="mammal">Mammal</option>
                                            <option value="bird">Bird</option>
                                            <option value="reptile">Reptile</option>
                                        </select>
                                        <label htmlFor="habitat">Habitat:</label>
                                        <select
                                            id="habitat"
                                            className="wd-wildlife-filter-dropdown"
                                            value={filters.habitat}
                                            onChange={(e) => handleFilterChange('habitat', e.target.value)}
                                        >
                                            <option value="">All</option>
                                            <option value="forest">Forest</option>
                                            <option value="wetland">Wetland</option>
                                            <option value="grassland">Grassland</option>
                                        </select>
                                        <label htmlFor="conservationStatus">Conservation Status:</label>
                                        <select
                                            id="conservationStatus"
                                            className="wd-wildlife-filter-dropdown"
                                            value={filters.conservationStatus}
                                            onChange={(e) => handleFilterChange('conservationStatus', e.target.value)}
                                        >
                                            <option value="">All</option>
                                            <option value="Extinct">Extinct</option>
                                            <option value="endangered">Endangered</option>
                                            <option value="vulnerable">Vulnerable</option>
                                            <option value="least-concern">Least Concern</option>
                                        </select>
                                        <label htmlFor="diet">Diet:</label>
                                        <select
                                            id="diet"
                                            className="wd-wildlife-filter-dropdown"
                                            value={filters.diet}
                                            onChange={(e) => handleFilterChange('diet', e.target.value)}
                                        >
                                            <option value="">All</option>
                                            <option value="Herbivore">Herbivore</option>
                                            <option value="Carnivore">Carnivore</option>
                                            <option value="Omnivore">Omnivore</option>
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
                                        onChange={handleSearch}
                                        className="wd-wildlife-search-input"
                                        aria-label="Search wildlife"
                                    />
                                    {searchTerm ? (
                                        <button
                                            onClick={handleClearSearch}
                                            className="wd-park-clear-button"
                                            aria-label="Clear search"
                                        >
                                            <i className="fas fa-times"></i>
                                        </button>
                                    ) : (
                                        <span className="wd-wildlife-search-icon">
                                            <i className="fas fa-search"></i>
                                        </span>
                                    )}
                                </div>
                                {loading ? (
                                    <p>Loading...</p>
                                ) : error ? (
                                    <p>Error: {error}</p>
                                ) : animalsData && animalsData.length > 0 ? (
                                    <div className="wd-wildlife-grid">
                                        {animalsData.map((animal, index) => (
                                            <div className="wd-wildlife-card" key={index}>
                                                <div className="wd-wildlife-image-container">
                                                    <img
                                                        src={Buildimg(animal.image)}
                                                        alt={animal.name}
                                                        className="wd-wildlife-image"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <h3 className="wd-wildlife-name">{animal.name}</h3>
                                                <p className="wd-wildlife-habitat">Habitat: {animal.habitat}</p>
                                                <button
                                                    className="wd-wildlife-action-button"
                                                    aria-label={`Learn more about ${animal.name}`}
                                                    onClick={() => handleAnimalClick(animal._id)}
                                                >
                                                    Learn More
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="wd-wildlife-welcome">
                                        <h3>Welcome to Wildlife Explorer!</h3>
                                        <p>Search for an animal or use the filters to discover fascinating wildlife species.</p>
                                    </div>
                                )}
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