import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import favoritesReducer from '../services/FavoriteSlice';
import myDrinksReducer from '../services/MyDrinksSlice';
import { fetchCategories, fetchIngredients } from '../services/fetchDrinksForDrinksPages';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/slice';
import { drinksReducer } from './drink/home_slice';
import { filtersReducer } from './drink/sliceFilterForDrinksPages';
import { drinkByIdReducer } from './drink/sliceDrinkById';
import { listsReducer } from './drink/listSlice';
import { allDrinksReduser } from './drink/sliceForDrinksPages';
const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducer),
    favorites: favoritesReducer,
    myDrinks: myDrinksReducer,
    filters: filtersReducer,
    drinks: drinksReducer,
    drinkById: drinkByIdReducer,
    lists: listsReducer,
    alldrinks:allDrinksReduser
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

store.dispatch(fetchCategories());
store.dispatch(fetchIngredients());
