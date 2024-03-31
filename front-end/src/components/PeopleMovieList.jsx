import React from 'react';
import { useState } from 'react';
import People from './People';

import classes from './PeopleMovieList.module.css';

const PeopleMovieList = ({ peopleData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = peopleData.slice(indexOfFirstItem, indexOfLastItem);

  console.log(currentItems);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <ul className={classes.peopleContainer}>
        {currentItems.map((person) => (
          <People
            key={person.id}
            name={person.name}
            birthYear={person.birthYear}
            height={person.height}
            mass={person.mass}
          />
        ))}
      </ul>
      <div className={classes.buttonsPage}>
        {currentPage == 2 && (
          <button onClick={() => handlePageChange(1)}>{'< 1'}</button>
        )}

        {currentPage == 1 && (
          <button onClick={() => handlePageChange(2)}>{'2 >'}</button>
        )}
      </div>
    </>
  );
};

export default PeopleMovieList;
