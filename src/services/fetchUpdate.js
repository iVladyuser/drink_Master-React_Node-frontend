import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://drink-master-project-zi2s.onrender.com',
});

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const updateAvatarThunk = createAsyncThunk(
  'users/update/avatar',
  async (avatarFile, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;

      setToken(token);
      console.log(token);
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const formData = new FormData();
      formData.append('avatarURL', avatarFile);
      const response = await instance.patch(
        '/users/update/avatar',
        formData,
        config
      );
      return response.data.avatarURL;
    } catch (error) {
      console.log(avatarFile);
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
  'users/update/name',
  async ({ name }, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;

      setToken(token);
      console.log(token);
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await instance.patch(
        '/users/update/name',
        { name },
        config
      );
      return response.data.name;
    } catch (error) {
      console.log(name);
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
