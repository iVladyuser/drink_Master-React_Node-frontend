import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './FavoriteSlice';
import myDrinksReducer from '../MyDrinksPage/MyDrinksSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    myDrinks: myDrinksReducer,
  },
});
