
// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import Footer from '../components/FooterAdvance';
// import forest from '../assets/images/forest.jpg';
// import forest2 from '../assets/images/forest2.jpg';
// import forest3 from '../assets/images/forest3.jpg';
// import { Buildimg } from '../utlis';
// import './ExploreParksPage.css';
// import { useNavigate } from 'react-router-dom';

// function ExploreParksPage() {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [parksData, setParksData] = useState([]);

//     const navigate = useNavigate();

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     // Dummy park data (replace with API data later)
//     const parks = [
//         {
//             name: 'Manas National Park',
//             location: 'Assam, India',
//             description: 'Home to the rare Barasingha and diverse wildlife.',
//             image: forest,
//         },
//         {
//             name: 'Jim Corbett National Park',
//             location: 'Uttarakhand, India',
//             description: 'Famous for its Bengal Tiger population.',
//             image: forest2,
//         },
//         {
//             name: 'Kaziranga National Park',
//             location: 'Assam, India',
//             description: 'A UNESCO site known for the one-horned rhinoceros.',
//             image: forest3,
//         },
//         {
//             name: 'Bandhavgarh National Park',
//             location: 'Madhya Pradesh, India',
//             description: 'Renowned for its high tiger density.',
//             image: `${process.env.PUBLIC_URL}/src/assets/images/bandhavgarh.jpg`,
//         },
//     ];

//     // Filter parks based on search term
//     const filteredParks = parks.filter((park) =>
//         park.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const handleSearch = async (query) => {
//         setSearchTerm(query);
//         query = query.toLowerCase();
//         if (query.length >= 3) {
//             try {
//                 const options = {
//                     method: "GET",
//                     headers: {
//                         "Content-Type": "application/json"
//                     }
//                 };
//                 const res = await fetch(`http://localhost:6005/api/parks/name/${query}`, options);
//                 const response = await res.json();
//                 console.log("Response : ", response);
//                 setParksData(response.data.parks);
//             } catch (ex) {
//                 console.error("Error fetching species data:", ex);
//             } finally {
//                 //setLoading(false);
//             }
//         }
//     };

//     const handleParkClick = (id) => {
//         navigate(`/parkdetails/${encodeURIComponent(id)}`);
//     };

//     return (
//         <div className="wd-park-container">
//             <div className="wd-park-body-content mb-3">
//                 <Sidebar />
//                 <div className={`wd-park-main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
//                     <div className="wd-park-header">
//                         <h1 className="wd-park-header-text">EXPLORE NATIONAL PARKS</h1>
//                         <button
//                             className="wd-park-mobile-menu"
//                             onClick={toggleSidebar}
//                             aria-label="Toggle Sidebar"
//                         >
//                             ≡
//                         </button>
//                     </div>
//                     <div className="wd-park-center-main-content">
//                         <div className="wd-park-sidebar-content">
//                             <div className="wd-park-filter-section">
//                                 <h3 className="wd-park-section-title">FILTERS</h3>
//                                 <div className="wd-park-filter-options">
//                                     <label htmlFor="region">Region:</label>
//                                     <select id="region" className="wd-park-filter-dropdown">
//                                         <option value="">All</option>
//                                         <option value="assam">Assam</option>
//                                         <option value="karnataka">Karnataka</option>
//                                         <option value="uttarakhand">Uttarakhand</option>
//                                         <option value="madhya-pradesh">Madhya Pradesh</option>
//                                     </select>
//                                     <label htmlFor="wildlife">Wildlife:</label>
//                                     <select id="wildlife" className="wd-park-filter-dropdown">
//                                         <option value="">All</option>
//                                         <option value="deer">Deer</option>
//                                         <option value="tiger">Tiger</option>
//                                         <option value="rhinoceros">Rhinoceros</option>
//                                     </select>
//                                     <label htmlFor="activity">Activities:</label>
//                                     <select id="activity" className="wd-park-filter-dropdown">
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
//                                     onChange={(e) => handleSearch(e.target.value)}
//                                     className="wd-park-search-input"
//                                 />
//                                 <span className="wd-park-search-icon">🔍</span>
//                             </div>
//                             <div className="wd-park-park-grid">
//                                 {(parksData && parksData.length > 0) ? parksData.map((park, index) => (
//                                     <div className="wd-park-park-card" key={index}>
//                                         <img
//                                             src={Buildimg(park.image)}
//                                             alt={park.name}
//                                             className="wd-park-park-image"
//                                         />
//                                         <h3 className="wd-park-park-name">{park.name}</h3>
//                                         <p className="wd-park-park-location">{park.location}</p>
//                                         {/* <p className="wd-park-park-description">{park.description}</p> */}
//                                         <button
//                                             className="wd-park-action-button"
//                                             aria-label={`View details for ${park.name}`}
//                                             onClick={() => handleParkClick(park._id)}
//                                         >
//                                             View Details
//                                         </button>
//                                     </div>
//                                 )) : <p>No parks found</p>}
//                             </div>
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
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';
import Footer from '../components/FooterAdvance';
import { Buildimg } from '../utlis';
import { fetchParks, setSearchTerm, toggleSidebar, setParksData } from '../store/parkSlice';
import './ExploreParksPage.css';

function ExploreParksPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { searchTerm, parksData, error, isSidebarOpen } = useSelector((state) => state.park);

    // Debounced search handler
    // const debouncedFetchParks = useCallback(
    //     debounce((query) => {
    //         dispatch(fetchParks(query));
    //     }, 500),
    //     [dispatch]
    // );

    // // Handle search input changes
    // const handleSearch = (e) => {
    //     const query = e.target.value;
    //     dispatch(setSearchTerm(query));
    //     debouncedFetchParks(query);
    // };

    const handleSearch = async (query) => {
        dispatch(setSearchTerm(query));
        query = query.toLowerCase();
        if (query.length >= 3) {

            try {
                setLoading(true);
                const options = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                };
                const res = await fetch(`http://localhost:6005/api/parks/name/${query}`, options);
                const response = await res.json();
                console.log("Response : ", response);
                dispatch(setParksData(response.data.parks));
                setLoading(false);
            } catch (ex) {
                console.error("Error fetching species data:", ex);
                setLoading(false);
            } finally {
                //setLoading(false);
            }
        }
    };


    // Fetch all parks on initial load
    // useEffect(() => {
    //     dispatch(fetchParks(''));
    // }, [dispatch]);

    const handleParkClick = (id) => {
        navigate(`/parkdetails/${encodeURIComponent(id)}`);
    };

    return (
        <>
            {/* {loading && <Loader />} */}
            <div className="wd-park-container">
                <div className="wd-park-body-content mb-3">
                    <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => dispatch(toggleSidebar())} />
                    <div className={`wd-park-main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                        <div className="wd-park-header">
                            <h1 className="wd-park-header-text">EXPLORE NATIONAL PARKS</h1>
                            <button
                                className="wd-park-mobile-menu"
                                onClick={() => dispatch(toggleSidebar())}
                                aria-label="Toggle Sidebar"
                            >
                                ≡
                            </button>
                        </div>
                        <div className="wd-park-center-main-content">
                            <div className="wd-park-sidebar-content">
                                <div className="wd-park-filter-section">
                                    <h3 className="wd-park-section-title">FILTERS</h3>
                                    <div className="wd-park-filter-options">
                                        <label htmlFor="region">Region:</label>
                                        <select id="region" className="wd-park-filter-dropdown">
                                            <option value="">All</option>
                                            <option value="assam">Assam</option>
                                            <option value="karnataka">Karnataka</option>
                                            <option value="uttarakhand">Uttarakhand</option>
                                            <option value="madhya-pradesh">Madhya Pradesh</option>
                                        </select>
                                        <label htmlFor="wildlife">Wildlife:</label>
                                        <select id="wildlife" className="wd-park-filter-dropdown">
                                            <option value="">All</option>
                                            <option value="deer">Deer</option>
                                            <option value="tiger">Tiger</option>
                                            <option value="rhinoceros">Rhinoceros</option>
                                        </select>
                                        <label htmlFor="activity">Activities:</label>
                                        <select id="activity" className="wd-park-filter-dropdown">
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
                                        onChange={(e) => handleSearch(e.target.value)}
                                        className="wd-park-search-input"
                                        aria-label="Search national parks"
                                    />
                                    <span className="wd-park-search-icon">🔍</span>
                                </div>
                                {loading && <Loader />}
                                {error && <div className="wd-park-error">{error}</div>}
                                <div className="wd-park-park-grid">
                                    {parksData.length > 0 ? (
                                        parksData.map((park) => (
                                            <div className="wd-park-park-card" key={park._id}>
                                                <img
                                                    src={Buildimg(park.image) || 'https://via.placeholder.com/300?text=Park+Image'}
                                                    alt={park.name}
                                                    className="wd-park-park-image"
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
                                        ))
                                    ) : (
                                        !loading && <p>No parks found</p>
                                    )}
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

export default ExploreParksPage;