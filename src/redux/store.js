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
import { allDrinksReduser } from './drink/sliceForDrinksPages';
import { filtersReducer } from './drink/sliceFilterForDrinksPages';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducer),
    favorites: favoritesReducer,
    alldrinks: allDrinksReduser,
    myDrinks: myDrinksReducer,
    filters: filtersReducer,
    drinks: drinksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

