import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './Favorites.module.css';
import { Link } from 'react-router-dom';

import PeopleMovieList from '../components/PeopleMovieList';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const fetchFavoritesData = async () => {
    setIsloading(true);
    try {
      const response = await axios.get('http://localhost:5000/favorites');
      const data = response.data.favorites;

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
      console.log(favorites);

      setIsloading(false);
    } catch (error) {
      console.log('Ocorreu um erro ao obter os dados:', error);
    }
  };

  useEffect(() => {
    fetchFavoritesData();
  }, []);

  let content;

  if (favorites.length > 0) {
    content = <PeopleMovieList peopleData={favorites} />;
  }

  if (isLoading) content = <p>Carregando...</p>;

  return (
    <div className={classes.titulo}>
      <h1>Página de favoritos</h1>
      <section>{content}</section>
      <Link to={'/'}>Voltar</Link>
    </div>
  );
}

export default Favorites;
