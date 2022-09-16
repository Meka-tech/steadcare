import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "loggedIn",
  initialState: {
    loggedIn: false,
    role: ""
  },
  reducers: {
    updateLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    updateLoggedInRole: (state, action) => {
      state.role = action.payload;
    }
  }
});

export const { updateLoggedIn, updateLoggedInRole } = loginSlice.actions;

export default loginSlice.reducer;
