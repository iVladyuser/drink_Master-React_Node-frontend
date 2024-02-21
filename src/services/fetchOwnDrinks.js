import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

export const addOwnDrinkThunk = createAsyncThunk(
  'users/avatar',
  async ({ drink, description, category, glass, alcoholic }, thunkApi) => {
    try {
      const formData = new FormData();
      formData.append('drink', drink);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('glass', glass);
      formData.append('alcoholic', alcoholic);
      const { data } = await instance.post('/drinks/own/add', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
