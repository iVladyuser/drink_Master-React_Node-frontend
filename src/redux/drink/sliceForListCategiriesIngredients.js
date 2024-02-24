
import { createSlice } from '@reduxjs/toolkit';

const sharedListsInitialState = {
  categories: [],
  ingredients: [],
};

const sharedListsSlice = createSlice({
  name: 'sharedLists',
  initialState: sharedListsInitialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setIngredients: (state, action) => {
      state.ingredients = action.payload;
    },
  },
});

export const { setCategories, setIngredients } = sharedListsSlice.actions;
export const sharedListsReducer = sharedListsSlice.reducer;

// Добавим селектор
export const selectSharedLists = state => state.sharedLists;