import React, { useState, useEffect, useCallback } from 'react';

function MovieDetail({ match }) {
  const [movieDetail, setMovieDetail] = useState({});

  const fetchMovieDetail = useCallback(async () => {
    const fetchedData = await (
      await fetch(`https://ghibliapi.herokuapp.com/films/${match.params.id}`)
    ).json();

    setMovieDetail(fetchedData);
  }, [match.params.id]);

  useEffect(() => {
    fetchMovieDetail();
  }, [fetchMovieDetail]);

  return (
    <div className="small-container main-container">
      <div>Title: {movieDetail.title}</div>
      <div>Director : {movieDetail.director}</div>
      <div>Description: {movieDetail.description}</div>
      <div>Release Date: {movieDetail.release_date}</div>
    </div>
  );
}

export default MovieDetail;
