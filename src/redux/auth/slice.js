import { createSlice } from '@reduxjs/toolkit';
// import { logOut, refreshUser, signIn, signUp } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
    password: null,
    avatarURL: null,
    gender: null,
    dailyNorma: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  isLoading: false,
};

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
//   state.isLoading = false;
// };
// const handlePending = (state, action) => {
//   state.isLoading = true;
// };
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {},
});

export const authReducer = authSlice.reducer;
