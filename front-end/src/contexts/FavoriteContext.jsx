import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FavoriteContext = createContext({
  favorites: [],
  addToFavorites: (item) => {},
  removeFromFavorites: (itemId) => {},
  fetchFavorites: () => {},
  notifySucces: () => {},
  notifyInfo: () => {},
  notifyWarn: () => {},
});

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/favorites');
        setFavorites(response.data.favorites);
      } catch (error) {
        console.error('Erro ao obter os dados:', error);
      }
    };

    fetchData();
  }, []);

  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  const removeFromFavorites = (itemId) => {
    setFavorites(favorites.filter((item) => item.id !== itemId));
  };

  const fetchFavorites = async () => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/favorites');
        setFavorites(response.data.favorites);
      } catch (error) {
        console.error('Erro ao obter os dados:', error);
      }
    };

    fetchData();
  };

  const notifySucces = () =>
    toast.success('Personagem adicionado com sucesso!');

  const notifyInfo = () => toast.info('Personagem removido com sucesso!');

  const notifyWarn = () =>
    toast.warn('Esse personagem já foi adicionado em favoritos!');

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        fetchFavorites,
        notifySucces,
        notifyInfo,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteContext, FavoriteProvider };
