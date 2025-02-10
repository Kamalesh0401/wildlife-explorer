import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const HeaderArray = [
  { Text: "Home", Path: "/" },
  { Text: "About", Path: "/about" },
  { Text: "Forest Explorer", Path: "/forestexplorer" },
  { Text: "WildLife Gallery", Path: "/wildlife" },
  //{ Text: "Endangered Species", Path: "/endangered" },
  { Text: "Species Encyclopedia ", Path: "/encyclopedia" },
  { Text: "Threat Section", Path: "/threat" },
  { Text: "Wildlife Blog", Path: "/blogs" },
  //{ Text: "Kid's Corner", Path: "/kidscorner" },
  // { Text: "Quiz", Path: "/quiz" },
  { Text: "Our Community", Path: "/community" },
  { Text: "Contact", Path: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [Indexposition, setIndexPosition] = useState(0);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const activeIndex = HeaderArray.findIndex(data => location.pathname === data.Path);
    if (activeIndex !== -1) {
      setIndexPosition(activeIndex);
    }
  }, [location.pathname]);

  return (
    <>
      <header className="header-container">
        <div className="header-left">
          <img
            src={`${process.env.PUBLIC_URL}/src/assets/images/water.png`}
            alt="Logo"
            className="header-logo"
          />
        </div>

        {/* Hamburger Menu for mobile */}
        {!isMenuOpen && <div className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </div>}

        {/* Navigation Links */}
        <nav className={`header-center ${isMenuOpen ? 'active' : ''}`}>
          {HeaderArray.map((data, index) => {
            const isActive = location.pathname === data.Path;
            return (
              <Link
                key={index}
                className={`header-link ${isActive ? 'active' : ''}`}
                to={data.Path}
                onClick={toggleMenu}
              >
                {data.Text}
              </Link>
            );
          })}
        </nav>
      </header>
    </>
  );
};

export default Header;
