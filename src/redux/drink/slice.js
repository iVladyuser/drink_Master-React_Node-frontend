import { createSlice } from '@reduxjs/toolkit';
import { getDrinkById } from '../../services/fetchDrinkById&Ingredients';

const initialDrinkState = {
  drink: {},
  isLoading: false,
  error: null,
};

const drinkSlice = createSlice({
  name: 'drink',
  initialState: initialDrinkState,

  extraReducers: builder => {
    builder
      .addCase(getDrinkById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.drink = payload;
      })

      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, action) => {
          state.isLoading = true;
          state.error = action.payload;
        }
      );
  },
});

export const drinkReducer = drinkSlice.reducer;
