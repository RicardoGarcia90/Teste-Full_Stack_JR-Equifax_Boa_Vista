import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { FavoriteProvider } from './contexts/FavoriteContext';

function App() {
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

      setIsloading(false);
    } catch (error) {
      console.log('Ocorreu um erro ao obter os dados:', error);
    }
  };

  useEffect(() => {
    fetchPeopleData();
  }, []);

  return (
    <FavoriteProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home people={people} isLoading={isLoading} />}
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route
            path="*"
            element={<h1 style={{ color: 'white' }}>Not found</h1>}
          />
        </Routes>
      </BrowserRouter>
    </FavoriteProvider>
  );
}

export default App;
