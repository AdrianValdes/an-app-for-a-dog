import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  const fetchVehicles = useCallback(async () => {
    const fetchedVehicles = await (
      await fetch('https://ghibliapi.herokuapp.com/vehicles')
    ).json();

    setVehicles(fetchedVehicles);
  }, []);

  console.log(vehicles);

  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  return (
    <div className="main-container">
      {vehicles.map(({ name, id }) => {
        return (
          <div key={id}>
            <Link className="link-style" to={`/vehicles/${id}`}>
              {name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Vehicles;
