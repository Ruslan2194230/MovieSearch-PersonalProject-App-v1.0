import { configureStore } from '@reduxjs/toolkit';
import favoritesSlice from 'ReduxToolkit/slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesSlice,
  },
});
