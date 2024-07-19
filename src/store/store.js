import { configureStore } from '@reduxjs/toolkit';
import { favoriteReducer } from '../store/favorites/favorites.slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    favoritesStoreReducer: favoriteReducer,
  },
});
