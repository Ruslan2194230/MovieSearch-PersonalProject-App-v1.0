import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  getFavorites,
  removeFromFavorites,
  addToFavorites,
} from '../services/favoritesFilmStorage';

const FavoriteContext = createContext();

export const useFavorites = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favoriteMoviesId, setFavoriteMoviesId] = useState([]);

  useEffect(() => {
    const favoriteIds = getFavorites();
    setFavoriteMoviesId(favoriteIds);
  }, []);

  const removeFromFavoritesAndUpdate = async movieId => {
    removeFromFavorites(movieId);
    setFavoriteMoviesId(prevFavoriteMoviesId =>
      prevFavoriteMoviesId.filter(
        prevFavoriteMovieId => prevFavoriteMovieId !== movieId
      )
    );
  };

  const isFavorite = movieId => {
    return favoriteMoviesId.some(FavoriteMovie => FavoriteMovie === movieId);
  };

  const addToFavoritesAndUpdate = async movieId => {
    addToFavorites(movieId);

    setFavoriteMoviesId(prevFavoriteMoviesId => [
      ...prevFavoriteMoviesId,
      movieId,
    ]);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favoriteMoviesId,
        removeFromFavoritesAndUpdate,
        isFavorite,
        addToFavoritesAndUpdate,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
