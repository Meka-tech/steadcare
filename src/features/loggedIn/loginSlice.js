import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "loggedIn",
  initialState: {
    loggedIn: false
  },
  reducers: {
    updateLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    }
  }
});

export const { updateLoggedIn } = loginSlice.actions;

export default loginSlice.reducer;
