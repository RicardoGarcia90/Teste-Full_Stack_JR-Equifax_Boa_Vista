import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import PeopleMovieList from '../components/PeopleMovieList';

import classes from '../App.module.css';
import { Link } from 'react-router-dom';

function Home() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const fetchPeopleData = async () => {
    setIsloading(true);

    try {
      const response1 = await axios.get('https://swapi.dev/api/people/');
      const data1 = response1.data.results;

      const response2 = await axios.get('https://swapi.dev/api/people/?page=2');
      const data2 = response2.data.results;

      const allDataPeople = [...data1, ...data2];

      const peopleMovie = allDataPeople.map((character) => ({
        id: uuidv4(),
        name: character.name,
        gender: character.gender,
        birthYear: character.birth_year,
        hair: character.hair_color,
        eye: character.eye_color,
        height: character.height,
        mass: character.mass,
        created: character.created,
        url: character.url,
      }));

      setPeople(peopleMovie);

      console.log(people);

      setIsloading(false);
    } catch (error) {
      console.log('Ocorreu um erro ao obter os dados:', error);
    }
  };

  useEffect(() => {
    fetchPeopleData();
  }, []);

  let content;

  if (people.length > 0) {
    content = <PeopleMovieList peopleData={people} />;
  }

  if (isLoading) content = <p>Carregando...</p>;

  return (
    <>
      <section className={classes.header}>
        <h1>Star Wars: The search...</h1>
        <h2>
          Quer saber tudo sobre o universo Star Wars? Encontrar aqui você vai!!!
        </h2>
        <h3>Faça uma busca pelo seu personagem preferido abaixo:</h3>
      </section>
      <section className={classes.inputFilter}>
        <div>
          <input type="text" />
          <button>Pesquisar</button>
          <Link to={'/favorites'}>Favoritos</Link>
        </div>
      </section>
      <section className={classes.peopleSection}>{content}</section>
    </>
  );
}

export default Home;
