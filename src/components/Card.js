import React, { useState } from 'react';
import './card.css';
import HowerCard from './HowerCard';

const Card = ({ film }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={film.Poster} alt={film.Title} />
      <h3>{film.Title}</h3>
      {isHovered && <HowerCard film={film} />}
    </div>
  );
};

export default Card;