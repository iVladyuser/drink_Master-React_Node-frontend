 import { createAsyncThunk } from '@reduxjs/toolkit';
 import { instance } from './fetchAuth';

export const getHomePageCocktails = createAsyncThunk(
  'drinks/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/drinks/mainpage');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

