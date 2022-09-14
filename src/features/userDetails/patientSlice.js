import { createSlice } from "@reduxjs/toolkit";

export const patientSlice = createSlice({
  name: "patient",
  initialState: {
    name: "",
    email: "",
    role: "",
    phoneNumber: "",
    token: ""
  },
  reducers: {
    updatePatient: (state, action) => {
      const { userDetails } = action.payload;
      state.name = userDetails.name;
      state.email = userDetails.email;
      state.role = userDetails.role;
      state.phoneNumber = userDetails.phone;
    },
    updatePatientToken: (state, action) => {
      state.token = action.payload;
    }
  }
});

export const { updatePatient, updatePatientToken } = patientSlice.actions;

export default patientSlice.reducer;
