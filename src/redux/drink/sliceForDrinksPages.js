// import { createSlice, isAnyOf, isRejectedWithValue } from '@reduxjs/toolkit';
// import { getMainPageAllDrinks } from '../../services/fetchDrinksForDrinksPages';
// const drinksInitialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };
// const extraActions = [getMainPageAllDrinks];
// const getActions = type =>
//   isAnyOf(
//     ...extraActions.map(action => {
//       return action[type];
//     })
//   );
// const fulfilledReducer = state => {
//   state.isLoading = false;
//   state.error = null;
// };
// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = isRejectedWithValue(action.payload);
// };

// const drinksSlice = createSlice({
//   name: 'alldrinks',
//   initialState: drinksInitialState,
//   extraReducers: builder =>
//     builder
//       .addCase(getMainPageAllDrinks.fulfilled, (state, action) => {
//         state.items = action.payload;
//       })
//       .addMatcher(getActions('pending'), handlePending)
//       .addMatcher(getActions('fulfilled'), fulfilledReducer)
//       .addMatcher(getActions('rejected'), handleRejected),
// });
// export const allDrinksReduser = drinksSlice.reducer;



import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getMainPageAllDrinks } from '../../services/fetchDrinksForDrinksPages';

// Начальное состояние
const drinksInitialState = {
  items: [],
  isLoading: false,
  error: null,
};



// Редукторы
const fulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload; // Мы используем action.payload, так как rejectWithValue уже возвращает payload ошибки
};

// Создание среза (slice)
const drinksSlice = createSlice({
  name: 'alldrinks',
  initialState: drinksInitialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addMatcher(isAnyOf(getMainPageAllDrinks.pending), handlePending)
      .addMatcher(isAnyOf(getMainPageAllDrinks.fulfilled), fulfilledReducer)
      .addMatcher(isAnyOf(getMainPageAllDrinks.rejected), handleRejected),
});

// Экспорт редуктора
export const allDrinksReduser = drinksSlice.reducer;