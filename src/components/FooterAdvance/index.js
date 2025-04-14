import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section footer-branding">
                    <h3 className="footer-logo">
                        <Link to="/">Wildlife Explorer</Link>
                    </h3>
                    <p className="footer-tagline">
                        Discover the wonders of nature with us!
                    </p>
                </div>

                <div className="footer-section footer-links">
                    <h4 className="footer-title">Quick Links</h4>
                    <ul className="footer-link-list">
                        <li><Link to="/" className="footer-link">Home</Link></li>
                        <li><Link to="/explore-parks" className="footer-link">Explore Parks</Link></li>
                        <li><Link to="/wildlife" className="footer-link">Wildlife</Link></li>
                        <li><Link to="/about" className="footer-link">About</Link></li>
                        <li><Link to="/contact" className="footer-link">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section footer-contact">
                    <h4 className="footer-title">Contact Us</h4>
                    <p className="footer-contact-info">
                        Email: <a href="mailto:info@wildlifeexplorer.com" className="footer-contact-link">info@wildlifeexplorer.com</a>
                    </p>
                    <p className="footer-contact-info">
                        Phone: <a href="tel:+1234567890" className="footer-contact-link">+1 (234) 567-890</a>
                    </p>
                </div>

                <div className="footer-section footer-social">
                    <h4 className="footer-title">Follow Us</h4>
                    <div className="social-links">
                        <a href="https://facebook.com" className="social-link" aria-label="Facebook">
                            📘
                        </a>
                        <a href="https://twitter.com" className="social-link" aria-label="Twitter">
                            🐦
                        </a>
                        <a href="https://instagram.com" className="social-link" aria-label="Instagram">
                            📷
                        </a>
                        <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
                            🔗
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-copyright">
                    &copy; {currentYear} Wildlife Explorer. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;