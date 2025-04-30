// import React, { useState, useEffect, useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { debounce } from 'lodash';
// import Sidebar from '../components/Sidebar';
// import Loader from '../components/Loader';
// import Footer from '../components/FooterAdvance';
// import { Buildimg } from '../utlis';
// import { setSearchTerm, toggleSidebar, setParksData, clearSearch } from '../store/parkSlice';
// import './ExploreParksPage.css';

// function ExploreParksPage() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [loading, setLoading] = useState(false);
//     const [filters, setFilters] = useState({ region: '', wildlife: '', activity: '' });
//     const { searchTerm, parksData, error, isSidebarOpen } = useSelector((state) => state.park);

//     // Debounced search handler
//     const debouncedFetchParks = useCallback(
//         debounce((query, filters) => {
//             fetchParks(query, filters);
//         }, 500),
//         []
//     );

//     // Fetch parks with search term and filters
//     const fetchParks = async (query, { region, wildlife, activity }) => {
//         if (!query && !region && !wildlife && !activity) {
//             dispatch(clearSearch());
//             return;
//         }
//         try {
//             setLoading(true);
//             const queryParams = new URLSearchParams({
//                 name: query?.toLowerCase() || '',
//                 region: region || '',
//                 wildlife: wildlife || '',
//                 activity: activity || ''
//             }).toString();
//             const options = {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             };
//             const res = await fetch(`http://localhost:6005/api/parks?${queryParams}`, options);
//             const response = await res.json();
//             dispatch(setParksData(response.data.parks));
//         } catch (ex) {
//             console.error('Error fetching parks data:', ex);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Handle search input changes
//     const handleSearch = (e) => {
//         const query = e.target.value;
//         dispatch(setSearchTerm(query));
//         debouncedFetchParks(query, filters);
//     };

//     // Handle filter changes
//     const handleFilterChange = (e) => {
//         const { name, value } = e.target;
//         const updatedFilters = { ...filters, [name]: value };
//         setFilters(updatedFilters);
//         debouncedFetchParks(searchTerm, updatedFilters);
//     };

//     // Clear search and filters
//     const handleClearSearch = () => {
//         dispatch(clearSearch());
//         setFilters({ region: '', wildlife: '', activity: '' });
//     };

//     // Navigate to park details
//     const handleParkClick = (id) => {
//         navigate(`/parkdetails/${encodeURIComponent(id)}`);
//     };

//     return (
//         <div className="wd-park-container">
//             <div className="wd-park-body-content mb-3">
//                 <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => dispatch(toggleSidebar())} />
//                 <div className={`wd-park-main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
//                     <div className="wd-park-header">
//                         <h1 className="wd-park-header-text">Explore National Parks</h1>
//                         <button
//                             className="wd-park-mobile-menu"
//                             onClick={() => dispatch(toggleSidebar())}
//                             aria-label="Toggle Sidebar"
//                         >
//                             <i className="fas fa-bars"></i>
//                         </button>
//                     </div>
//                     <div className="wd-park-center-main-content">
//                         <div className="wd-park-sidebar-content">
//                             <div className="wd-park-filter-section">
//                                 <h3 className="wd-park-section-title">Filters</h3>
//                                 <div className="wd-park-filter-options">
//                                     <label htmlFor="region">Region:</label>
//                                     <select
//                                         id="region"
//                                         name="region"
//                                         value={filters.region}
//                                         onChange={handleFilterChange}
//                                         className="wd-park-filter-dropdown"
//                                     >
//                                         <option value="">All</option>
//                                         <option value="assam">Assam</option>
//                                         <option value="karnataka">Karnataka</option>
//                                         <option value="uttarakhand">Uttarakhand</option>
//                                         <option value="madhya-pradesh">Madhya Pradesh</option>
//                                     </select>
//                                     <label htmlFor="wildlife">Wildlife:</label>
//                                     <select
//                                         id="wildlife"
//                                         name="wildlife"
//                                         value={filters.wildlife}
//                                         onChange={handleFilterChange}
//                                         className="wd-park-filter-dropdown"
//                                     >
//                                         <option value="">All</option>
//                                         <option value="deer">Deer</option>
//                                         <option value="tiger">Tiger</option>
//                                         <option value="rhinoceros">Rhinoceros</option>
//                                     </select>
//                                     <label htmlFor="activity">Activities:</label>
//                                     <select
//                                         id="activity"
//                                         name="activity"
//                                         value={filters.activity}
//                                         onChange={handleFilterChange}
//                                         className="wd-park-filter-dropdown"
//                                     >
//                                         <option value="">All</option>
//                                         <option value="hiking">Hiking</option>
//                                         <option value="safari">Safari</option>
//                                         <option value="bird-watching">Bird Watching</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="wd-park-right-section">
//                             <div className="wd-park-search-bar">
//                                 <input
//                                     type="text"
//                                     placeholder="Search parks..."
//                                     value={searchTerm}
//                                     onChange={handleSearch}
//                                     className="wd-park-search-input"
//                                     aria-label="Search national parks"
//                                 />
//                                 {searchTerm ? (
//                                     <button
//                                         onClick={handleClearSearch}
//                                         className="wd-park-clear-button"
//                                         aria-label="Clear search"
//                                     >
//                                         <i className="fas fa-times"></i>
//                                     </button>
//                                 ) : (
//                                     <span className="wd-park-search-icon">
//                                         <i className="fas fa-search"></i>
//                                     </span>
//                                 )}
//                             </div>
//                             {loading ? (
//                                 <Loader />
//                             ) : error ? (
//                                 <div className="wd-park-error">{error}</div>
//                             ) : parksData.length > 0 ? (
//                                 <div className="wd-park-park-grid">
//                                     {parksData.map((park) => (
//                                         <div className="wd-park-park-card" key={park._id}>
//                                             <img
//                                                 src={Buildimg(park.image) || 'https://via.placeholder.com/300?text=Park+Image'}
//                                                 alt={park.name}
//                                                 className="wd-park-park-image"
//                                                 loading="lazy"
//                                             />
//                                             <h3 className="wd-park-park-name">{park.name}</h3>
//                                             <p className="wd-park-park-location">{park.location}</p>
//                                             <button
//                                                 className="wd-park-action-button"
//                                                 aria-label={`View details for ${park.name}`}
//                                                 onClick={() => handleParkClick(park._id)}
//                                             >
//                                                 View Details
//                                             </button>
//                                         </div>
//                                     ))}
//                                 </div>
//                             ) : (
//                                 <div className="wd-park-welcome">
//                                     <h3>Welcome to Park Explorer!</h3>
//                                     <p>Search for a national park or use the filters to discover amazing parks and their wildlife.</p>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default ExploreParksPage;






import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import { Helmet } from "react-helmet-async";
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
                headers: { 'Content-Type': 'application/json' }
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
            <Helmet>
                <title>Explore National Parks - Wildlife Explorer</title>
                <meta name="description" content="Discover national parks with Wildlife Explorer. Search and filter by region, wildlife, or activities to plan your nature adventure." />
                <meta name="keywords" content="national parks, wildlife, nature, adventure, conservation, travel, hiking, safari, bird watching" />
                <meta name="author" content="Wildlife Explorer Team" />
                <meta property="og:title" content="Explore National Parks - Wildlife Explorer" />
                <meta property="og:description" content="Find and explore national parks with Wildlife Explorer. Filter by region, wildlife, or activities to discover your next adventure." />
                <meta property="og:image" content="https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745430379/roe-deer.jpg" />
                <meta property="og:url" content="https://www.wildlifeexplorer.com/explorepark" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Explore National Parks - Wildlife Explorer" />
                <meta name="twitter:description" content="Search and filter national parks by region, wildlife, or activities with Wildlife Explorer." />
                <meta name="twitter:image" content="https://res.cloudinary.com/dhwlzmuhm/image/upload/v1745430379/roe-deer.jpg" />
            </Helmet>
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
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="West Bengal">West Bengal</option>
                                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Jammu & Kashmir">Jammu and Kashmir</option>
                                        <option value="Ladakh">Ladakh</option>
                                        <option value="Lakshadweep">Lakshadweep</option>
                                        <option value="pudPuducherryucherry">Puducherry</option>
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
                                        <option value="6807796a07e4b2ba5464f5c6">Asian Elephant</option>
                                        <option value="6807796707e4b2ba5464f5a1">Tiger</option>
                                        <option value="6807798507e4b2ba5464f685">Arctic Wolf</option>
                                        <option value="6807796707e4b2ba5464f5a7">White Tiger</option>
                                        <option value="6807796c07e4b2ba5464f5e0">Leopard</option>
                                        <option value="6807796707e4b2ba5464f5a1">Tiger</option>
                                        <option value="6807798b07e4b2ba5464f70b">Fox</option>
                                        <option value="6807797707e4b2ba5464f62f">Deer</option>
                                        <option value="6807796a07e4b2ba5464f5cb">Indian Elephant</option>
                                        <option value="680779a407e4b2ba5464f7ba">Indian Giant Squirrel</option>
                                        <option value="6807799f07e4b2ba5464f789">Pangolin</option>
                                        <option value="6807796a07e4b2ba5464f5c6">Asian Elephant</option>
                                        <option value="6807796c07e4b2ba5464f5e7">Snow Leopard</option>
                                        <option value="6807798e07e4b2ba5464f725">Striped Hyena</option>
                                        <option value="6807799807e4b2ba5464f781">Macaque</option>
                                        <option value="68077b0507e4b2ba5464fcc3">Dhole</option>
                                        <option value="680779b507e4b2ba5464f80b">Vulture</option>
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
                                    placeholder="Search parks..."
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
                                            {/* <h versatile ecosystems and unique wildlife./> */}
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
                    <div className="wd-park-guidelines-section">
                        <h2 className="wd-park-section-title">Visitor Guidelines</h2>
                        <ul className="wd-park-guidelines-list">
                            <li className="wd-park-guideline-item">
                                <i className="fas fa-volume-mute"></i> Maintain silence during safaris to avoid disturbing wildlife
                            </li>
                            <li className="wd-park-guideline-item">
                                <i className="fas fa-car-side"></i> Stay inside vehicles at all times unless specifically permitted otherwise
                            </li>
                            <li className="wd-park-guideline-item">
                                <i className="fas fa-tshirt"></i> Wear earthy/neutral colored clothing (avoid bright colors and perfumes)
                            </li>
                            <li className="wd-park-guideline-item">
                                <i className="fas fa-camera"></i> No flash photography allowed
                            </li>
                            <li className="wd-park-guideline-item">
                                <i className="fas fa-ban"></i> No feeding of animals
                            </li>
                            <li className="wd-park-guideline-item">
                                <i className="fas fa-tint"></i> Carry water and sun protection
                            </li>
                            <li className="wd-park-guideline-item">
                                <i className="fas fa-user-tie"></i> Follow all instructions from park guides and forest staff
                            </li>
                            <li className="wd-park-guideline-item">
                                <i className="fas fa-trash-alt"></i> Do not litter - carry back all trash
                            </li>
                            <li className="wd-park-guideline-item">
                                <i className="fas fa-shield-alt"></i> Maintain minimum safe distance from all animals
                            </li>
                            <li className="wd-park-guideline-item">
                                <i className="fas fa-calendar-alt"></i> Book safaris well in advance (3-6 months) during peak season
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ExploreParksPage;
