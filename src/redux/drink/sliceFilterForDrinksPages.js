import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  searchQuery: '',
  categoryFilter: '',
  ingredientFilter: '',
  uniqueIngredients: [], 
  uniqueCategories: [],  
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
    setUniqueIngredients: (state, action) => {
      state.uniqueIngredients = action.payload;
    },
    setUniqueCategories: (state, action) => {
      state.uniqueCategories = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setCategoryFilter,
  setIngredientFilter,
  setUniqueIngredients,  
  setUniqueCategories,   
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

