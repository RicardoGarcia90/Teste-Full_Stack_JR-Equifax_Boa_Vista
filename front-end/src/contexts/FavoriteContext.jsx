import React, { createContext, useState } from 'react';

const FavoriteContext = createContext({
  favorites: [],
  addToFavorites: (item) => {},
  removeFromFavorites: (itemId) => {},
});

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  const removeFromFavorites = (itemId) => {
    setFavorites(favorites.filter((item) => item.id !== itemId));
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteContext, FavoriteProvider };
