 
  import { createSelector } from '@reduxjs/toolkit';
 
  export const selectDrinksError = state => state.alldrinks.error;
  export const selectIsLoading = state => state.alldrinks.isLoading;
  export const selectDrinksFilter = state => state.filters;
  export const selectListsCategories = state => state.lists.categories;
  export const selectListsIngredients = state => state.lists.ingredients;
  export const selectVisibleDrinks = createSelector(
    [selectDrinksFilter, selectDrinksFilter],
    (drinks, filters) => {
      const { categoryFilter, ingredientFilter, searchQuery } = filters;
  
      return drinks.filter(drink => {
        // Применяем фильтрацию по каждому из параметров
        const categoryMatch = categoryFilter === '' || drink.category === categoryFilter;
        const ingredientMatch = ingredientFilter === '' || drink.ingredients.includes(ingredientFilter);
        const searchMatch = searchQuery === '' || drink.drink.toLowerCase().includes(searchQuery.toLowerCase());
  
        // Возвращаем элементы, которые соответствуют всем фильтрам
        return categoryMatch && ingredientMatch && searchMatch;
      });
    }
  );
  