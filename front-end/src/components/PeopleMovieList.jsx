import React from 'react';
import { useState } from 'react';
import People from './People';

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
      <ul>
        {currentItems.map((person) => (
          <People
            key={person.id}
            name={person.name}
            birthYear={person.birth_year}
            height={person.height}
            mass={person.mass}
          />
        ))}
      </ul>
      {currentPage == 2 && (
        <button onClick={() => handlePageChange(1)}>{'< 1'}</button>
      )}

      {currentPage == 1 && (
        <button onClick={() => handlePageChange(2)}>{'2 >'}</button>
      )}
    </>
  );
};

export default PeopleMovieList;
