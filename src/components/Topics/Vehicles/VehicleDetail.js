import React, { useCallback, useState, useEffect } from 'react';

function VehicleDetail({ match }) {
  const [vehicleDetail, setVehicleDetail] = useState([]);

  const fetchVehicleDetail = useCallback(async () => {
    const fetchedSpecie = await (
      await fetch(`https://ghibliapi.herokuapp.com/vehicles/${match.params.id}`)
    ).json();

    setVehicleDetail(fetchedSpecie);
  }, [match.params.id]);

  useEffect(() => {
    fetchVehicleDetail();
  }, [fetchVehicleDetail]);
  console.log(vehicleDetail);
  return (
    <div className="main-container">
      <div>Name: {vehicleDetail.name}</div>
      <div>Class: {vehicleDetail.vehicle_class}</div>
      <div>Description: {vehicleDetail.description}</div>
    </div>
  );
}

export default VehicleDetail;
