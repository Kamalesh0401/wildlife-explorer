// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { setforestData, setSearchTerm, clearSearch } from '../store/forestSlice';
// import Sidebar from '../components/Sidebar';
// import Loader from '../components/Loader';
// import Footer from '../components/FooterAdvance';
// import './ForestPage.css';
// import { Buildimg } from '../utlis';

// function ForestExplorer() {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const { searchTerm, forestData, error } = useSelector((state) => state.forest);

//     // // Fetch forests when searchTerm changes
//     // useEffect(() => {
//     //     //dispatch(fetchForests(searchTerm));
//     // }, [searchTerm, dispatch]);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     const handleSearch = async (query) => {
//         dispatch(setSearchTerm(query));
//         if (!query) return;
//         if (query.length >= 3) {
//             query = query?.toLowerCase();
//             setLoading(true);
//             try {
//                 const options = {
//                     method: "GET",
//                     headers: {
//                         "Content-Type": "application/json"
//                     }
//                 };
//                 const res = await fetch(`http://localhost:6003/api/forests/name/${query}`, options);
//                 const response = await res.json();
//                 console.log("Response : ", response);
//                 dispatch(setforestData(response?.data?.forests));

//             } catch (ex) {
//                 console.error("Error fetching species data:", ex);
//             } finally {
//                 setLoading(false);
//             }
//         }
//         else {

//         }
//     };

//     const handleForestClick = (id) => {
//         navigate(`/forestdetails/${encodeURIComponent(id)}`);
//     };

//     const handleClearSearch = () => {
//         dispatch(clearSearch());
//     };

//     return (
//         <div className="wd-forest-container">
//             <div className="wd-forest-body-content mb-3">
//                 <Sidebar />
//                 <div className={`wd-forest-main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
//                     <div className="wd-forest-header">
//                         <h1 className="wd-forest-header-text">EXPLORE FORESTS</h1>
//                         <button
//                             className="wd-forest-mobile-menu"
//                             onClick={toggleSidebar}
//                             aria-label="Toggle Sidebar"
//                         >
//                             ≡
//                         </button>
//                     </div>
//                     <div className="wd-forest-center-main-content">
//                         <div className="wd-forest-sidebar-content">
//                             <div className="wd-forest-info-section">
//                                 <h3 className="wd-forest-section-title">FOREST INFO</h3>
//                                 <p className="wd-forest-info-text">
//                                     Forests cover about 31% of the Earth's land surface, playing a vital role in carbon sequestration and oxygen production.
//                                 </p>
//                                 <p className="wd-forest-info-text">
//                                     They are home to 80% of the world's terrestrial biodiversity, including countless species of plants, animals, and microorganisms.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="wd-forest-right-section">
//                             <div className="wd-forest-search-bar">
//                                 <input
//                                     type="text"
//                                     placeholder="Search forests..."
//                                     value={searchTerm}
//                                     onChange={(e) => handleSearch(e.target.value)}
//                                     className="wd-forest-search-input"
//                                 />
//                                 {searchTerm ? (
//                                     <button
//                                         onClick={handleClearSearch}
//                                         className="wd-forest-clear-button"
//                                         aria-label="Clear search"
//                                     >
//                                         ✕
//                                     </button>
//                                 ) : <button
//                                     onClick={handleSearch}
//                                     className="wd-forest-search-icon"
//                                     aria-label="Handle search"
//                                 >
//                                     🔍
//                                 </button>}
//                             </div>
//                             {loading ? (
//                                 <Loader />
//                             ) : error ? (
//                                 <p>Error: {error}</p>
//                             ) : forestData && forestData.length > 0 ? (
//                                 <div className="wd-forest-grid">
//                                     {forestData?.map((forest, index) => (
//                                         <div className="wd-forest-card" key={index}>
//                                             <img
//                                                 src={Buildimg(forest.image)}
//                                                 alt={forest.name}
//                                                 className="wd-forest-image"
//                                             />
//                                             <h3 className="wd-forest-name">{forest.name}</h3>
//                                             <p className="wd-forest-description">{forest.overview}</p>
//                                             <button
//                                                 className="wd-forest-action-button"
//                                                 aria-label={`View details for ${forest.name}`}
//                                                 onClick={() => handleForestClick(forest._id)}
//                                             >
//                                                 View Details
//                                             </button>
//                                         </div>
//                                     ))}
//                                 </div>
//                             ) : (
//                                 <p>No forests found.</p>
//                             )}
//                             <section className="wd-forest-additional-info">
//                                 <h3 className="wd-forest-section-title">Why Forests Matter</h3>
//                                 <p className="wd-forest-info-text">
//                                     Forests are critical for global ecosystems. They regulate climate, store carbon, and provide resources like timber, food, and medicine. Protecting forests helps combat climate change and preserves habitats for future generations.
//                                 </p>
//                             </section>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default ForestExplorer;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setforestData, setSearchTerm, clearSearch } from '../store/forestSlice';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';
import Footer from '../components/FooterAdvance';
import './ForestPage.css';
import { Buildimg } from '../utlis';

function ForestExplorer() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { searchTerm, forestData, error } = useSelector((state) => state.forest);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // // Fetch forests when searchTerm changes
    // useEffect(() => {
    //     //dispatch(fetchForests(searchTerm));
    // }, [searchTerm, dispatch]);

    const handleSearch = async (query) => {
        dispatch(setSearchTerm(query));
        if (!query) return;
        if (query.length >= 3) {
            query = query?.toLowerCase();
            setLoading(true);
            try {
                const options = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                };
                const res = await fetch(`http://localhost:6003/api/forests/name/${query}`, options);
                const response = await res.json();
                dispatch(setforestData(response?.data?.forests));
            } catch (ex) {
                console.error("Error fetching forest data:", ex);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleForestClick = (id) => {
        navigate(`/forestdetails/${encodeURIComponent(id)}`);
    };

    const handleClearSearch = () => {
        dispatch(clearSearch());
    };

    return (
        <div className="wd-forest-container">
            <div className="wd-forest-body-content">
                <Sidebar isOpen={isSidebarOpen} />
                <div className={`wd-forest-main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                    <div className="wd-forest-header">
                        <h1 className="wd-forest-header-text">Explore Forests</h1>
                        <button
                            className="wd-forest-mobile-menu"
                            onClick={toggleSidebar}
                            aria-label="Toggle Sidebar"
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div className="wd-forest-center-main-content">
                        <div className="wd-forest-sidebar-content">
                            <div className="wd-forest-info-section">
                                <h3 className="wd-forest-section-title">Forest Insights</h3>
                                <p className="wd-forest-info-text">
                                    Forests cover 31% of Earth's land, acting as vital carbon sinks and oxygen producers.
                                </p>
                                <p className="wd-forest-info-text">
                                    They host 80% of terrestrial biodiversity, supporting countless species of flora and fauna.
                                </p>
                            </div>
                        </div>
                        <div className="wd-forest-right-section">
                            <div className="wd-forest-search-bar">
                                <i className="fas fa-search wd-forest-search-icon"></i>
                                <input
                                    type="text"
                                    placeholder="Search for forests by name..."
                                    value={searchTerm}
                                    onChange={(e) => handleSearch(e.target.value)}
                                    className="wd-forest-search-input"
                                />
                                {searchTerm && (
                                    <button
                                        onClick={handleClearSearch}
                                        className="wd-forest-clear-button"
                                        aria-label="Clear search"
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                )}
                            </div>
                            {loading ? (
                                <Loader />
                            ) : error ? (
                                <p className="wd-forest-error">Error: {error}</p>
                            ) : forestData && forestData.length > 0 ? (
                                <div className="wd-forest-grid">
                                    {forestData?.map((forest, index) => (
                                        <div className="wd-forest-card" key={index}>
                                            <img
                                                src={Buildimg(forest.image)}
                                                alt={forest.name}
                                                className="wd-forest-image"
                                            />
                                            <h3 className="wd-forest-name">{forest.name}</h3>
                                            <p className="wd-forest-description">{forest.overview}</p>
                                            <button
                                                className="wd-forest-action-button"
                                                aria-label={`View details for ${forest.name}`}
                                                onClick={() => handleForestClick(forest._id)}
                                            >
                                                Discover More
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="wd-forest-welcome">
                                    <h3 className="wd-forest-welcome-title">Discover Forests</h3>
                                    <p className="wd-forest-welcome-text">
                                        Type a forest name in the search bar above to explore the world's diverse forests and their unique ecosystems.
                                    </p>
                                </div>
                            )}
                            <section className="wd-forest-additional-info">
                                <h3 className="wd-forest-section-title">Why Forests Matter</h3>
                                <p className="wd-forest-info-text">
                                    Forests are the lungs of our planet, regulating climate, storing carbon, and providing resources like timber and medicine. Protecting them ensures a sustainable future.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ForestExplorer;