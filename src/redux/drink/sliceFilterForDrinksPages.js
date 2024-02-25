import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  searchQuery: '',
  categoryFilter: '',
  ingredientFilter: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { ...filtersInitialState, results: [] },
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
    setResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { setSearchQuery, setCategoryFilter, setIngredientFilter, setResults } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
