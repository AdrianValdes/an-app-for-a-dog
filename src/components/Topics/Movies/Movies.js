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

  return (
    <ul className="listed-elements">
      {movies.map(({ title, id }) => (
        <li key={id}>
          {' '}
          <Link
            style={{ color: 'inherit', textDecoration: 'inherit' }}
            to={`/movie/${id}`}
          >
            {title}
          </Link>
        </li>
      ))}{' '}
    </ul>
  );
}

export default Movies;
