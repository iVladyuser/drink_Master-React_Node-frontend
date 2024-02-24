import { createSelector } from '@reduxjs/toolkit';

export const selectAllDrinks = state => state.alldrinks.items;
export const selectDrinksError = state => state.alldrinks.error;
export const selectIsLoading = state => state.alldrinks.isLoading;
export const selectDrinksFilter = state => state.filters;

export const selectVisibleDrinks = createSelector(
  [selectAllDrinks, selectDrinksFilter],
  (allDrinks, filter) => {
    const drinksData = allDrinks.data || []; // Проверяем наличие массива данных
      console.log(drinksData);
    const filteredDrinks = drinksData.filter(drink => {
      const drinkCategory = String(drink.category).toLowerCase().replace(/\s/g, '');
      const filterCategory = filter.categoryFilter.toLowerCase().replace(/\s/g, '');
      const isCategoryMatch = !filterCategory || drinkCategory === filterCategory;
    

      const ingredientFilter = filter.ingredientFilter ? filter.ingredientFilter.toLowerCase().replace(/\s/g, '') : '';
      const isIngredientMatch = !ingredientFilter || drink.ingredients.some(ingredient => {
        const ingredientTitle = ingredient.title.toLowerCase().replace(/\s/g, '');
        return ingredientTitle === ingredientFilter;
      });

      const isSearchQueryMatch = !filter.searchQuery || drink.drink.toLowerCase().includes(filter.searchQuery.toLowerCase());

      return isCategoryMatch && isIngredientMatch && isSearchQueryMatch;
    });

    return filteredDrinks;
  }
);