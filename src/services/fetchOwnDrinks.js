import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setToken } from './fetchAuth';
import { toast } from 'react-toastify';

export const instance = axios.create({
  baseURL: 'https://drink-master-project-zi2s.onrender.com',
});

export const fetchCategories = async () => {
  try {
    const response = await axios.get('/filters/categories');
    return response.data.categories;
  } catch (error) {
    console.error('Error when receving data - categories: ', error);
  }
};

export const fetchGlasses = async () => {
  try {
    const response = await axios.get('/filters/glasses');
    return response.data.glasses;
  } catch (error) {
    console.error('Error when receving data - glasses: ', error);
  }
};

export const fetchIngredients = async () => {
  try {
    const response = await axios.get('/filters/ingredients');
    return response.data.ingredients;
  } catch (error) {
    console.error('Error when receving data - ingredients: ', error);
  }
};

export const addOwnDrinkThunk = createAsyncThunk(
  '/drinks/own/add',
  async (formData, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setToken(token);

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await instance.post('/drinks/own/add', formData, config);
      toast.success('New drink added successfully!');

      return data;
    } catch (err) {
      console.error('Error:', err.data);
      toast.error('Invalid data try again!');

      return thunkApi.rejectWithValue(err.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.auth.token;
      if (!token) return false;

      return true;
    },
  }
);
