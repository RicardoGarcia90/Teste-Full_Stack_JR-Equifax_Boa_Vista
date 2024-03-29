import './App.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';

function App() {
  const [people, setPeople] = useState([]);

  const fetchPeopleData = async () => {
    try {
      const response1 = await axios.get('https://swapi.dev/api/people/');
      const data1 = response1.data.results;

      const response2 = await axios.get('https://swapi.dev/api/people/?page=2');
      const data2 = response2.data.results;

      const allDataPeople = [...data1, ...data2];

      const peopleMovie = allDataPeople.map((character) => ({
        id: uuidv4(),
        name: character.name,
      }));

      setPeople(peopleMovie);
    } catch (error) {
      console.log('Ocorreu um erro ao obter os dados:', error);
    }
  };

  useEffect(() => {
    fetchPeopleData();
  }, []);

  return (
    <>
      <h1>Título do Projeto</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <p>{person.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
