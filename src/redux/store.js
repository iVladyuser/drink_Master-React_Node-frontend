import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import favoritesReducer from '../services/FavoriteSlice';
import myDrinksReducer from '../services/MyDrinksSlice';

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
import { drinksSearchReducer } from './drinks/slice';
import { filtersReducer } from './filters/slice';

import { allDrinksReduser } from './drink/sliceForDrinksPages';
// import { filtersReducer } from './drink/sliceFilterForDrinksPages';
import { drinkByIdReducer } from './drink/sliceDrinkById';
import { routeReducer } from './route/slice';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const routeConfig = {
  key: 'route',
  storage,
  whitelist: ['route'], // List of slices to persist
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducer),
    route: persistReducer(routeConfig, routeReducer),

    favorites: favoritesReducer,
    alldrinks: allDrinksReduser,
    myDrinks: myDrinksReducer,
    filters: filtersReducer,
    cocktails: drinksSearchReducer,
    drinks: drinksReducer,
    drinkById: drinkByIdReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
