import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setToken } from 'services/fetchAuth';

export const instance = axios.create({
  baseURL: 'https://drink-master-project-zi2s.onrender.com',
});

export const fetchCocktailsByParams = createAsyncThunk(
  'cocktails/fetchCocktailsByParams',
  async (credentials, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setToken(token);

      console.log('token', token);

      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // };
      
      const response = await instance.get('/drinks/search', {
        params: credentials,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
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
