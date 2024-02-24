import { createSlice } from '@reduxjs/toolkit';

const routeSlice = createSlice({
  name: 'route',
  initialState: {
    route: null,
  },
  reducers: {
    setSelectedRoute: (state, { payload }) => {
      state.route = payload;
    },
  },
});

export const { setSelectedRoute } = routeSlice.actions;
export const routeReducer = routeSlice.reducer;
