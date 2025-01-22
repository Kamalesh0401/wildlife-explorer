
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ContactForm.css';


const ContactForm = () => {
    return (
        <>
            {/* Header */}
            <div className="contact-header">
                <Header />
            </div>

            {/* Contact Page Content */}
            <div className="contact-container">
                {/* Hero Section */}
                <section className="contact-hero-section animate fade-in">
                    <h1 className="contact-title">Get in Touch</h1>
                    <p className="contact-subtitle">
                        We’d love to hear from you! Reach out to us with your questions, feedback, or suggestions.
                    </p>
                </section>

                {/* Contact Form Section */}
                <section className="contact-form-section animate slide-up">
                    <div className="form-container">
                        <h2>Contact Us</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" placeholder="Enter your name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input type="email" id="email" placeholder="Enter your email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea id="message" placeholder="Type your message here..." required />
                            </div>
                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    </div>
                </section>

                {/* Additional Information */}
                <section className="contact-info-section animate zoom-in">
                    <h2>Contact Information</h2>
                    <div className="info-grid">
                        <div className="info-card">
                            <h3>Email</h3>
                            <p>wildlifeexplorer@example.com</p>
                        </div>
                        <div className="info-card">
                            <h3>Phone</h3>
                            <p>+91 98765 43210</p>
                        </div>
                        <div className="info-card">
                            <h3>Address</h3>
                            <p>123 Wildlife Street, Nature Town, Earth</p>
                        </div>
                    </div>
                </section>

                {/* Social Media and Map */}
                <section className="contact-social-section animate fade-in">
                    <h2>Follow Us</h2>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <div className="contact-footer">
                <Footer />
            </div>
        </>
    );
};

export default ContactForm;