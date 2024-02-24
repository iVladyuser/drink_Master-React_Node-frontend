
import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  searchQuery: '',
  categoryFilter: '',
  ingredientFilter: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
    },
    setIngredientFilter: (state, action) => {
      state.ingredientFilter = action.payload;
    },
  },
});

export const { setSearchQuery, setCategoryFilter, setIngredientFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;