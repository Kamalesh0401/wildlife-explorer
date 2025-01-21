
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
                        <div className="forest-card">
                            <img src={forest4} alt="Tropical Forest" />
                            <h3>Tropical Forest</h3>
                            <p>Home to the richest biodiversity on Earth, tropical forests are a treasure trove of life.</p>
                        </div>
                        <div className="forest-card">
                            <img src={forest2} alt="Temperate Forest" />
                            <h3>Temperate Forest</h3>
                            <p>These forests are known for their stunning seasonal changes and diverse wildlife.</p>
                        </div>
                        <div className="forest-card">
                            <img src={forest3} alt="Boreal Forest" />
                            <h3>Boreal Forest</h3>
                            <p>Also known as taiga, these forests are located in colder regions of the world.</p>
                        </div>
                    </div>
                </section>

                {/* Video Section */}
                <section className="forest-video animate zoom-in">
                    <h2>Explore the Beauty of Forests</h2>
                    <video controls>
                        <source src={forestvideo} type="video/mp4" />
                        Your browser does not support the video tag.
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