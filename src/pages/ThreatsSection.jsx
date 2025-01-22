
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ThreatsSection.css';
const ThreatsSection = () => {
    return (
        <>
            {/* Header */}
            <div className="threat-header">
                <Header />
            </div>

            {/* Hero Section */}
            <section className="threat-hero-section animate fade-in">
                <div className="threat-hero-content">
                    <h1 className="threat-title">The Threats to Our Wildlife and Forests</h1>
                    <p className="threat-subtitle">
                        Explore the dangers facing our planet’s biodiversity and learn how you can help make a difference.
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="threat-main-section animate slide-up">
                <h2 className="section-title">Major Threats to Wildlife</h2>
                <div className="threat-grid">
                    <div className="threat-card">
                        <img src={`${process.env.PUBLIC_URL}/images/deforestation.jpg`} alt="Deforestation" />
                        <h3>Deforestation</h3>
                        <p>
                            Forests are being cleared at alarming rates, destroying habitats and threatening countless species.
                        </p>
                    </div>
                    <div className="threat-card">
                        <img src={`${process.env.PUBLIC_URL}/images/climate_change.jpg`} alt="Climate Change" />
                        <h3>Climate Change</h3>
                        <p>
                            Rising temperatures and changing ecosystems are driving many species to extinction.
                        </p>
                    </div>
                    <div className="threat-card">
                        <img src={`${process.env.PUBLIC_URL}/images/poaching.jpg`} alt="Poaching" />
                        <h3>Poaching</h3>
                        <p>
                            Illegal hunting and trading of animals threaten the survival of many iconic species.
                        </p>
                    </div>
                    <div className="threat-card">
                        <img src={`${process.env.PUBLIC_URL}/images/pollution.jpg`} alt="Pollution" />
                        <h3>Pollution</h3>
                        <p>
                            Contamination of air, water, and land directly harms wildlife and their habitats.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="threat-cta-section animate zoom-in">
                <h2>How Can You Help?</h2>
                <p>
                    Small actions can make a big difference. Get involved by supporting conservation efforts, reducing waste, and spreading awareness.
                </p>
                <a href="/contact" className="cta-btn">Take Action Now</a>
            </section>

            {/* Footer */}
            <div className="threat-footer">
                <Footer />
            </div>
        </>
    );
};

export default ThreatsSection;