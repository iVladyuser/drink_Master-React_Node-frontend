import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  signUpThunk,
  signInThunk,
  refreshThunk,
  logOutThunk,
} from '../../services/fetchAuth';

const initialState = {
  userData: null,
  age: 0,
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

      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userData = payload.user;
        state.age = payload.user.age;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userData = payload.user;
        state.age = payload.user.age;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userData = payload;
        state.age = payload.age;
        state.isLoggedIn = true;
      })
      .addCase(logOutThunk.fulfilled, state => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.token = null;
        state.userData = null;
        state.age = 0;
      })

      .addMatcher(
        isAnyOf(
          signInThunk.pending,
          signUpThunk.pending,
          refreshThunk.pending,
          logOutThunk.pending
          //   authThunk.updateAvatarThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          signInThunk.rejected,
          signUpThunk.rejected,
          refreshThunk.rejected,
          logOutThunk.rejected
          // authThunk.updateAvatarThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
