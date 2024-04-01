import React from 'react';
import PeopleMovieList from '../components/PeopleMovieList';

import classes from '../App.module.css';
import { Link } from 'react-router-dom';

function Home({ people, isLoading }) {
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
