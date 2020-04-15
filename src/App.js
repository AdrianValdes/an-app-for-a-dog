import React, { useState, useEffect } from 'react';
import Form from './Form';
import Navbar from './Navbar';
import MoviesList from './MoviesList';
import iconLigtMode from './images/films-images/central-icon.png';
import iconDarkMode from './images/films-images/central-image-darkmode.png';
function App() {
  const [movies, setMovies] = useState();
  const [darkMode, setDarkMode] = useState(getInitialMode());

  // Setting the dark mode in the local Storage
  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  //Getting the initial mode from the browser
  function getInitialMode() {
    const savedMode = JSON.parse(
      localStorage.getItem(localStorage.getItem('dark'))
    );
    return savedMode || false;
  }

  //Fetching the movies from the API and updating the state.
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        'https://ghibliapi.herokuapp.com/films'
      ).then((response) => response.json());

      setMovies(response);
    }

    fetchData();
  }, []);

  return (
    <div className={darkMode ? 'dark-mode' : 'ligt-mode'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="main-container">
        <img
          src={darkMode ? iconDarkMode : iconLigtMode}
          alt=""
          className="main-icon"
        />
        {/*<Form />*/}
        {!movies ? 'Wait' : <MoviesList movies={movies} />}
      </main>
    </div>
  );
}

export default App;
