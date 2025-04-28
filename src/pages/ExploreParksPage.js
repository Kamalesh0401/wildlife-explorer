// import React, { useState, useEffect, useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { debounce } from 'lodash';
// import Sidebar from '../components/Sidebar';
// import Loader from '../components/Loader';
// import Footer from '../components/FooterAdvance';
// import { Buildimg } from '../utlis';
// import { fetchParks, setSearchTerm, toggleSidebar, setParksData } from '../store/parkSlice';
// import './ExploreParksPage.css';

// function ExploreParksPage() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [loading, setLoading] = useState(false);
//     const { searchTerm, parksData, error, isSidebarOpen } = useSelector((state) => state.park);

//     // Debounced search handler
//     // const debouncedFetchParks = useCallback(
//     //     debounce((query) => {
//     //         dispatch(fetchParks(query));
//     //     }, 500),
//     //     [dispatch]
//     // );

//     // // Handle search input changes
//     // const handleSearch = (e) => {
//     //     const query = e.target.value;
//     //     dispatch(setSearchTerm(query));
//     //     debouncedFetchParks(query);
//     // };

//     const handleSearch = async (query) => {
//         dispatch(setSearchTerm(query));
//         query = query.toLowerCase();
//         if (query.length >= 3) {

//             try {
//                 setLoading(true);
//                 const options = {
//                     method: "GET",
//                     headers: {
//                         "Content-Type": "application/json"
//                     }
//                 };
//                 const res = await fetch(`http://localhost:6005/api/parks/name/${query}`, options);
//                 const response = await res.json();
//                 console.log("Response : ", response);
//                 dispatch(setParksData(response.data.parks));
//                 setLoading(false);
//             } catch (ex) {
//                 console.error("Error fetching species data:", ex);
//                 setLoading(false);
//             } finally {
//                 //setLoading(false);
//             }
//         }
//     };


//     // Fetch all parks on initial load
//     // useEffect(() => {
//     //     dispatch(fetchParks(''));
//     // }, [dispatch]);

//     const handleParkClick = (id) => {
//         navigate(`/parkdetails/${encodeURIComponent(id)}`);
//     };

//     return (
//         <>
//             {/* {loading && <Loader />} */}
//             <div className="wd-park-container">
//                 <div className="wd-park-body-content mb-3">
//                     <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => dispatch(toggleSidebar())} />
//                     <div className={`wd-park-main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
//                         <div className="wd-park-header">
//                             <h1 className="wd-park-header-text">EXPLORE NATIONAL PARKS</h1>
//                             <button
//                                 className="wd-park-mobile-menu"
//                                 onClick={() => dispatch(toggleSidebar())}
//                                 aria-label="Toggle Sidebar"
//                             >
//                                 ≡
//                             </button>
//                         </div>
//                         <div className="wd-park-center-main-content">
//                             <div className="wd-park-sidebar-content">
//                                 <div className="wd-park-filter-section">
//                                     <h3 className="wd-park-section-title">FILTERS</h3>
//                                     <div className="wd-park-filter-options">
//                                         <label htmlFor="region">Region:</label>
//                                         <select id="region" className="wd-park-filter-dropdown">
//                                             <option value="">All</option>
//                                             <option value="assam">Assam</option>
//                                             <option value="karnataka">Karnataka</option>
//                                             <option value="uttarakhand">Uttarakhand</option>
//                                             <option value="madhya-pradesh">Madhya Pradesh</option>
//                                         </select>
//                                         <label htmlFor="wildlife">Wildlife:</label>
//                                         <select id="wildlife" className="wd-park-filter-dropdown">
//                                             <option value="">All</option>
//                                             <option value="deer">Deer</option>
//                                             <option value="tiger">Tiger</option>
//                                             <option value="rhinoceros">Rhinoceros</option>
//                                         </select>
//                                         <label htmlFor="activity">Activities:</label>
//                                         <select id="activity" className="wd-park-filter-dropdown">
//                                             <option value="">All</option>
//                                             <option value="hiking">Hiking</option>
//                                             <option value="safari">Safari</option>
//                                             <option value="bird-watching">Bird Watching</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="wd-park-right-section">
//                                 <div className="wd-park-search-bar">
//                                     <input
//                                         type="text"
//                                         placeholder="Search parks..."
//                                         value={searchTerm}
//                                         onChange={(e) => handleSearch(e.target.value)}
//                                         className="wd-park-search-input"
//                                         aria-label="Search national parks"
//                                     />
//                                     <span className="wd-park-search-icon">🔍</span>
//                                 </div>
//                                 {loading && <Loader />}
//                                 {error && <div className="wd-park-error">{error}</div>}
//                                 <div className="wd-park-park-grid">
//                                     {parksData.length > 0 ? (
//                                         parksData.map((park) => (
//                                             <div className="wd-park-park-card" key={park._id}>
//                                                 <img
//                                                     src={Buildimg(park.image) || 'https://via.placeholder.com/300?text=Park+Image'}
//                                                     alt={park.name}
//                                                     className="wd-park-park-image"
//                                                 />
//                                                 <h3 className="wd-park-park-name">{park.name}</h3>
//                                                 <p className="wd-park-park-location">{park.location}</p>
//                                                 <button
//                                                     className="wd-park-action-button"
//                                                     aria-label={`View details for ${park.name}`}
//                                                     onClick={() => handleParkClick(park._id)}
//                                                 >
//                                                     View Details
//                                                 </button>
//                                             </div>
//                                         ))
//                                     ) : (
//                                         !loading && <p>No parks found</p>
//                                     )}
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

// export default ExploreParksPage;


import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';
import Footer from '../components/FooterAdvance';
import { Buildimg } from '../utlis';
import { setSearchTerm, toggleSidebar, setParksData, clearSearch } from '../store/parkSlice';
import './ExploreParksPage.css';

function ExploreParksPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState({ region: '', wildlife: '', activity: '' });
    const { searchTerm, parksData, error, isSidebarOpen } = useSelector((state) => state.park);

    // Debounced search handler
    const debouncedFetchParks = useCallback(
        debounce((query, filters) => {
            fetchParks(query, filters);
        }, 500),
        []
    );

    // Fetch parks with search term and filters
    const fetchParks = async (query, { region, wildlife, activity }) => {
        if (!query && !region && !wildlife && !activity) {
            dispatch(clearSearch());
            return;
        }
        try {
            setLoading(true);
            const queryParams = new URLSearchParams({
                name: query?.toLowerCase() || '',
                region: region || '',
                wildlife: wildlife || '',
                activity: activity || ''
            }).toString();
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const res = await fetch(`http://localhost:6005/api/parks?${queryParams}`, options);
            const response = await res.json();
            dispatch(setParksData(response.data.parks));
        } catch (ex) {
            console.error('Error fetching parks data:', ex);
        } finally {
            setLoading(false);
        }
    };

    // Handle search input changes
    const handleSearch = (e) => {
        const query = e.target.value;
        dispatch(setSearchTerm(query));
        debouncedFetchParks(query, filters);
    };

    // Handle filter changes
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const updatedFilters = { ...filters, [name]: value };
        setFilters(updatedFilters);
        debouncedFetchParks(searchTerm, updatedFilters);
    };

    // Clear search and filters
    const handleClearSearch = () => {
        dispatch(clearSearch());
        setFilters({ region: '', wildlife: '', activity: '' });
    };

    // Navigate to park details
    const handleParkClick = (id) => {
        navigate(`/parkdetails/${encodeURIComponent(id)}`);
    };

    return (
        <div className="wd-park-container">
            <div className="wd-park-body-content mb-3">
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => dispatch(toggleSidebar())} />
                <div className={`wd-park-main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                    <div className="wd-park-header">
                        <h1 className="wd-park-header-text">Explore National Parks</h1>
                        <button
                            className="wd-park-mobile-menu"
                            onClick={() => dispatch(toggleSidebar())}
                            aria-label="Toggle Sidebar"
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div className="wd-park-center-main-content">
                        <div className="wd-park-sidebar-content">
                            <div className="wd-park-filter-section">
                                <h3 className="wd-park-section-title">Filters</h3>
                                <div className="wd-park-filter-options">
                                    <label htmlFor="region">Region:</label>
                                    <select
                                        id="region"
                                        name="region"
                                        value={filters.region}
                                        onChange={handleFilterChange}
                                        className="wd-park-filter-dropdown"
                                    >
                                        <option value="">All</option>
                                        <option value="assam">Assam</option>
                                        <option value="karnataka">Karnataka</option>
                                        <option value="uttarakhand">Uttarakhand</option>
                                        <option value="madhya-pradesh">Madhya Pradesh</option>
                                    </select>
                                    <label htmlFor="wildlife">Wildlife:</label>
                                    <select
                                        id="wildlife"
                                        name="wildlife"
                                        value={filters.wildlife}
                                        onChange={handleFilterChange}
                                        className="wd-park-filter-dropdown"
                                    >
                                        <option value="">All</option>
                                        <option value="deer">Deer</option>
                                        <option value="tiger">Tiger</option>
                                        <option value="rhinoceros">Rhinoceros</option>
                                    </select>
                                    <label htmlFor="activity">Activities:</label>
                                    <select
                                        id="activity"
                                        name="activity"
                                        value={filters.activity}
                                        onChange={handleFilterChange}
                                        className="wd-park-filter-dropdown"
                                    >
                                        <option value="">All</option>
                                        <option value="hiking">Hiking</option>
                                        <option value="safari">Safari</option>
                                        <option value="bird-watching">Bird Watching</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="wd-park-right-section">
                            <div className="wd-park-search-bar">
                                <input
                                    type="text"
                                    placeholder="Search parks by name..."
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    className="wd-park-search-input"
                                    aria-label="Search national parks"
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
                                    <span className="wd-park-search-icon">
                                        <i className="fas fa-search"></i>
                                    </span>
                                )}
                            </div>
                            {loading ? (
                                <Loader />
                            ) : error ? (
                                <div className="wd-park-error">{error}</div>
                            ) : parksData.length > 0 ? (
                                <div className="wd-park-park-grid">
                                    {parksData.map((park) => (
                                        <div className="wd-park-park-card" key={park._id}>
                                            <img
                                                src={Buildimg(park.image) || 'https://via.placeholder.com/300?text=Park+Image'}
                                                alt={park.name}
                                                className="wd-park-park-image"
                                                loading="lazy"
                                            />
                                            <h3 className="wd-park-park-name">{park.name}</h3>
                                            <p className="wd-park-park-location">{park.location}</p>
                                            <button
                                                className="wd-park-action-button"
                                                aria-label={`View details for ${park.name}`}
                                                onClick={() => handleParkClick(park._id)}
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="wd-park-welcome">
                                    <h3>Welcome to Park Explorer!</h3>
                                    <p>Search for a national park or use the filters to discover amazing parks and their wildlife.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ExploreParksPage;