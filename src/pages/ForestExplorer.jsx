
import Header from '../components/Header';
import Footer from '../components/Footer';
import forestvideo from '../assets/images/forestvideo.mp4';
import forest from '../assets/images/forest.jpg';
import forest4 from '../assets/images/forest4.jpg';
import forest2 from '../assets/images/forest2.jpg';
import forest3 from '../assets/images/forest3.jpg';
import './style.css';


import './ForestExplorer.css'; // Import CSS for styling

const ForestExplorer = () => {

    const forestArray = [
        { name: "Tropical Rainforest", explanation: 'Home to the richest biodiversity on Earth, tropical forests are a treasure trove of life.', image: forest2, style: 'fade-down' },
        { name: "Temperate Rainforest", explanation: "These forests are known for their stunning seasonal changes and diverse wildlife.", image: forest2, style: 'fade-right' },
        { name: "Boreal Forest", explanation: "Also known as taiga, these forests are located in colder regions of the world.", image: forest2, style: 'fade-up' },
        { name: "Tropical Deciduous Forest", explanation: "Forests that shed their leaves in the dry season, found in tropical regions.", image: forest2, style: 'fade-left' },
        { name: "Temperate Deciduous Forest", explanation: "Forests in temperate regions with trees that shed leaves seasonally.", image: forest2, style: 'fade-up-right' },
        { name: "Mangrove Forest", explanation: "Coastal forests with salt-tolerant trees growing in brackish water.", image: forest2, style: 'fade-up-left' },
        { name: "Montane Forest", explanation: "Forests found at high altitudes, with varying vegetation based on elevation.", image: forest2, style: 'fade-down-right' },
        { name: "Savanna Forest", explanation: "Scattered trees in tropical grasslands with distinct wet and dry seasons.", image: forest2, style: 'fade-down-left' },
        { name: "Coniferous Forest", explanation: "Forests dominated by conifer trees like pines, spruces, and firs, in cool climates.", image: forest2, style: 'flip-left' },
        { name: "Dry Forest", explanation: "Found in arid regions, these forests have drought-resistant vegetation.", image: forest2, style: 'flip-right' },
        { name: "Mediterranean Forest", explanation: "Found in Mediterranean climates, with evergreen and drought-adapted vegetation.", image: forest2, style: 'flip-up' },
        { name: "Subtropical Forest", explanation: "Located in subtropical regions, with a mix of tropical and temperate species.", image: forest2, style: 'flip-down' },
        { name: "Flooded Forest", explanation: "Forests that are seasonally or permanently flooded, like in river deltas.", image: forest2, style: 'zoom-in' },
        { name: "Temperate Mixed Forest", explanation: "Combination of deciduous and coniferous trees, with moderate climates.", image: forest2, style: 'zoom-out' },
        { name: "Plantation Forest", explanation: "Artificially planted forests for timber, paper, or conservation purposes.", image: forest2, style: 'zoom-in-right' },
    ];

    return (
        <>
            <div className="forest-header">
                <Header />
            </div>

            <div className="forest-container">
                {/* Hero Section */}
                <section className="forest-hero animate fade-in">
                    <h1>Welcome to the Forest Explorer</h1>
                    <p>
                        Embark on a journey through lush greenery, towering trees, and the magical wildlife of our forests.
                    </p>
                </section>

                {/* Forest Types Section */}
                <section className="forest-types animate slide-up">
                    <h2>Types of Forests</h2>
                    <div className="forest-grid">
                        {forestArray.map((element, index) => {
                            console.log('element : ', element);
                            return (
                                <div data-aos={element.style} key={index} className="forest-card">
                                    <img src={element.image} alt={element.name} />
                                    <h3>{element.name}</h3>
                                    <p>{element.explanation}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Video Section */}
                <section className="forest-video animate zoom-in">
                    <h2>Explore the Beauty of Forests</h2>
                    <video controls>
                        <source src={forestvideo} type="video/mp4" />
                    </video>
                </section>

                {/* Conservation Section */}
                <section className="forest-conservation animate slide-up">
                    <h2>Why Forest Conservation Matters</h2>
                    <p>
                        Forests play a crucial role in maintaining the Earth's ecological balance. They absorb carbon dioxide,
                        produce oxygen, and provide habitats for countless species. Conserving forests is vital for our planet's
                        future.
                    </p>
                </section>
            </div>

            <div className="forest-footer">
                <Footer />
            </div>
        </>
    );
};


export default ForestExplorer;