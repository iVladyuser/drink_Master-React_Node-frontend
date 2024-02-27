import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from 'pages/FavoritePage/axiosConfig';

export const fetchMyDrinks = createAsyncThunk(
  'myDrinks/fetchMyDrinks',
  async (_, { getState }) => {
    const {
      auth: { token },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      'https://drink-master-project-zi2s.onrender.com/drinks/own',
      config
    );
    return response.data;
  }
);

export const addMyDrink = createAsyncThunk(
  'myDrinks/addMyDrink',
  async (drinkData, { getState, rejectWithValue }) => {
    try {
      const {
        auth: { token },
      } = getState();
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        'https://drink-master-project-zi2s.onrender.com/drinks/own/add',
        drinkData,
        config
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteMyDrink = createAsyncThunk(
  'myDrinks/deleteMyDrink',
  async (drinkId, { getState, rejectWithValue }) => {
    try {
      const {
        auth: { token },
      } = getState();
      if (!token) {
        throw new Error('No token found');
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axiosInstance.delete(
        `/drinks/own/remove/${drinkId}`,
        config
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const myDrinksSlice = createSlice({
  name: 'myDrinks',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMyDrinks.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchMyDrinks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchMyDrinks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectMyDrinksItems = state => state.myDrinks.items;
export const selectMyDrinksStatus = state => state.myDrinks.status;
export const selectMyDrinksError = state => state.myDrinks.error;

export default myDrinksSlice.reducer;
