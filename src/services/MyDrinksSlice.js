import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../pages/FavoritePage/axiosConfig';

export const fetchMyDrinks = createAsyncThunk(
  'myDrinks/fetchMyDrinks',
  async () => {
    const response = await axiosInstance.get('/drinks/own');
    return response.data;
  }
);

export const addMyDrink = createAsyncThunk(
  'myDrinks/addMyDrink',
  async (drinkData, thunkAPI) => {
    try {
      const response = await axiosInstance.post('/drinks/own/add', drinkData);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteMyDrink = createAsyncThunk(
  'myDrinks/deleteMyDrink',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(
        `/drinks/own/remove/${drinkId}`
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
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
