
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './WildlifeGallery.css';
const WildlifeGallery = () => {

    const images = require.context('../assets/images', false, /\.(png|jpe?g|svg)$/);

    const imageList = images.keys().map(image => images(image));
    console.log('imageList ":', imageList);
    imageList.forEach(element => {
        console.log('element ":', element);
    });
    return (<>
        <div className='wildlife-header'>
            <Header></Header>
        </div>
        <div className="d-flex justify-content-center mt-5">
            <div className="search-box">
                <input type="text" className="search-input" placeholder="Search image by animals name" />
                <button type="submit" className="search-btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
        <div className="mt-5">
            {/* <h1>Image Gallery</h1> */}
            <div className="image-gallery">
                {imageList.map((image, index) => (
                    <img src={image} alt={`image-${index}`} key={index} className="image" />
                ))}
            </div>
        </div>
        <div className='wildlife-footer'>
            <Footer></Footer>
        </div>
    </>
    );
};

export default WildlifeGallery;