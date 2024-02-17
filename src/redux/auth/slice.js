import { createSlice } from '@reduxjs/toolkit';
import { signUp } from './operations';
// import { logOut, refreshUser, signIn, signUp } from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
    avatarURL: '',
  },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
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
