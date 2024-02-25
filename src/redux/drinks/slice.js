import { createSlice } from '@reduxjs/toolkit';
import { fetchCocktailsByParams } from '../drinks/operations';

const drinksSearchSlice = createSlice({
  name: 'cocktails',
  initialState: {
    cocktails: [],
    totalCocktails: 0,
    isLoading: false,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCocktailsByParams.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCocktailsByParams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cocktails = action.payload;
        state.totalCocktails = state.cocktails.length;
      })
      .addCase(fetchCocktailsByParams.rejected, state => {
        state.isLoading = false;
        state.cocktails = [];
        state.totalCocktails = 0;
      }),
});

export const drinksSearchReducer = drinksSearchSlice.reducer;
