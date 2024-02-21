// import { createSlice, isAnyOf, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { instance } from './fetchAuth';
import {  createAsyncThunk } from '@reduxjs/toolkit';
 export const getMainPageAllDrinks = createAsyncThunk(
    'drinks/getAll',
    async (_, thunkAPI) => {
      try {
        const response = await instance.get('/drinks/mainpage');
        console.log("Vlad", response.data);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
  );

