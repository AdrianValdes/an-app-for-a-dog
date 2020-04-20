import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Locations() {
  const [locations, setLocations] = useState([]);
  const fetchLocations = async () => {
    const fetchedLocations = await (
      await fetch('https://ghibliapi.herokuapp.com/locations')
    ).json();

    setLocations(fetchedLocations);
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <ul className="listed-elements main-container">
      {locations.map(({ name, id }) => {
        return (
          <li key={id}>
            <Link to={`/locations/${id}`} className="link-style">
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Locations;
