// import { createSlice, isAnyOf, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { instance } from './fetchAuth';
import { createAsyncThunk } from '@reduxjs/toolkit';


// export const getMainPageAllDrinks = createAsyncThunk(
//   'drinks/getAll',
//   async ({ page, limit }, { rejectWithValue }) => {
//     try {
//       const response = await instance.get('/drinks/mainpage', {
//         params: { page, limit },
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );


export const fetchCategories = createAsyncThunk(
  'drinks/categories',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/filters/categories');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchIngredients = createAsyncThunk(
  'drinks/ingredients',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/filters/ingredients');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
