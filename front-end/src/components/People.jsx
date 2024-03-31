import React, { useState } from 'react';
import classes from './People.module.css';

const People = ({ name, birthYear, height, mass }) => {
  const [favorites, setFavorites] = useState([]);

  const handleAddButton = () => {
    const newFavorites = { name, birthYear, height, mass };
    setFavorites([...favorites, newFavorites]);
  };

  console.log(favorites);

  return (
    <>
      <div className="peopleContainer">
        <div className={classes.peopleList}>
          <li>
            <h2>{name}</h2>
            <p>Nascimento: {birthYear}</p>
            <p>Altura: {height}</p>
            <p>Peso: {mass}</p>
          </li>
          <button onClick={handleAddButton} className={classes.buttonAdd}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default People;
