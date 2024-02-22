import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../pages/FavoritePage/axiosConfig';

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchFavorites',
  async () => {
    const response = await axiosInstance.get('/drinks/favorite');
    return response.data;
  }
);

export const addFavorite = createAsyncThunk(
  'favorites/addFavorite',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        `/drinks/favorite/add/${drinkId}`
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  'favorites/deleteFavorite',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(
        `/drinks/favorite/remove/${drinkId}`
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFavorites.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllFavorites = state => state.favorites.items;
export const selectFavoritesStatus = state => state.favorites.status;
export const selectFavoritesError = state => state.favorites.error;

export default favoritesSlice.reducer;
