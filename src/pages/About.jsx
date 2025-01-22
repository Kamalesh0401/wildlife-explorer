
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
    return (
        <>
            {/* Header */}
            <div className="about-header">
                <Header />
            </div>

            {/* Hero Section */}
            <section className="about-hero-section animate fade-in">
                <div className="about-hero-content">
                    <h1>About Wildlife Explorer</h1>
                    <p>
                        Wildlife Explorer is your gateway to discovering the beauty, diversity, and challenges of our planet's natural world. Our mission is to inspire appreciation for wildlife and encourage conservation efforts to preserve it for future generations.
                    </p>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="mission-section animate slide-up">
                <h2>Our Mission</h2>
                <p>
                    We aim to create awareness about the wonders of wildlife and forests, educate people on the threats they face, and promote sustainable actions to protect our ecosystems.
                </p>
            </section>

            {/* Features Section */}
            <section className="features-section animate zoom-in">
                <h2>What You’ll Explore</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <img src={`${process.env.PUBLIC_URL}/images/biodiversity.jpg`} alt="Biodiversity" />
                        <h3>Biodiversity</h3>
                        <p>
                            Learn about the rich variety of species that call our planet home.
                        </p>
                    </div>
                    <div className="feature-card">
                        <img src={`${process.env.PUBLIC_URL}/images/habitats.jpg`} alt="Habitats" />
                        <h3>Habitats</h3>
                        <p>
                            Explore diverse habitats, from rainforests to grasslands, and their roles in the ecosystem.
                        </p>
                    </div>
                    <div className="feature-card">
                        <img src={`${process.env.PUBLIC_URL}/images/conservation.jpg`} alt="Conservation" />
                        <h3>Conservation Efforts</h3>
                        <p>
                            Discover how people and organizations are working to protect wildlife.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="about-cta-section">
                <h2>Join Us in Making a Difference</h2>
                <p>
                    Your actions matter! Together, we can protect wildlife and their habitats. Join the movement to create a sustainable future for all living beings.
                </p>
                <a href="/contact" className="cta-btn">Get Involved</a>
            </section>

            {/* Footer */}
            <div className="about-footer">
                <Footer />
            </div>
        </>
    );
};

export default About;