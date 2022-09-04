import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    role: "",
    phoneNumber: "",
    token: ""
  },
  reducers: {
    updateUser: (state, action) => {
      const { userDetails } = action.payload;
      state.name = userDetails.name;
      state.email = userDetails.email;
      state.role = userDetails.role;
      state.phoneNumber = userDetails.phone;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    }
  }
});

export const { updateUser, updateToken } = userSlice.actions;

export default userSlice.reducer;
