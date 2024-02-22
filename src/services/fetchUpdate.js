import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const instance = axios.create({
  baseURL: 'https://drink-master-project-zi2s.onrender.com',
});

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const updateAvatarThunk = createAsyncThunk(
  'users/avatar',
  async (avatarFile, thunkApi) => {
    try {
      const formData = new FormData();
      formData.append('avatar', avatarFile);
      const response = await instance.post('/users/avatar', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data.avatarURL;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);


export const updateNameThunk = createAsyncThunk(
  'users/update',
  async (newName, thunkApi) => {
    try {
      const response = await instance.patch('/users/update', { name: newName });
      return response.data.name;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
