import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Species() {
  const [species, setSpecies] = useState([]);

  const fecthSpecies = useCallback(async () => {
    const fetchedSpecies = await (
      await fetch(
        'https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3'
      )
    ).json();

    setSpecies(fetchedSpecies);
  }, []);

  console.log(species);

  useEffect(() => {
    fecthSpecies();
  }, [fecthSpecies]);

  return <div className="main-container"></div>;
}

export default Species;
