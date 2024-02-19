import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { signUpThunk } from '../../services/fetchAuth';

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

      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userData = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })

      .addMatcher(
        isAnyOf(
          // authThunk.loginThunk.pending,
          signUpThunk.pending
          //   authThunk.refreshThunk.pending,
          //   authThunk.logOutThunk.pending,
          //   authThunk.updateAvatarThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          // authThunk.loginThunk.rejected,
          signUpThunk.rejected
          // authThunk.refreshThunk.rejected,
          // authThunk.logOutThunk.rejected,
          // authThunk.updateAvatarThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
