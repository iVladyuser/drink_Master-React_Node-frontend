import { createSlice } from '@reduxjs/toolkit';
import { getDrinkById } from 'services/fetchDrinkById';

const drinkByIdSlice = createSlice({
  name: 'drinkById',
  initialState: {
    drink: null,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getDrinkById.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getDrinkById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.drink = action.payload;
      })
      .addCase(getDrinkById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectErrorDrinkById = state => state.drinkById.error;
export const selectIsLoadingDrinkById = state => state.drinkById.isLoading;

export const selectDrinkById = state => state.drinkById.drink;
export const drinkByIdReducer = drinkByIdSlice.reducer;
