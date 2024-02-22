import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../../services/FavoriteSlice';
import myDrinksReducer from '../../services/MyDrinksSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    myDrinks: myDrinksReducer,
  },
});
