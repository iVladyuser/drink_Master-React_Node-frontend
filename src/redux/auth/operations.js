import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://localhost:3030/users';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearToken = () => {
//   axios.defaults.headers.common['Authorization'] = ``;
// };

export const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post('/signup', credentials);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      if (error.response.status === 409) {
        toast.error('User with this email is already registered');
      } else {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  }
);

export const signIn = createAsyncThunk();

export const logOut = createAsyncThunk();

export const refreshUser = createAsyncThunk();

export const updateWaterRate = createAsyncThunk();
