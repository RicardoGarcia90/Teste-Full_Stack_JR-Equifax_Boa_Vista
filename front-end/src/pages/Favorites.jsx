import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './Favorites.module.css';
import { Link } from 'react-router-dom';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const fetchFavoritesData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/favorites');
      const data = response.data;

      const favPeopleMovie = data.map((favCharacter) => ({
        id: favCharacter.id,
        name: favCharacter.name,
        gender: favCharacter.gender,
        birthYear: favCharacter.birth_year,
        hair: favCharacter.hair_color,
        eye: favCharacter.eye_color,
        height: favCharacter.height,
        mass: favCharacter.mass,
        created: favCharacter.created,
        url: favCharacter.url,
      }));

      setFavorites(favPeopleMovie);
    } catch (error) {
      console.log('Ocorreu um erro ao obter os dados:', error);
    }

    console.log(favorites);
  };

  useEffect(() => {
    fetchFavoritesData();
  }, []);

  return (
    <div className={classes.titulo}>
      <h1>Página de favoritos</h1>
      {favorites.map((fav) => (
        <div key={fav.id}>
          <p>{fav.name}</p>
          {/* Renderizar outros dados relevantes aqui */}
        </div>
      ))}
      <Link to={'/'}>Voltar</Link>
    </div>
  );
}

export default Favorites;
