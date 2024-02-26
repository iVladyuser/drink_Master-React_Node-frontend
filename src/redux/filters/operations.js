import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setToken } from 'services/fetchAuth';

export const instance = axios.create({
  baseURL: 'https://drink-master-project-zi2s.onrender.com',
});

export const fetchCategories = createAsyncThunk(
  'filters/fetchCategories',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;

    if (!token) {
      throw new Error('Authorization token is required');
    }

    setToken(token);

    try {
      const response = await instance.get('/filters/categories', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`API request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }
);

export const fetchIngredients = createAsyncThunk(
  'filters/fetchIngredients',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;

    if (!token) {
      throw new Error('Authorization token is required');
    }
    setToken(token);
    try {
      const response = await instance.get('/filters/ingredients', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`API request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching ingredients:', error);
      throw error;
    }
  }
);

export const fetchGlasses = createAsyncThunk(
  'filters/fetchGlasses',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;

    if (!token) {
      throw new Error('Authorization token is required');
    }

    setToken(token);

    try {
      const response = await instance.get('/filters/glasses', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`API request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching glasses:', error);
      throw error;
    }
  }
);
