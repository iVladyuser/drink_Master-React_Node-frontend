import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './FavoriteSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
