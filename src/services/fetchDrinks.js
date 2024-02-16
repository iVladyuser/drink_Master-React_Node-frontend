// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { instance } from './fetchAuth';


//  export const instance = axios.create({
//     baseURL: 'https://cocktails-backend-cwrh.onrender.com/',
//     // baseURL: 'http://localhost:3001/',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//  export const getMainPageAllDrinks = createAsyncThunk(
//     'drinks/getAll',
//     async (_, thunkAPI) => {
//       try {
//         const response = await instance.get('api/drinks/main-page');
//       //  console.log(response.data);
//         return response.data;
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     },
//   );