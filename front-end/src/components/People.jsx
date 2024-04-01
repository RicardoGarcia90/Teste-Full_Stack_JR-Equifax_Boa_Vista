import React, { useContext, useState } from 'react';
import classes from './People.module.css';
import axios from 'axios';
import Favorites from '../pages/Favorites';
import ButtonAdd from './ButtonAdd';
import { FavoriteContext } from '../contexts/FavoriteContext';

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
  const { addToFavorites, removeFromFavorites } = useContext(FavoriteContext);
  const [adicionado, setAdicionado] = useState(localStorage.getItem(id));

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
      const existingFavoritesResponse = await axios.get(
        'http://localhost:5000/favorites'
      );
      const existingFavorites = existingFavoritesResponse.data;

      console.log(existingFavorites.favorites);

      if (existingFavorites.favorites.length > 0) {
        const itemAlreadyExists = existingFavorites.favorites.some(
          (favorite) => favorite.id === newFavorite.id
        );

        if (itemAlreadyExists) {
          console.log('Este item já está na lista de favoritos.');
          return;
        }
      }

      const response = await axios.post(
        'http://localhost:5000/favorites',
        newFavorite
      );

      console.log('Favorito adicionado com sucesso:', response.data);
      addToFavorites(newFavorite);
      setAdicionado(true);

      localStorage.setItem(id, true);
    } catch (error) {
      console.error('Erro ao adicionar favorito: ', error);
    }
  };

  const handleRemoveButton = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/favorites/${id}`
      );
      console.log('Favorito removido com sucesso:', response.data);
      removeFromFavorites(id);
      setAdicionado(false);
      localStorage.removeItem(id);
    } catch (error) {
      console.error('Erro ao remover favorito: ', error);
    }
  };

  const handleButtonClick = () => {
    if (adicionado) {
      handleRemoveButton();
    } else {
      handleAddButton();
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

          <ButtonAdd
            adicionado={adicionado}
            onHandleClick={handleButtonClick}
          />
        </div>
      </div>
    </>
  );
};

export default People;
