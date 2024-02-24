
import { instance } from './fetchAuth';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const getMainPageAllDrinks = createAsyncThunk(
  'drinks/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/drinks/mainpage');

      
      const uniqueIngredients = Array.from(
        new Set(data.flatMap(drink => drink.ingredients.map(ingredient => ingredient.title)))
      );

      const uniqueCategories = Array.from(new Set(data.map(drink => drink.category)));

      return { data, uniqueIngredients, uniqueCategories };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);