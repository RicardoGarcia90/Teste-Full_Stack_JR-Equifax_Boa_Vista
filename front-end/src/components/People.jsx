import React from 'react';
import classes from './People.module.css';

const People = ({ name, birthYear, height, mass }) => {
  return (
    <div className="peopleContainer">
      <li className={classes.peopleList}>
        <h2>{name}</h2>
        <h3>Ano de nascimento: {birthYear}</h3>
        <p>{height}</p>
        <p>{mass}</p>
      </li>
    </div>
  );
};

export default People;
