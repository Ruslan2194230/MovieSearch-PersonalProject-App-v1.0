import React, { createContext, useContext, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from 'ReduxToolkit/operations/favoriteMoviesStorage';
import { selectFavorites } from 'ReduxToolkit/selectors/selectors';
import {
  removeFromFavorites,
  setFavorites,
} from 'ReduxToolkit/slices/favoritesSlice';

const FavoriteContext = createContext();

export const useFavorites = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const dispatch = useDispatch();
  const favoriteMoviesId = useSelector(selectFavorites);

  useEffect(() => {
    const favoriteIds = getFavorites();
    dispatch(setFavorites(favoriteIds));
  }, [dispatch]);

  const removeFromFavoritesAndUpdate = async movieId => {
    removeFromFavorites(movieId);
    dispatch(prevFavoriteMoviesId =>
      prevFavoriteMoviesId.filter(
        prevFavoriteMovieId => prevFavoriteMovieId !== movieId
      )
    );
  };

  const isFavorite = movieId => {
    return favoriteMoviesId.some(FavoriteMovie => FavoriteMovie === movieId);
  };

  return (
    <FavoriteContext.Provider
      value={{
        removeFromFavoritesAndUpdate,
        isFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

///
///
///
///
///
