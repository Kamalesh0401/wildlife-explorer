// import React from 'react';
// import { Link } from 'react-router-dom';
// import './index.css';

// function Footer() {
//     const currentYear = new Date().getFullYear();

//     return (
//         <footer className="footer">
//             <div className="footer-container">
//                 <div className="footer-section footer-branding">
//                     <h3 className="footer-logo">
//                         <Link to="/">Wildlife Explorer</Link>
//                     </h3>
//                     <p className="footer-tagline">
//                         Discover the wonders of nature with us!
//                     </p>
//                 </div>

//                 <div className="footer-section footer-links">
//                     <h4 className="footer-title">Quick Links</h4>
//                     <ul className="footer-link-list">
//                         <li><Link to="/" className="footer-link">Home</Link></li>
//                         <li><Link to="/explore-parks" className="footer-link">Explore Parks</Link></li>
//                         <li><Link to="/wildlife" className="footer-link">Wildlife</Link></li>
//                         <li><Link to="/about" className="footer-link">About</Link></li>
//                         <li><Link to="/contact" className="footer-link">Contact</Link></li>
//                     </ul>
//                 </div>

//                 <div className="footer-section footer-contact">
//                     <h4 className="footer-title">Contact Us</h4>
//                     <p className="footer-contact-info">
//                         Email: <a href="mailto:wildlifeexplorer0415@gmail.com" className="footer-contact-link">wildlifeexplorer0415@gmail.com</a>
//                     </p>
//                     <p className="footer-contact-info">
//                         Phone: <a href="tel:+91 8438920788" className="footer-contact-link">+91 8438920788</a>
//                     </p>
//                 </div>

//                 <div className="footer-section footer-social">
//                     <h4 className="footer-title">Follow Us</h4>
//                     <div className="social-links">
//                         <a href="https://facebook.com" className="social-link" aria-label="Facebook">
//                             📘
//                         </a>
//                         <a href="https://twitter.com" className="social-link" aria-label="Twitter">
//                             🐦
//                         </a>
//                         <a href="https://instagram.com" className="social-link" aria-label="Instagram">
//                             📷
//                         </a>
//                         <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
//                             🔗
//                         </a>
//                     </div>
//                 </div>
//             </div>

//             <div className="footer-bottom">
//                 <p className="footer-copyright">
//                     &copy; {currentYear} Wildlife Explorer. All Rights Reserved.
//                 </p>
//             </div>
//         </footer>
//     );
// }

// export default Footer;



import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/wildlife_explorer.jpg';
import './index.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section footer-branding">
                    <h3 className="footer-logo">
                        {/* <Link to="/">Wildlife Explorer</Link> */}
                        <Link to="/">
                            <img src={logo} alt="Wildlife Explorer Logo" className="footer-logo-image" />Wildlife Explorer
                        </Link>
                    </h3>
                    <p className="footer-tagline">
                        Discover the wonders of nature with us!
                    </p>
                </div>

                <div className="footer-section footer-links">
                    <h4 className="footer-title">Quick Links</h4>
                    <ul className="footer-link-list">
                        <li><Link to="/" className="footer-link">Home</Link></li>
                        <li><Link to="/explorepark" className="footer-link">Explore Parks</Link></li>
                        <li><Link to="/wildlife" className="footer-link">Wildlife</Link></li>
                        <li><Link to="/aboutus" className="footer-link">About</Link></li>
                        <li><Link to="/contactus" className="footer-link">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section footer-contact">
                    <h4 className="footer-title">Contact Us</h4>
                    <p className="footer-contact-info">
                        Email: <a href="mailto:wildlifeexplorer0415@gmail.com" className="footer-contact-link">wildlifeexplorer0415@gmail.com</a>
                    </p>
                    <p className="footer-contact-info">
                        Phone: <a href="tel:+918438920788" className="footer-contact-link">+91 8438920788</a>
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

                {/* <div className="footer-section footer-newsletter">
                    <h4 className="footer-title">Stay Updated</h4>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="newsletter-input"
                        />
                        <button type="submit" className="newsletter-button">
                            Subscribe
                        </button>
                    </form>
                </div> */}
            </div>

            <div className="footer-bottom">
                <p className="footer-copyright">
                    © {currentYear} Wildlife Explorer. All Rights Reserved.
                </p>
            </div>

            <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                ↑
            </button>
        </footer>
    );
}

export default Footer;