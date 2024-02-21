import { createSlice, isAnyOf, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { instance } from './fetchAuth';

 export const getMainPageAllDrinks = createAsyncThunk(
    'drinks/getAll',
    async (_, thunkAPI) => {
      try {
        const response = await instance.get('/drinks/main-page');
        console.log("Vlad", response.data);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
  );


  const drinksInitialState = {
    items: [],
    isLoading: false,
    error: null,
  };
  const extraActions = [getMainPageAllDrinks];
  const getActions = type =>
    isAnyOf(
      ...extraActions.map(action => {
        return action[type];
      })
    );
    const fulfilledReducer = state => {
      state.isLoading = false;
      state.error = null;
    };
  const handlePending = state => {
    state.isLoading = true;
  };
  
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error =  isRejectedWithValue(action.payload);
  };
  
  
  
  const drinksSlice = createSlice({
    name: 'alldrinks',
    initialState: drinksInitialState,
    extraReducers: builder =>
    builder
      .addCase(getMainPageAllDrinks.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addMatcher(getActions('pending'), handlePending)
      .addMatcher(getActions('fulfilled'), fulfilledReducer)
      .addMatcher(getActions('rejected'), handleRejected),
});

  export const selectAllDrinks = state => state.alldrinks.items;
  export const selectDrinksError = state => state.alldrinks.error;
  export const selectIsLoading = state => state.alldrinks.isLoading;
  
  export const allDrinksReduser = drinksSlice.reducer;
  
