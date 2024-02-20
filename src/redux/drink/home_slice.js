import { createSlice } from '@reduxjs/toolkit';
import { getHomePageCocktails } from 'services/fetchDrinks';

const drinksSlice = createSlice({
  name: 'drinks',
  initialState: {
    drinks: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHomePageCocktails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.drinks = action.payload;
      })
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state,action) => {
          state.isLoading = true;
          state.error = action.payload;
        }
      );
  },
});

export const drinksReducer = drinksSlice.reducer;