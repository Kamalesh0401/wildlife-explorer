
import Header from '../components/Header';
import Footer from '../components/Footer';
import './style.css';
const ContactForm = () => {
    return (<>
        <div className='contact-header'>
            <Header></Header>
        </div>
        <div className='contact-footer'>
            <Footer></Footer>
        </div>
    </>
    );
};

export default ContactForm;