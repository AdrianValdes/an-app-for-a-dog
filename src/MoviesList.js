import React from 'react';

const MoviesList = ({ movies }) => {
  if (movies) {
    return movies.map((movie) => <li key={movie.id}>{movie.title}</li>);
  }
  return <div>Hellooo</div>;
};

export default MoviesList;
