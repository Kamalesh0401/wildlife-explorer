// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import Footer from '../components/FooterAdvance';
// import Loader from '../components/Loader';
// import './WildlifePage.css';
// import { useNavigate } from 'react-router-dom';
// import { Buildimg } from '../utlis';

// function WildlifePage() {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [animalsData, setAnimalsData] = useState(null);
//     const [search, setSearch] = useState("");
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();
//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     const handleSearch = async (query) => {
//         setSearchTerm(query);
//         query = query.toLowerCase();
//         setSearch(query);

//         if (query.length >= 3) {
//             setLoading(true);
//             try {
//                 const options = {
//                     method: "GET",
//                     headers: {
//                         "Content-Type": "application/json"
//                     }
//                 };
//                 const res = await fetch(`http://localhost:6003/api/animals/name/${query}`, options);
//                 const response = await res.json();
//                 console.log("Response : ", response);

//                 setAnimalsData(response);
//             } catch (ex) {
//                 console.error("Error fetching species data:", ex);
//             } finally {
//                 setLoading(false);
//             }
//         }
//         else {

//         }
//     };

//     // Handle animal click
//     const handleAnimalClick = (id) => {
//         navigate(`/wildlifedetail/${encodeURIComponent(id)}`);
//     };

//     return (
//         <>
//             <div className="wd-wildlife-container">
//                 <div className="wd-wildlife-body-content mb-3">
//                     <Sidebar />
//                     <div className={`wd-wildlife-main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
//                         <div className="wd-wildlife-header">
//                             <h1 className="wd-wildlife-header-text">WILDLIFE SPECIES</h1>
//                             <button
//                                 className="wd-wildlife-mobile-menu"
//                                 onClick={toggleSidebar}
//                                 aria-label="Toggle Sidebar"
//                             >
//                                 ≡
//                             </button>
//                         </div>
//                         <div className="wd-wildlife-center-main-content">
//                             <div className="wd-wildlife-sidebar-content">
//                                 <div className="wd-wildlife-filter-section">
//                                     <h3 className="wd-wildlife-section-title">FILTERS</h3>
//                                     <div className="wd-wildlife-filter-options">
//                                         <label htmlFor="species">Species:</label>
//                                         <select id="species" className="wd-wildlife-filter-dropdown">
//                                             <option value="">All</option>
//                                             <option value="mammal">Mammal</option>
//                                             <option value="bird">Bird</option>
//                                             <option value="reptile">Reptile</option>
//                                         </select>
//                                         <label htmlFor="habitat">Habitat:</label>
//                                         <select id="habitat" className="wd-wildlife-filter-dropdown">
//                                             <option value="">All</option>
//                                             <option value="forest">Forest</option>
//                                             <option value="wetland">Wetland</option>
//                                             <option value="grassland">Grassland</option>
//                                         </select>
//                                         <label htmlFor="status">Conservation Status:</label>
//                                         <select id="status" className="wd-wildlife-filter-dropdown">
//                                             <option value="">All</option>
//                                             <option value="endangered">Endangered</option>
//                                             <option value="vulnerable">Vulnerable</option>
//                                             <option value="least-concern">Least Concern</option>
//                                         </select>
//                                         <label htmlFor="status">Diet :</label>
//                                         <select id="status" className="wd-wildlife-filter-dropdown">
//                                             <option value="">All</option>
//                                             <option value="herbivore">Herbivore</option>
//                                             <option value="carnivore">Carnivore</option>
//                                             <option value="omnivore">Omnivore</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="wd-wildlife-right-section">
//                                 <div className="wd-wildlife-search-bar">
//                                     <input
//                                         type="text"
//                                         placeholder="Search wildlife..."
//                                         value={searchTerm}
//                                         onChange={(e) => handleSearch(e.target.value)}
//                                         className="wd-wildlife-search-input"
//                                     />
//                                     <span className="wd-wildlife-search-icon">🔍</span>
//                                 </div>
//                                 <div className="wd-wildlife-grid">
//                                     {animalsData?.map((animal, index) => (
//                                         <div className="wd-wildlife-card" key={index}>
//                                             <div className="wd-wildlife-image-container">
//                                                 <img
//                                                     src={Buildimg(animal.image)}
//                                                     alt={animal.name}
//                                                     className="wd-wildlife-image"
//                                                 />
//                                             </div>
//                                             <h3 className="wd-wildlife-name">{animal.name}</h3>
//                                             <p className="wd-wildlife-habitat">Habitat: {animal.habitat}</p>
//                                             <button
//                                                 className="wd-wildlife-action-button"
//                                                 aria-label={`Learn more about ${animal.name}`}
//                                                 onClick={() => { handleAnimalClick(animal._id) }}
//                                             >
//                                                 Learn More
//                                             </button>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <Footer />
//             </div>
//         </>
//     );
// }

// export default WildlifePage;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAnimals, setSearchTerm, setFilter, clearSearchAndFilters, setAnimalsData } from '../store/wildlifeSlice';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';
import Footer from '../components/FooterAdvance';
import './WildlifePage.css';
import { Buildimg } from '../utlis';

function WildlifePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { searchTerm, animalsData, loading, error, filters } = useSelector((state) => state.wildlife);

    // Fetch animals when searchTerm or filters change
    // useEffect(() => {
    //     dispatch(fetchAnimals({ searchTerm, filters }));
    // }, [searchTerm, filters, dispatch]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSearch = async (query) => {
        dispatch(setSearchTerm(query));
        query = query.toLowerCase();
        if (query.length >= 3) {
            try {
                const options = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                };
                const res = await fetch(`http://localhost:6004/api/animals/name/${query}`, options);
                const response = await res.json();
                console.log("Response : ", response);
                dispatch(setAnimalsData(response));
            } catch (ex) {
                console.error("Error fetching species data:", ex);
            } finally {
                //setLoading(false);
            }
        }
    };


    const handleFilterChange = (key, value) => {
        dispatch(setFilter({ key, value }));
    };

    const handleClearSearchAndFilters = () => {
        dispatch(clearSearchAndFilters());
    };

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
                                            <option value="herbivore">Herbivore</option>
                                            <option value="carnivore">Carnivore</option>
                                            <option value="omnivore">Omnivore</option>
                                        </select>
                                        {(filters.species || filters.habitat || filters.conservationStatus || filters.diet) && (
                                            <button
                                                onClick={handleClearSearchAndFilters}
                                                className="wd-wildlife-clear-button"
                                                aria-label="Clear search and filters"
                                            >
                                                Clear Filters
                                            </button>
                                        )}
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
                                        aria-label="Search wildlife"
                                    />
                                    <span className="wd-wildlife-search-icon">🔍</span>
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
                                    <p>No animals found.</p>
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