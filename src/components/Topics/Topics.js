import React from 'react';
import { Link } from 'react-router-dom';
import people from './People/PeopleImages/People1.png';
import movies from './TopicsImages/topics.png';

import './Topics.css';
function Topics() {
  return (
    <div className=" main-container topics">
      <h2 className="each-topic">
        <Link className="link-style" to="/people">
          People <br />
        </Link>
        <img
          className="topics-images"
          src={people}
          alt="This is from the people"
        />
      </h2>

      <h2 className="each-topic">
        <Link className="link-style" to="movies">
          Movies <br />
        </Link>
        <img
          className="topics-images"
          src={movies}
          alt="This is from the people"
        />
      </h2>

      <h2 className="each-topic">
        <Link className="link-style" to="locations">
          Locations{' '}
        </Link>
      </h2>

      <h2 className="each-topic">
        {' '}
        <Link className="link-style" to="species">
          Species
        </Link>
      </h2>

      <h2 className="each-topic">
        <Link className="link-style" to="vehicles">
          Vehicles
        </Link>
      </h2>
    </div>
  );
}

export default Topics;
