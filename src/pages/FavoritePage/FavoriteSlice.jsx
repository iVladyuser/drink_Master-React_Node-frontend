import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import drink1 from './not-found-img/Rectangle 40559.jpeg';
import drink2 from './not-found-img/Rectangle 40559 (1).jpeg';

// export const fetchFavorites = createAsyncThunk(
//   'favorites/fetchFavorites',
//   async () => {
//     const response = await axios.get('/drinks/favorite');
//     return response.data;
//   }
// );

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchFavorites',
  async (_, { fulfillWithValue }) => {
    const mockData = [
      {
        id: '1',
        name: 'Mock Cocktail 1',
        image: drink1,
        isAlcoholic: true,
        description: 'Description for Mock Cocktail 1',
      },
      {
        id: '2',
        name: 'Mock Cocktail 2',
        image: drink2,
        isAlcoholic: false,
        description: 'Description for Mock Cocktail 2',
      },
    ];
    return fulfillWithValue(mockData);
  }
);

export const addFavorite = createAsyncThunk(
  'favorites/addFavorite',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axios.post(`/drinks/favorite/add/${drinkId}`);
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
      const response = await axios.delete(`/drinks/favorite/remove/${drinkId}`);
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
