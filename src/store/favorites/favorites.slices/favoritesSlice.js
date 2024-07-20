import { createSlice } from '@reduxjs/toolkit';
import {
  addToFavoriteMoviesStorage,
  removeFromFavoriteMoviesStorage,
} from '../favorites.operations/favoriteMoviesStorage';
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
      // addToFavoriteMoviesStorage(action.payload);

      // return (state = [...state, action.payload]);

      state.favoriteMoviesid += action.payload;
    },
    removeFromFavorites: (state, action) => {
      // removeFromFavoriteMoviesStorage(action.payload);
      return (state = state.filter(movieId => movieId !== action.payload));
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
