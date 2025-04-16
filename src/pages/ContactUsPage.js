import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/FooterAdvance';
import './ContactUsPage.css';

function ContactUsPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission (replace with actual API call later)
        setTimeout(() => {
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        }, 500);
    };

    return (
        <div className="contact-us-container">
            <div className="body-content mb-3">
                <Sidebar />
                <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                    <div className="header">
                        <h1 className="header-text">CONTACT US</h1>
                        <button
                            className="mobile-menu"
                            onClick={toggleSidebar}
                            aria-label="Toggle Sidebar"
                        >
                            ≡
                        </button>
                    </div>
                    <div className="center-main-content">
                        <div className="sidebar-content">
                            <div className="contact-info-section">
                                <h3 className="section-title">
                                    <span className="section-icon">📧</span> GET IN TOUCH
                                </h3>
                                <p className="contact-info">
                                    <span className="contact-label">Email:</span>{' '}
                                    <a href="mailto:wildlifeexplorer0415@gmail.com" className="contact-link">
                                        wildlifeexplorer0415@gmail.com
                                    </a>
                                </p>
                                <p className="contact-info">
                                    <span className="contact-label">Phone:</span>{' '}
                                    <a href="tel:+91 8438920788" className="contact-link">
                                        +91 8438920788
                                    </a>
                                </p>
                                <p className="contact-info">
                                    <span className="contact-label">Address:</span>Bengaluru , Karnataka
                                </p>
                            </div>
                        </div>
                        <div className="right-section">
                            <div className="contact-form-section">
                                <h2 className="form-title">Send Us a Message</h2>
                                {isSubmitted ? (
                                    <div className="confirmation-message">
                                        <p>Thank you for your message! We'll get back to you soon.</p>
                                        <button
                                            className="action-button"
                                            onClick={() => setIsSubmitted(false)}
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="contact-form">
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="form-input"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="form-input"
                                                placeholder="Your Email"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                className="form-textarea"
                                                placeholder="Your Message"
                                                rows="5"
                                            />
                                        </div>
                                        <button type="submit" className="submit-button">
                                            Submit
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ContactUsPage;