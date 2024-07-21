import { createSlice } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

// const favoriteMovieIdState =
//   JSON.parse(localStorage.getItem('favorites')) || [];
const favoritesSliceInitState = { favoriteMoviesid: [] };

const favoritesSlice = createSlice({
  name: 'favoriteMovies',
  initialState: favoritesSliceInitState,
  reducers: {
    addToFavorites: (state, action) => {
      return {
        ...state,
        favoriteMoviesid: [...state.favoriteMoviesid, action.payload],
      };
      // or with IMMER, mutable way
      // state.favoriteMoviesid.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favoriteMoviesid = state.favoriteMoviesid.filter(
        movieId => movieId !== action.payload
      );

      // second way with usage IMMER, mutable way
      // const findIndex = state.favoriteMoviesid.indexOf(action.payload);
      // state.favoriteMoviesid.splice(findIndex, 1);
    },
  },
});

const persistConfig = {
  key: 'favorites-movies',
  storage,
};

export const { setFavorites, addToFavorites, removeFromFavorites } =
  favoritesSlice.actions;

export const favoriteReducer = persistReducer(
  persistConfig,
  favoritesSlice.reducer
);
