import React, { useState } from 'react';

const Form = () => {
  const [movie, setName] = useState('');
  const [movies, setMovies] = useState();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    async function fetchData() {
      let response = await fetch(
        'https://ghibliapi.herokuapp.com/films'
      ).then((response) => response.json());

      setMovies(response);
    }

    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Movie</label>
        <input
          type="text"
          name="name"
          value={movie}
          placeholder="Movie Name"
          onChange={handleNameChange}
        />
      </form>
      <p>{movies ? movies[0].title : 'waiting'} </p>
    </div>
  );
};
export default Form;
