import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: '',
});

// const setAuthHeader = token => {
//   instance.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   instance.defaults.headers.common.Authorization = '';
// };

export const signUp = createAsyncThunk();

export const signIn = createAsyncThunk();

export const logOut = createAsyncThunk();

export const refreshUser = createAsyncThunk();

export const updateWaterRate = createAsyncThunk();
