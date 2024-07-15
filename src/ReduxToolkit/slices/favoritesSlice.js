import { createSlice } from '@reduxjs/toolkit';
import {
  addToFavoriteMoviesStorage,
  removeFromFavoriteMoviesStorage,
} from '../operations/favoriteMoviesStorage';

const favoritesInitState = [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesInitState,
  reducers: {
    setFavorites: (state, action) => {
      return action.payload;
    },
    addToFavorites: (state, action) => {
      addToFavoriteMoviesStorage(action.payload);

      state.favoritesInitState.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      removeFromFavoriteMoviesStorage(action.payload);

      state.favoritesInitState.filter(movieId => movieId !== action.payload);
    },
  },
});

export const { setFavorites, addToFavorites, removeFromFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
