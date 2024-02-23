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
    })
    

  // import { createSelector } from '@reduxjs/toolkit';

  // export const selectAllDrinks = state => state.alldrinks.items;
  // export const selectDrinksError = state => state.alldrinks.error;
  // export const selectIsLoading = state => state.alldrinks.isLoading;
  // export const selectDrinksFilter = state => state.filters;
  
  // export const selectVisibleDrinks = createSelector(
  //   [selectAllDrinks, selectDrinksFilter],
  //   (drinks, filter) => {
  //     const filteredDrinks = drinks.filter(drink => {
  //       const isCategoryMatch = !filter.selectedCategory || drink.category === filter.selectedCategory;
  //       const isIngredientMatch = !filter.selectedIngredient || drink.ingredients.some(ingredient => ingredient.title === filter.selectedIngredient);
  //       const isSearchQueryMatch = !filter.searchQuery || drink.drink.toLowerCase().includes(filter.searchQuery.toLowerCase());
        
  //       return isCategoryMatch && isIngredientMatch && isSearchQueryMatch;
  //     });
  
  //     return filteredDrinks;
  //   }
  // );

  // export const selectVisibleDrinks = createSelector(
  //   [selectAllDrinks, selectDrinksFilter],
  //   (drinks, filter) => {

      // const filteredDrinks = drinks.filter(drink => {
      //   const isCategoryMatch = !filter.selectedCategory || drink.category === filter.selectedCategory;
      //   const isIngredientMatch = !filter.selectedIngredient || drink.ingredients.some(ingredient => ingredient.title === filter.selectedIngredient);
      //   const isSearchQueryMatch = !filter.searchQuery || drink.drink.toLowerCase().includes(filter.searchQuery.toLowerCase());
        
    //   return drinks.filter(drink => drink.drink.toLowerCase()
    // .includes(filter.toLowerCase()))
    // })
  