import { createSlice } from '@reduxjs/toolkit';
import {
  addToFavoriteMoviesStorage,
  removeFromFavoriteMoviesStorage,
} from '../favorites.operations/favoriteMoviesStorage';

const favoriteMovieIdState =
  JSON.parse(localStorage.getItem('favorites')) || [];

const favoritesSlice = createSlice({
  name: 'favoriteMovies',
  initialState: favoriteMovieIdState,
  reducers: {
    addToFavorites: (state, action) => {
      addToFavoriteMoviesStorage(action.payload);

      return (state = [...state, action.payload]);
    },
    removeFromFavorites: (state, action) => {
      removeFromFavoriteMoviesStorage(action.payload);
      return (state = state.filter(movieId => movieId !== action.payload));
    },
  },
});

export const { setFavorites, addToFavorites, removeFromFavorites } =
  favoritesSlice.actions;
export const favoriteReducer = favoritesSlice.reducer;
