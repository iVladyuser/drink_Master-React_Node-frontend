import { createSlice, isAnyOf, isRejectedWithValue } from '@reduxjs/toolkit';
import { getMainPageAllDrinks } from '../../services/fetchDrinksForDrinksPages';
const drinksInitialState = {
  items: [],
  isLoading: false,
  error: null,
};
const extraActions = [getMainPageAllDrinks];
const getActions = type =>
  isAnyOf(
    ...extraActions.map(action => {
      return action[type];
    })
  );
const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = isRejectedWithValue(action.payload);
};

const drinksSlice = createSlice({
  name: 'alldrinks',
  initialState: drinksInitialState,
  extraReducers: builder =>
    builder
      .addCase(getMainPageAllDrinks.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addMatcher(getActions('pending'), handlePending)
      .addMatcher(getActions('fulfilled'), fulfilledReducer)
      .addMatcher(getActions('rejected'), handleRejected),
});
export const allDrinksReduser = drinksSlice.reducer;


