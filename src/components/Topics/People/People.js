import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function People() {
  const [people, setPeople] = useState([]);

  const fecthPeople = async () => {
    const dataPeople = await fetch('https://ghibliapi.herokuapp.com/people');

    const peopleArray = await dataPeople.json();

    setPeople(peopleArray);
  };

  useEffect(() => {
    fecthPeople();
  }, []);

  return (
    <div>
      <ul className="listed-elements">
        {people.map(({ name, id }) => {
          return (
            <li key={id}>
              <Link
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                to={`/people/${id}`}
              >
                {' '}
                {name}{' '}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default People;
