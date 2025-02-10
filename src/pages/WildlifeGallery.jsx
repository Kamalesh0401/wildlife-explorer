import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageCard from "../components/ImageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSpinner, faDownload, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./WildlifeGallery.css";
import { useState } from "react";

const WildlifeGallery = () => {
    const [imageList, setImageList] = useState(null);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const key = "47881857-9a836ab9e4de036a26a49459e";

    const handleSearch = async (e) => {
        const query = e.target.value?.toLowerCase().trim();
        setSearch(query);
        console.log("Search query : ", query);

        if (query.length >= 3) {
            setLoading(true);
            try {
                const imageRes = await fetch(
                    `https://pixabay.com/api/?key=${key}&q=${query}&image_type=photo`
                );
                const imageData = await imageRes.json();
                const imagetemp = imageData.hits.map((image) => ({
                    imageUrl: image.webformatURL || "",
                    tags: image.tags || "",
                    fullSize: image.largeImageURL || "",
                    likes: image.likes,
                    views: image.views,
                    comments: image.comments,
                    pageURL: image.pageURL,
                    downloads: image.downloads,
                    collections: image.collections
                }));
                setImageList(imagetemp);
            } catch (error) {
                console.error("Error fetching images:", query, error);
            } finally {
                setLoading(false);
            }
        }
        else {
            setImageList(null);
        }
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <>
            <div className="wildlife-header">
                <Header />
            </div>

            {/* Search Bar */}
            <div className="search-container">
                <div className="search-box">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search image by animal name..."
                        onChange={handleSearch}
                    />
                    <button type="submit" className="search-btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>

            {loading && (
                <div className="loading-container">
                    <FontAwesomeIcon icon={faSpinner} spin />
                    <p>Loading species...</p>
                </div>
            )}

            {selectedImage ? (
                <ImageCard selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
            ) : (
                (imageList && imageList.length > 0) ? (
                    < div className="gallery-container mb-3">
                        <div className="gallery-grid">
                            {imageList.map((image) => (
                                <div key={image.id} className="gallery-item" onClick={() => setSelectedImage(image)}>
                                    <img className="gallery-image" src={image.imageUrl} alt={image.tags} />
                                </div>
                            ))}
                        </div>
                    </div >
                ) : (
                    <div className="gallery-container-message">
                        <p className="gallery-message">{search ? "No images found" : "Search by name"}</p>
                    </div>
                )
            )}
            <div className="wildlife-footer">
                <Footer />
            </div>
        </>
    );
};

export default WildlifeGallery;


