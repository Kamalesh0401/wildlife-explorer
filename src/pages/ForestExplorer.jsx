
import Header from '../components/Header';
import Footer from '../components/Footer';
import forestvideo from '../assets/images/forestvideo.mp4';
import temperaturerainforest from '../assets/images/temperature-rainforest.jpg';
import tropicalrainforest from '../assets/images/tropical-rainforest.jpg';
import forest2 from '../assets/images/forest2.jpg';
import borealforest from '../assets/images/boreal-forest.jpg';
import tropicaldeciduousforest from '../assets/images/tropical-deciduous-forest.jpg';
import temperatedeciduousforest from '../assets/images/temperate-deciduous-forest.jpg';
import mangroveforest from '../assets/images/mangrove-forest.jpg';
import montaneforest from '../assets/images/montane-forest.jpg';
import savannaforest from '../assets/images/savanna-forest.jpg';
import coniferousforest from '../assets/images/coniferous-forest.jpg';
import dryforest from '../assets/images/dry-forest.jpg';
import mediterraneanforest from '../assets/images/mediterranean-forest.jpg';
import './style.css';


import './ForestExplorer.css'; // Import CSS for styling

const ForestExplorer = () => {

    const forestArray = [
        { name: "Tropical Rainforest", explanation: 'Home to the richest biodiversity on Earth, tropical forests are a treasure trove of life.', image: tropicalrainforest, style: 'fade-down' },
        { name: "Temperate Rainforest", explanation: "These forests are known for their stunning seasonal changes and diverse wildlife.", image: temperaturerainforest, style: 'fade-down' },
        { name: "Boreal Forest", explanation: "Also known as taiga, these forests are located in colder regions of the world.", image: borealforest, style: 'fade-down' },
        { name: "Tropical Deciduous Forest", explanation: "Forests that shed their leaves in the dry season, found in tropical regions.", image: tropicaldeciduousforest, style: 'fade-up' },
        { name: "Temperate Deciduous Forest", explanation: "Forests in temperate regions with trees that shed leaves seasonally.", image: temperatedeciduousforest, style: 'fade-up' },
        { name: "Mangrove Forest", explanation: "Coastal forests with salt-tolerant trees growing in brackish water.", image: mangroveforest, style: 'fade-up' },
        { name: "Montane Forest", explanation: "Forests found at high altitudes, with varying vegetation based on elevation.", image: montaneforest, style: 'zoom-out' },
        { name: "Savanna Forest", explanation: "Scattered trees in tropical grasslands with distinct wet and dry seasons.", image: savannaforest, style: 'zoom-out' },
        { name: "Coniferous Forest", explanation: "Forests dominated by conifer trees like pines, spruces, and firs, in cool climates.", image: coniferousforest, style: 'zoom-out' },
        { name: "Dry Forest", explanation: "Found in arid regions, these forests have drought-resistant vegetation.", image: dryforest, style: 'flip-up' },
        { name: "Mediterranean Forest", explanation: "Found in Mediterranean climates, with evergreen and drought-adapted vegetation.", image: mediterraneanforest, style: 'flip-up' },
        { name: "Subtropical Forest", explanation: "Located in subtropical regions, with a mix of tropical and temperate species.", image: forest2, style: 'flip-up' },
        { name: "Flooded Forest", explanation: "Forests that are seasonally or permanently flooded, like in river deltas.", image: forest2, style: 'zoom-in' },
        { name: "Temperate Mixed Forest", explanation: "Combination of deciduous and coniferous trees, with moderate climates.", image: forest2, style: 'zoom-in' },
        { name: "Plantation Forest", explanation: "Artificially planted forests for timber, paper, or conservation purposes.", image: forest2, style: 'zoom-in' },
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
                <section data-aos='fade-in' className="forest-video animate zoom-in">
                    <h2>Explore the Beauty of Forests</h2>
                    <video controls>
                        <source src={forestvideo} type="video/mp4" />
                    </video>
                </section>

                {/* Conservation Section */}
                <section data-aos='fade-in' className="forest-conservation animate slide-up">
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