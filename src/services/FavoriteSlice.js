import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../pages/FavoritePage/axiosConfig';
import axios from 'axios';

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchFavorites',
  async () => {
    const response = await axiosInstance.get('/drinks/favorite');
    return response.data;
  }
);

export const addFavorite = createAsyncThunk(
  'favorites/addFavorite',
  async (drinkId, { getState, rejectWithValue }) => {
    try {
      const {
        auth: { token },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        `https://drink-master-project-zi2s.onrender.com/drinks/favorite/add/${drinkId}`,
        {},
        config
      );
      return response.data;
    } catch (err) {
      console.error('Error:', err.response ? err.response.data : err);
      return rejectWithValue(err.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        auth: { token },
      } = getState();
      if (!token) {
        console.log('No token found, aborting!');
        return false;
      }
      return true;
    },
  }
);

export const deleteFavorite = createAsyncThunk(
  'favorites/deleteFavorite',
  async (drinkId, { getState, rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `/drinks/favorite/remove/${drinkId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
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
      })

      .addCase(addFavorite.pending, state => {
        state.status = 'loading';
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addFavorite.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteFavorite.pending, state => {
        state.status = 'loading';
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        const idx = state.items.findIndex(
          drink => drink._id === action.payload._id
        );
        state.items.splice(idx, 1);
      })
      .addCase(deleteFavorite.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllFavorites = state => state.favorites.items;
export const selectFavoritesStatus = state => state.favorites.status;
export const selectFavoritesError = state => state.favorites.error;

export default favoritesSlice.reducer;
