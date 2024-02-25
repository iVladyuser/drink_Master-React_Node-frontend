import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setToken } from './fetchAuth';

export const instance = axios.create({
  baseURL: 'https://drink-master-project-zi2s.onrender.com',
});

export const fetchPopular = createAsyncThunk(
  'rinks/popular',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setToken(token);

      console.log('token', token);

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await instance.get('/drinks/popular', config);

      // const { data } = await instance.post('/drinks/own/add', formData, config);
      console.log('Done,:', response.data);

      return response.data;
    } catch (err) {
      console.error('Error:', err.data);
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
