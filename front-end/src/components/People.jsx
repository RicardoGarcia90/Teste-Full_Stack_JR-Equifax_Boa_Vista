import React, { useState } from 'react';
import classes from './People.module.css';
import axios from 'axios';

const People = ({
  id,
  name,
  birthYear,
  height,
  mass,
  gender,
  hair,
  eye,
  created,
  url,
}) => {
  const handleAddButton = async () => {
    const newFavorite = {
      id,
      name,
      birthYear,
      height,
      mass,
      gender,
      hair,
      eye,
      created,
      url,
    };

    try {
      const response = await axios.post(
        'http://localhost:5000/favorites',
        newFavorite
      );

      console.log('Favorito adicionado com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao adicionar favorito: ', error);
    }
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
            <p>Gênero: {gender}</p>
            <p>Cor do cabelo: {hair}</p>
            <p>Cor dos olhos: {eye}</p>
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
