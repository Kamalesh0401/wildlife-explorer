// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import Footer from '../components/FooterAdvance';
// import './ContactUsPage.css';

// function ContactUsPage() {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });
//     const [isSubmitted, setIsSubmitted] = useState(false);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Simulate form submission (replace with actual API call later)
//         setTimeout(() => {
//             setIsSubmitted(true);
//             setFormData({ name: '', email: '', message: '' });
//         }, 500);
//     };

//     return (
//         <div className="wd-contactpage-container">
//             <div className="wd-contactpage-body-content mb-3">
//                 <Sidebar />
//                 <div className={`wd-contactpage-main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
//                     <div className="wd-contactpage-header">
//                         <h1 className="wd-contactpage-header-text">CONTACT US</h1>
//                         <button
//                             className="wd-contactpage-mobile-menu"
//                             onClick={toggleSidebar}
//                             aria-label="Toggle Sidebar"
//                         >
//                             ≡
//                         </button>
//                     </div>
//                     <div className="wd-contactpage-center-main-content">
//                         <div className="wd-contactpage-sidebar-content">
//                             <div className="wd-contactpage-contact-info-section">
//                                 <h3 className="wd-contactpage-section-title">
//                                     <span className="wd-contactpage-section-icon">📧</span> GET IN TOUCH
//                                 </h3>
//                                 <p className="wd-contactpage-contact-info">
//                                     <span className="wd-contactpage-contact-label">Email:</span>{' '}
//                                     <a href="mailto:wildlifeexplorer0415@gmail.com" className="wd-contactpage-contact-link">
//                                         wildlifeexplorer0415@gmail.com
//                                     </a>
//                                 </p>
//                                 <p className="wd-contactpage-contact-info">
//                                     <span className="wd-contactpage-contact-label">Phone:</span>{' '}
//                                     <a href="tel:+91 8438920788" className="wd-contactpage-contact-link">
//                                         +91 8438920788
//                                     </a>
//                                 </p>
//                                 <p className="wd-contactpage-contact-info">
//                                     <span className="wd-contactpage-contact-label">Address:</span> Bengaluru, Karnataka
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="wd-contactpage-right-section">
//                             <div className="wd-contactpage-contact-form-section">
//                                 <h2 className="wd-contactpage-form-title">Send Us a Message</h2>
//                                 {isSubmitted ? (
//                                     <div className="wd-contactpage-confirmation-message">
//                                         <p>Thank you for your message! We'll get back to you soon.</p>
//                                         <button
//                                             className="wd-contactpage-action-button"
//                                             onClick={() => setIsSubmitted(false)}
//                                         >
//                                             Send Another Message
//                                         </button>
//                                     </div>
//                                 ) : (
//                                     <form onSubmit={handleSubmit} className="wd-contactpage-contact-form">
//                                         <div className="wd-contactpage-form-group">
//                                             <label htmlFor="name">Name</label>
//                                             <input
//                                                 type="text"
//                                                 id="name"
//                                                 name="name"
//                                                 value={formData.name}
//                                                 onChange={handleInputChange}
//                                                 required
//                                                 className="wd-contactpage-form-input"
//                                                 placeholder="Your Name"
//                                             />
//                                         </div>
//                                         <div className="wd-contactpage-form-group">
//                                             <label htmlFor="email">Email</label>
//                                             <input
//                                                 type="email"
//                                                 id="email"
//                                                 name="email"
//                                                 value={formData.email}
//                                                 onChange={handleInputChange}
//                                                 required
//                                                 className="wd-contactpage-form-input"
//                                                 placeholder="Your Email"
//                                             />
//                                         </div>
//                                         <div className="wd-contactpage-form-group">
//                                             <label htmlFor="message">Message</label>
//                                             <textarea
//                                                 id="message"
//                                                 name="message"
//                                                 value={formData.message}
//                                                 onChange={handleInputChange}
//                                                 required
//                                                 className="wd-contactpage-form-textarea"
//                                                 placeholder="Your Message"
//                                                 rows="5"
//                                             />
//                                         </div>
//                                         <button type="submit" className="wd-contactpage-submit-button">
//                                             Submit
//                                         </button>
//                                     </form>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default ContactUsPage;


import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/FooterAdvance';
import './ContactUsPage.css';

function ContactUsPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError(null); // Clear error on input change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:6004/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
            } else {
                setError(result.message || 'Failed to send message');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="wd-contactpage-container">
            <div className="wd-contactpage-body-content mb-3">
                <Sidebar />
                <div className={`wd-contactpage-main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                    <div className="wd-contactpage-header">
                        <h1 className="wd-contactpage-header-text">Contact Us</h1>
                        <button
                            className="wd-contactpage-mobile-menu"
                            onClick={toggleSidebar}
                            aria-label="Toggle Sidebar"
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div className="wd-contactpage-hero">
                        <h2 className="wd-contactpage-hero-title">Connect with Wildlife Explorer</h2>
                        <p className="wd-contactpage-hero-text">
                            Have questions or feedback? Reach out to us, and let's explore the wild together!
                        </p>
                    </div>
                    <div className="wd-contactpage-center-main-content">
                        <div className="wd-contactpage-sidebar-content">
                            <div className="wd-contactpage-contact-info-section">
                                <h3 className="wd-contactpage-section-title">
                                    <i className="fas fa-envelope wd-contactpage-section-icon"></i> Get in Touch
                                </h3>
                                <p className="wd-contactpage-contact-info">
                                    <span className="wd-contactpage-contact-label">
                                        <i className="fas fa-envelope"></i> Email:
                                    </span>{' '}
                                    <a href="mailto:wildlifeexplorer0415@gmail.com" className="wd-contactpage-contact-link">
                                        wildlifeexplorer0415@gmail.com
                                    </a>
                                </p>
                                <p className="wd-contactpage-contact-info">
                                    <span className="wd-contactpage-contact-label">
                                        <i className="fas fa-phone"></i> Phone:
                                    </span>{' '}
                                    <a href="tel:+918438920788" className="wd-contactpage-contact-link">
                                        +91 8438920788
                                    </a>
                                </p>
                                <p className="wd-contactpage-contact-info">
                                    <span className="wd-contactpage-contact-label">
                                        <i className="fas fa-map-marker-alt"></i> Address:
                                    </span>{' '}
                                    Bengaluru, Karnataka
                                </p>
                                <div className="wd-contactpage-social-links">
                                    <h4 className="wd-contactpage-social-title">Follow Us</h4>
                                    <div className="wd-contactpage-social-icons">
                                        <a href="https://twitter.com" className="wd-contactpage-social-link" aria-label="Twitter">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="https://facebook.com" className="wd-contactpage-social-link" aria-label="Facebook">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="https://instagram.com" className="wd-contactpage-social-link" aria-label="Instagram">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wd-contactpage-right-section">
                            <div className="wd-contactpage-contact-form-section">
                                <h2 className="wd-contactpage-form-title">Send Us a Message</h2>
                                {isSubmitted ? (
                                    <div className="wd-contactpage-confirmation-message">
                                        <p>Thank you for your message! We'll get back to you soon.</p>
                                        <button
                                            className="wd-contactpage-action-button"
                                            onClick={() => setIsSubmitted(false)}
                                            aria-label="Send another message"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="wd-contactpage-contact-form">
                                        <div className="wd-contactpage-form-group">
                                            <label htmlFor="name">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="wd-contactpage-form-input"
                                                placeholder="Your Name"
                                                aria-required="true"
                                            />
                                        </div>
                                        <div className="wd-contactpage-form-group">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="wd-contactpage-form-input"
                                                placeholder="Your Email"
                                                aria-required="true"
                                            />
                                        </div>
                                        <div className="wd-contactpage-form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                className="wd-contactpage-form-textarea"
                                                placeholder="Your Message"
                                                rows="5"
                                                aria-required="true"
                                            />
                                        </div>
                                        {error && <p className="wd-contactpage-error">{error}</p>}
                                        <button
                                            type="submit"
                                            className="wd-contactpage-submit-button"
                                            disabled={isLoading}
                                            aria-label="Submit contact form"
                                        >
                                            {isLoading ? <i className="fas fa-spinner fa-spin"></i> : 'Submit'}
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