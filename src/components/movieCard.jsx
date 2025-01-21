// import React from 'react';

const MovieCard = ({ poster_path, title, vote_average }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="movie_card">
      <img src={`${baseUrl}${poster_path}`} />
      <h2>{title}</h2>
      <span>⭐️ {vote_average}</span>
    </div>
  );
};

export default MovieCard;
