import React, { useCallback, useState, useEffect } from 'react';

function SpecieDetail({ match }) {
  const [specieDetail, setSpecieDetail] = useState([]);

  const fetchSpecieDetail = useCallback(async () => {
    const fetchedSpecie = await (
      await fetch(`https://ghibliapi.herokuapp.com/species/${match.params.id}`)
    ).json();

    setSpecieDetail(fetchedSpecie);
  }, [match.params.id]);

  useEffect(() => {
    fetchSpecieDetail();
  }, [fetchSpecieDetail]);

  return (
    <div className="main-container">
      <div>Name: {specieDetail.name}</div>
      <div>classification: {specieDetail.classification}</div>
      <div>Eye Color: {specieDetail.eye_colors}</div>
      <div>Hair Color: {specieDetail.hair_colors}</div>
    </div>
  );
}

export default SpecieDetail;
