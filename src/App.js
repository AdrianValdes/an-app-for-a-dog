import React, { useState, useEffect } from 'react';
import Form from './Form';
import MoviesList from './MoviesList';
import Icon4 from './images/films-images/unnamed.jpg';
function App() {
  const [movies, setMovies] = useState();

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
    <div>
      <img src={Icon4} alt="" />
      <Form />
      {movies === undefined ? 'Wait' : <MoviesList movies={movies} />}
    </div>
  );
}

export default App;
