import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    setDrinksFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setDrinksFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;