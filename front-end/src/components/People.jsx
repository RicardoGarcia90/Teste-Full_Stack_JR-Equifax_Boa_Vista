import React, { useState } from 'react';
import classes from './People.module.css';

const People = ({ name, birthYear, height, mass }) => {
  const handleAddButton = () => {
    const newFavorite = { name, birthYear, height, mass };
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = [...favoritesFromStorage, newFavorite];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

    console.log('Adicionado!');
  };

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
