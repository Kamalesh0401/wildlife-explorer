
import Header from '../components/Header';
import Footer from '../components/Footer';
import './KidsCorner.css';

const KidsCorner = () => {
    return (
        <>
            {/* Header */}
            <div className="kids-header">
                <Header />
            </div>


            {/* Footer */}
            <div className="kids-footer">
                <Footer />
            </div>
        </>
    );
};

export default KidsCorner;