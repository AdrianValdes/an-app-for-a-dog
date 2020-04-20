import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../DarkMode';
import { Link } from 'react-router-dom';
import iconNavbarLight from '../images/films-images/image-for-navbar6.png';
import iconNavbarDark from '../images/films-images/navbar-icon-darkmode.png';
import '../index.css';
const Navbar = (props) => {
  const darkMode = useContext(DarkModeContext);
  const { setDarkMode } = props;
  const [sideNavbar, setSideNavbar] = useState(false);

  const handleNavbar = () => {
    setSideNavbar(!sideNavbar);
  };

  return (
    <nav>
      <div>
        <img
          className="navbar-icon"
          src={darkMode ? iconNavbarDark : iconNavbarLight}
          alt="Navbar icon"
        />
      </div>
      <ul
        style={darkMode ? { backgroundColor: '#282c35' } : {}}
        className={sideNavbar ? 'navbar-links  navbar-active' : 'navbar-links'}
      >
        <li className={sideNavbar ? 'individual-links0' : ''}>
          <Link className="link-style" to="/home">
            Home
          </Link>
        </li>

        <li className={sideNavbar ? 'individual-links1' : ''}>
          <Link className="link-style" to="/about">
            About
          </Link>
        </li>

        <li className={sideNavbar ? 'individual-links2' : ''}>
          <Link className="link-style" to="/topics">
            Topics
          </Link>
        </li>
      </ul>
      <div onClick={handleNavbar} className="burger">
        <div className="line1"></div>
        <div className="line1"></div>
        <div className="line1"></div>
      </div>
      <div className="toggle-button">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          checked={darkMode}
          onChange={() => {
            setDarkMode((prevMode) => !prevMode);
          }}
        />
        <label htmlFor="checkbox" className="label">
          <span
            className="icons"
            role="img"
            aria-label="Moon"
            style={{ color: darkMode ? 'gold' : 'grey' }}
          >
            ☾
          </span>

          <span
            className="icons"
            role="img"
            aria-label="Sun"
            style={{ color: darkMode ? 'grey' : 'yellow' }}
          >
            ☀
          </span>

          <div className="ball"></div>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
