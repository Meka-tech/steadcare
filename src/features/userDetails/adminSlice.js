import { createSlice } from "@reduxjs/toolkit";
import { LogOut } from "../../Utilities/globalFunc";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    name: "",
    email: "",
    role: "",
    phoneNumber: "",
    specialty: "",
    token: ""
  },
  reducers: {
    updateAdmin: (state, action) => {
      const { userDetails } = action.payload;
      state.name = userDetails.name;
      state.email = userDetails.email;
      state.role = userDetails.role;
      state.phoneNumber = userDetails.phone;
      state.specialty = userDetails.specialty;
    },
    updateAdminToken: (state, action) => {
      state.token = action.payload;
    },
    LogOutAdmin: (state) => {
      state.name = "";
      state.email = "";
      state.role = "";
      state.phoneNumber = "";
      state.specialty = "";
      state.token = "";
    }
  }
});

export const { updateAdmin, updateAdminToken, LogOutAdmin } =
  adminSlice.actions;

export default adminSlice.reducer;
