import React, { useState, useEffect, useCallback } from 'react';

function PeopleDetail({ match }) {
  const [onePeople, setOnePeople] = useState({});
  const fetchOnePeople = useCallback(async () => {
    const fetchPeopleDetail = await fetch(
      `https://ghibliapi.herokuapp.com/people/${match.params.id}`
    );

    const onePeopleDetail = await fetchPeopleDetail.json();
    console.log(onePeopleDetail);

    setOnePeople(onePeopleDetail);
  }, [match.params.id]);

  useEffect(() => {
    fetchOnePeople();
  }, [fetchOnePeople]);
  console.log(onePeople);
  return (
    <div>
      <div>Name: {onePeople.name}</div>
      <div>Gender: {onePeople.gender}</div>
      <div>Eye colors: {onePeople.eye_color}</div>
      <div>Hair Color: {onePeople.hair_color}</div>
      <div>Age: {onePeople.age}</div>
    </div>
  );
}

export default PeopleDetail;
