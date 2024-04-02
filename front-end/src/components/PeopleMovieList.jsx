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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let pageButton;

  if (peopleData.length > 10) {
    pageButton = (
      <div className={classes.buttonsPage}>
        {currentPage == 2 && (
          <button onClick={() => handlePageChange(1)}>{'< 1'}</button>
        )}

        {currentPage == 1 && (
          <button onClick={() => handlePageChange(2)}>{'2 >'}</button>
        )}
      </div>
    );
  }

  return (
    <>
      <ul className={classes.peopleContainer}>
        {currentItems.map((person) => (
          <People
            key={person.id}
            id={person.id}
            name={person.name}
            birthYear={person.birthYear}
            height={person.height}
            mass={person.mass}
            gender={person.gender}
            hair={person.hair}
            eye={person.eye}
            created={person.created}
            url={person.url}
          />
        ))}
      </ul>
      {pageButton}
    </>
  );
};

export default PeopleMovieList;
