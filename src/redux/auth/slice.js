import { createSlice } from '@reduxjs/toolkit';
import { signUp } from './operations';
// import { logOut, refreshUser, signIn, signUp } from './operations';

const initialState = {
  userData: null,
  token: '',
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(signUp.pending, state => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signUp.rejected, state => {
        state.isLoading = false;
      }),
});

export const authReducer = authSlice.reducer;
