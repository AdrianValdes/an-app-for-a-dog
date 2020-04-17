import React from 'react';
import { Link } from 'react-router-dom';

function Topics() {
  return (
    <div>
      <Link
        style={{ color: 'inherit', textDecoration: 'inherit' }}
        to="/people"
      >
        <h1>People</h1>
      </Link>
      <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="movies">
        <h1>Movies</h1>
      </Link>
    </div>
  );
}

export default Topics;
