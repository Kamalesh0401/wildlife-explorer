import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import "./index.css";

const HeaderArray = [
  { Text: "Home", Path: "/" },
  { Text: "Forest Explorer", Path: "/forestexplorer" },
  { Text: "WildLife Gallery", Path: "/wildlife" },
  { Text: "Threat Section", Path: "/threat" },
  { Text: "Quiz", Path: "/quiz" },
  { Text: "Contact", Path: "/contact" },
  { Text: "Hero", Path: "/hero" },
  { Text: "About", Path: "/about" },
];

const Header = () => {
  const location = useLocation();
  const [Indexposition, setIndexPosition] = useState(0);

  useEffect(() => {
    const activeIndex = HeaderArray.findIndex(data => location.pathname === data.Path);
    if (activeIndex !== -1) {
      setIndexPosition(activeIndex);
    }
  }, [location.pathname]);

  return (
    <>
      <header className={`header-container row col-md-12`}>
        <div className="header-left col-md-2">
          <img src={`${process.env.PUBLIC_URL}/images/Logo.png`} alt="Logo" className="header-logo" />
        </div>
        <nav className="header-center col-md-10">
          {HeaderArray.map((data, index) => {
            const isActive = location.pathname === data.Path;
            return (
              <>
                <Link key={index} className={`header-link ${isActive ? 'active' : ''}`} to={data.Path}>
                  {data.Text}
                </Link>
              </>
            );
          })}
        </nav>
        {/* {Indexposition === 0 ?
          <div className="HeadingText row mt-5 mb-5">
          </div> :

          <div className="HeadingText row mt-5 mb-5">
            <h2 style={{ color: "#002d5b" }}>{HeaderArray[Indexposition]['Text']}</h2>
            <hr
              style={{
                width: '80%',
                maxWidth: '100px',
                margin: '0 auto',
                border: '2px solid red'
              }}
            />
          </div>
        } */}
      </header>
    </>
  );
};

export default Header;