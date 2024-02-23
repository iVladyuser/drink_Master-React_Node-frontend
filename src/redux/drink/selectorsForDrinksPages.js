import { createSelector } from '@reduxjs/toolkit';
  export const selectAllDrinks = state => state.alldrinks.items;
  export const selectDrinksError = state => state.alldrinks.error;
  export const selectIsLoading = state => state.alldrinks.isLoading;
  export const selectDrinksFilter = state => state.filters;
  export const selectVisibleDrinks = createSelector(
    [ selectAllDrinks, selectDrinksFilter],
    (drinks, filter) => {
    return drinks.filter(drink => drink.drink.toLowerCase()
    .includes(filter.toLowerCase()))
    }
    )