import React from 'react';
import iconNavbarLight from './images/films-images/image-for-navbar6.png';
import iconNavbarDark from './images/films-images/navbar-icon-darkmode.png';
const Navbar = (props) => {
  const { darkMode, setDarkMode } = props;
  console.log(props);
  return (
    <nav>
      <img
        src={darkMode ? iconNavbarDark : iconNavbarLight}
        alt="Navbar icon"
        className="navbar-icon"
      />
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
