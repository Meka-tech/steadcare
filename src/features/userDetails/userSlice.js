import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    phoneNumber: ""
  },
  reducers: {
    updateUser: (state, action) => {
      state.firstName = action.firstName;
      state.lastName = action.lastName;
      state.email = action.email;
      state.role = action.payload.role;
      state.phoneNumber = action.phone;
    }
  }
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
