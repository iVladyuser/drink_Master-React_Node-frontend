  // import { createSelector } from '@reduxjs/toolkit';
  // export const selectAllDrinks = state => state.alldrinks.items;
  // export const selectDrinksError = state => state.alldrinks.error;
  // export const selectIsLoading = state => state.alldrinks.isLoading;
  // export const selectDrinksFilter = state => state.filters;
  // export const selectVisibleDrinks = createSelector(
  //   [ selectAllDrinks, selectDrinksFilter],
  //   (drinks, filter) => {
  //   return drinks.filter(drink => drink.drink.toLowerCase()
  //   .includes(filter.toLowerCase()))
  //   })
    
import { createSelector } from '@reduxjs/toolkit';

export const selectAllDrinks = state => state.alldrinks.items;
export const selectDrinksError = state => state.alldrinks.error;
export const selectIsLoading = state => state.alldrinks.isLoading;
export const selectDrinksFilter = state => state.filters;


// export const selectVisibleDrinks = createSelector(
//   [selectAllDrinks, selectDrinksFilter],
//   (drinks, filter) => {
//     const filteredDrinks = drinks.filter(drink => {
//       const drinkCategory = String(drink.category).toLowerCase().replaceAll(' ','') ;
//       const filterCategory = filter.categoryFilter.toLowerCase().replaceAll(' ','');
//       const isCategoryMatch = !filterCategory || drinkCategory === filterCategory;
//       const isIngredientMatch = !filter.ingredientFilter || drink.ingredients.some(ingredient => ingredient.title === filter.ingredientFilter);
//       const isSearchQueryMatch = !filter.searchQuery || drink.drink.toLowerCase().includes(filter.searchQuery.toLowerCase());

//       return isCategoryMatch && isIngredientMatch && isSearchQueryMatch;
//     });

//     return filteredDrinks;
//   }
// );

export const selectVisibleDrinks = createSelector(
  [selectAllDrinks, selectDrinksFilter],
  (drinks, filter) => {
    const filteredDrinks = drinks.filter(drink => {
      const drinkCategory = String(drink.category).toLowerCase().replace(/\s/g, '');
      const filterCategory = filter.categoryFilter.toLowerCase().replace(/\s/g, '');
      const isCategoryMatch = !filterCategory || drinkCategory === filterCategory;

      const ingredientFilter = filter.ingredientFilter ? filter.ingredientFilter.toLowerCase().replace(/\s/g, '') : '';
      const isIngredientMatch = !ingredientFilter || drink.ingredients.some(ingredient => ingredient.title.toLowerCase().replace(/\s/g, '') === ingredientFilter);

      const isSearchQueryMatch = !filter.searchQuery || drink.drink.toLowerCase().includes(filter.searchQuery.toLowerCase());

      return isCategoryMatch && isIngredientMatch && isSearchQueryMatch;
    });
    
    return filteredDrinks;
  }
);
  