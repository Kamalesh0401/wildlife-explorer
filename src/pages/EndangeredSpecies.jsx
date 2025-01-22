
import Header from '../components/Header';
import Footer from '../components/Footer';
import './EndangeredSpecies.css';

const EndangeredSpecies = () => {
    return (
        <>
            {/* Header */}
            <div className="about-header">
                <Header />
            </div>


            {/* Footer */}
            <div className="about-footer">
                <Footer />
            </div>
        </>
    );
};

export default EndangeredSpecies;