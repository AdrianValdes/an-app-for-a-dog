import React, { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function LocationDetail({ match }) {
  const [location, setLocation] = useState({});

  const fetchLocationDetails = useCallback(async () => {
    const locationDetails = await (
      await fetch(
        `https://ghibliapi.herokuapp.com/locations/${match.params.id}`
      )
    ).json();

    setLocation(locationDetails);
  }, [match.params.id]);

  useEffect(() => {
    fetchLocationDetails();
  }, [fetchLocationDetails]);

  return (
    <div className="small-container main-container">
      <div>Name: {location.name}</div>
      <div>Climate: {location.climate}</div>
      <div>Terrain: {location.terrain}</div>
      <div>Surface water: {location.surface_water}</div>
      <div>Name: {location.name}</div>
    </div>
  );
}

export default LocationDetail;
