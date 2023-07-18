import React from 'react';
import './HowerCard.css';

const HowerCard = ({ film }) => {
  return (
    <div className="HowerCard">
      <h3>Film Year:  {film.Year}</h3>
      <h3>Film IMDB:  {film.imdbID}</h3>
      <h3>Film Type: {film.Type}</h3>
    </div>
  );
};

export default HowerCard;
