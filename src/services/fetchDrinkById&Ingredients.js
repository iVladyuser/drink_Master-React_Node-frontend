import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { instance } from './fetchAuth';

const instance = axios.create({
  baseURL: 'https://drink-master-project-zi2s.onrender.com',
});

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
