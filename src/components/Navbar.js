import React from 'react';
import { Link } from 'react-router-dom';

import iconNavbarLight from '../images/films-images/image-for-navbar6.png';
import iconNavbarDark from '../images/films-images/navbar-icon-darkmode.png';
const Navbar = (props) => {
  const { darkMode, setDarkMode } = props;

  return (
    <nav>
      <img
        src={darkMode ? iconNavbarDark : iconNavbarLight}
        alt="Navbar icon"
        className="navbar-icon"
      />
      <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/home">
        <div className="navbar-children">Home</div>
      </Link>
      <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/about">
        <div className="navbar-children"> About</div>
      </Link>
      <Link
        style={{ color: 'inherit', textDecoration: 'inherit' }}
        to="/topics"
      >
        <div className="navbar-children">Topics</div>
      </Link>
      <div className="toggle-button navbar-children">
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
