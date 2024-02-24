
import { instance } from './fetchAuth';
import { createAsyncThunk } from '@reduxjs/toolkit';




export const getMainPageAllDrinks = createAsyncThunk(
  'drinks/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/drinks/mainpage');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// export const fetchCategories = createAsyncThunk(
//   'drinks/categories',
//   async (_, thunkAPI) => {
//     try {
//       const response = await instance.get('/filters/categories');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// export const fetchIngredients = createAsyncThunk(
//   'drinks/ingredients',
//   async (_, thunkAPI) => {
//     try {
//       const response = await instance.get('/filters/ingredients');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// export const getMainPageAllDrinks = createAsyncThunk(
//   'drinks/getAll',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await instance.get('/drinks/mainpage');

//       // Извлекаем уникальные ингредиенты из всех напитков
//       const uniqueIngredients = Array.from(
//         new Set(data.flatMap(drink => drink.ingredients.map(ingredient => ingredient.title)))
//       );

//       // Извлекаем уникальные категории из всех напитков
//       const uniqueCategories = Array.from(new Set(data.map(drink => drink.category)));

//       return { data, uniqueIngredients, uniqueCategories };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );