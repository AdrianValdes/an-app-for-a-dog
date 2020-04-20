import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Movies() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const fetchedMovies = await (
      await fetch('https://ghibliapi.herokuapp.com/films')
    ).json();
    console.log(fetchedMovies);
    setMovies(fetchedMovies);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  console.log(movies);
  return (
    <ul className="listed-elements main-container ">
      {movies.map(({ title, id }) => (
        <li key={id}>
          <Link className="link-style" to={`/movie/${id}`}>
            {title}
          </Link>
        </li>
      ))}{' '}
    </ul>
  );
}

export default Movies;
