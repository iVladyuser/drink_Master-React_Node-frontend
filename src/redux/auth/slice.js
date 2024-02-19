// import { createSlice } from '@reduxjs/toolkit';
// import { signUp } from './operations';
// // import { logOut, refreshUser, signIn, signUp } from './operations';

// const initialState = {
//   userData: null,
//   token: '',
//   isLoggedIn: false,
//   isLoading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {},
//   extraReducers: builder =>
//     builder
//       .addCase(signUp.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(signUp.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.user = payload.user;
//         state.token = payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(signUp.rejected, state => {
//         state.isLoading = false;
//       }),
// });

// export const authReducer = authSlice.reducer;

import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { signUp } from './operations.js';

const initialState = {
  isLoading: false,
  error: null,
  authenticated: false,
  token: null,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      // .addCase(authThunk.loginThunk.fulfilled, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.authenticated = true;
      //   state.token = payload.token;
      //   state.userData = payload.user;
      // })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      // .addCase(authThunk.logOutThunk.fulfilled, () => {
      //   return initialState;
      // })
      // .addCase(authThunk.refreshThunk.fulfilled, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.authenticated = true;
      //   state.userData = payload;
      // })
      // .addCase(authThunk.updateAvatarThunk.fulfilled, (state, { payload }) => {
      //   state.userData.avatarURL = payload;
      // })
      .addMatcher(
        isAnyOf(
          // authThunk.loginThunk.pending,
          signUp.pending
          //   authThunk.refreshThunk.pending,
          //   authThunk.logOutThunk.pending,
          //   authThunk.updateAvatarThunk.pending
        ),
        state => {
          state.isLoading = true;
          // state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          // authThunk.loginThunk.rejected,
          signUp.rejected
          // authThunk.refreshThunk.rejected,
          // authThunk.logOutThunk.rejected,
          // authThunk.updateAvatarThunk.rejected
        ),
        state => {
          state.isLoading = false;
          // state.error = payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
