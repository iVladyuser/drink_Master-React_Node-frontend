import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getDrinkById, getIngredients } from './operations';

const initialDrinkState = {
  drink: {},
  ingredients: [],
  isLoading: false,
  error: null,
};

const drinkSlice = createSlice({
  name: 'drink',
  initialState: initialDrinkState,

  extraReducers: builder =>
    builder
      .addCase(getDrinkById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.drink = payload;
      })
      .addCase(getIngredients.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.ingredients = payload;
      })

      .addMatcher(
        isAnyOf(getDrinkById.pending, getIngredients.pending),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(getDrinkById.rejected, getIngredients.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const drinkReducer = drinkSlice.reducer;
