import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.auth.isLoading;

// user selecctors
export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectToken = state => state.auth.token;
export const selectEmail = state => state.auth.user.email;
export const selectName = state => {
  return state.auth.user.name;
};

export const selectIsAuth = createSelector(
  [selectIsLoggedIn, selectToken],
  (isLoggedIn, token) => token && isLoggedIn
);

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectError = state => state.auth.error;
