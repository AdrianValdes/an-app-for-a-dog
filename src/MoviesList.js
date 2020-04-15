import React from 'react';

import MoviesListItem from './MoviesListItem';

const MoviesList = ({ movies }) => {
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MoviesListItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

/*MoviesList.propTypes = {
 movies: PropTypes.arrayOf(PropTypes.object).isRequired,
}*/

export default MoviesList;
