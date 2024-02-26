import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCategories,
  fetchIngredients,
  fetchGlasses,
} from '../filters/operations';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    categories: [],
    ingredients: [],
    glasses: [],
    isLoading: false,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categories.unshift({ name: 'All categories' });
        state.isLoading = false;
      })
      .addCase(fetchCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload;
        state.ingredients.unshift({ title: 'All ingredients' });
        state.isLoading = false;
      })
      .addCase(fetchIngredients.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchGlasses.fulfilled, (state, action) => {
        state.glasses = action.payload;
        state.glasses.unshift({ name: 'All Glasses' });
        state.isLoading = false;
      })
      .addCase(fetchGlasses.pending, state => {
        state.isLoading = true;
      }),
});

export const filtersReducer = filtersSlice.reducer;
