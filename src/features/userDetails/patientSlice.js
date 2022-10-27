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
    },
    logOutPatient: (state) => {
      state.name = "";
      state.email = "";
      state.role = "";
      state.phoneNumber = "";
      state.specialty = "";
      state.token = "";
    }
  }
});

export const { updatePatient, updatePatientToken, logOutPatient } =
  patientSlice.actions;

export default patientSlice.reducer;
