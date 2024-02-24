import { createSlice } from '@reduxjs/toolkit';
import {fetchCategories, fetchIngredients } from '../../services/fetchDrinksForDrinksPages'
const listsInitialState = {
  categories: [],
  ingredients: [],
};

const listsSlice = createSlice({
  name: 'lists',
  initialState: listsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload;
      });
  },
});

export const listsReducer = listsSlice.reducer;