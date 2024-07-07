import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  getFavorites,
  removeFromFavorites,
  addToFavorites,
} from '../services/favoritesFilmStorage';
import { getMovieById } from '../services/getMovies';

const FavoriteContext = createContext();

export const useFavorites = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  // Загрузка избранных фильмов при монтировании компонента
  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      const favoriteIds = getFavorites();
      const moviePromises = favoriteIds.map(id => getMovieById(id));
      const movies = await Promise.all(moviePromises);
      setFavoriteMovies(movies);
    };

    fetchFavoriteMovies();
  }, []);

  const removeFromFavoritesAndUpdate = async movieId => {
    removeFromFavorites(movieId);
    setFavoriteMovies(prevFavoriteMovies =>
      prevFavoriteMovies.filter(movie => movie.id !== movieId)
    );
  };

  const isFavorite = movieId => {
    return favoriteMovies.some(movie => movie.id === movieId);
  };

  const addToFavoritesAndUpdate = async movieId => {
    addToFavorites(movieId);
    const movie = await getMovieById(movieId);
    setFavoriteMovies(prevFavoriteMovies => [...prevFavoriteMovies, movie]);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favoriteMovies,
        removeFromFavoritesAndUpdate,
        isFavorite,
        addToFavoritesAndUpdate,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
