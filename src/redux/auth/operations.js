import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const instance = axios.create({
  baseURL: 'https://drink-master-project-backend.onrender.com',
});

const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const signUp = createAsyncThunk(
  'auth/signup',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/users/signup', formData);
      console.log('data:', data);
      setToken(data.token);
      return data;
    } catch (error) {
      if (error.status === 409) {
        toast.error('User with this email is already registered');
      } else {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  }
);

// export const signIn = createAsyncThunk();

// export const logOut = createAsyncThunk();

// export const refreshUser = createAsyncThunk();

// export const updateWaterRate = createAsyncThunk();
