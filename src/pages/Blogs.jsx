
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Blogs.css';

const Blogs = () => {
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

export default Blogs;