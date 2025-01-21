import "./index.css";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    {/* Footer Left: Logo and About */}
                    <div className="footer-left">
                        <h2>Wildlife Explorer</h2>
                        <p>
                            Explore the beauty of nature, learn about wildlife, and contribute to preserving our planet.
                            Together, we can make a difference.
                        </p>
                    </div>

                    {/* Footer Middle: Navigation Links */}
                    <div className="footer-middle">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </div>

                    {/* Footer Right: Social Media Links */}
                    <div className="footer-right">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom: Copyright */}
                <div className="footer-bottom">
                    <p>© 2025 Wildlife Explorer. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
