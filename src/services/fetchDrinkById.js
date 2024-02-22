import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setToken } from './fetchAuth';

const instance = axios.create({
  baseURL: 'https://drink-master-project-zi2s.onrender.com',
});

export const getDrinkById = createAsyncThunk(
  'drinks/getDrinkById',
  async (drinkId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      setToken(token);

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await instance.get(`/drinks/${drinkId}`, config);
      console.log('Data:', data);
      return data;
    } catch (error) {
      console.error('Error:', error.data);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
