
import { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faExternalLinkAlt, faDownload, faFolderOpen } from "@fortawesome/free-solid-svg-icons";

const ImageCard = ({ selectedImage, setSelectedImage }) => {
    const [data, setData] = useState(selectedImage);

    return (
        <div className="image-details-expanded mb-3">
            <div className="col-md-2">
                <button className="back-button" onClick={() => setSelectedImage(null)}>
                    <FontAwesomeIcon icon={faArrowLeft} className="me-2" /> Back to Gallery
                </button>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="details-grid">
                        <img src={data.imageUrl} alt={data.name} className="detail-grid-image" />
                    </div>
                </div>

                <div className="col-md-4 d-flex flex-column stats-wrapper">
                    {/* Stats Container - Always at the top */}
                    <div className="stats-container">
                        <div className="d-flex justify-content-center align-items-center image-stats mb-3">
                            <span>👁️ {data.views.toLocaleString()} Views</span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center image-stats mb-3">
                            <span>❤️ {data.likes.toLocaleString()} Likes</span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center image-stats mb-3">
                            <span><FontAwesomeIcon icon={faDownload} className="me-2" /> {data.downloads.toLocaleString()} Downloads</span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center image-stats mb-3">
                            <span><FontAwesomeIcon icon={faFolderOpen} className="me-2" /> {data.collections.toLocaleString()} Collections</span>
                        </div>
                    </div>

                    <div className="spacer"></div>

                    <div className="button-container">
                        <a href={data.largeImageURL} target="_blank" rel="noopener noreferrer"
                            className="d-flex justify-content-center align-items-center download-btn">
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="me-3" /> View Full Image
                        </a>
                        <a href={data.pageURL} target="_blank" rel="noopener noreferrer"
                            className="d-flex justify-content-center align-items-center view-btn">
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" /> View on Pixabay
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ImageCard;
