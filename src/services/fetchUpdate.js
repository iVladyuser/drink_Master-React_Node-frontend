import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://drink-master-project-zi2s.onrender.com',
});

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const updateAvatarThunk = createAsyncThunk(
  'users/updateAvatar',
  async ({ avatarFile, avatarFileName }, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;

      setToken(token);

      const formData = new FormData();
      formData.append('avatarURL', avatarFile, avatarFileName);

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await instance.patch(
        'users/update',
        formData,
        config
      );
      return response.data.avatarURL;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
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

export const updateNameThunk = createAsyncThunk(
  'users/updateName',
  async ({ name }, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;

      setToken(token);

      const response = await instance.patch(
        'users/update',
        { name }
      );
      return response.data.name;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
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
