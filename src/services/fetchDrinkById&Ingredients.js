import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from './fetchAuth';

export const getDrinkById = createAsyncThunk(
  'drinks/drinkId',
  async (drinkId, thunkAPI) => {
    try {
      const { data } = await instance.get(`/drinks/${drinkId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getIngredients = createAsyncThunk(
  'filters/ingredients',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get(`/filters/ingredients`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
