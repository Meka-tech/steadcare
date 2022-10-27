import { createSlice } from "@reduxjs/toolkit";

export const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    name: "",
    email: "",
    role: "",
    phoneNumber: "",
    specialty: "",
    token: ""
  },
  reducers: {
    updateDoctor: (state, action) => {
      const { userDetails } = action.payload;
      state.name = userDetails.name;
      state.email = userDetails.email;
      state.role = userDetails.role;
      state.phoneNumber = userDetails.phone;
      state.specialty = userDetails.specialty;
    },
    updateDoctorToken: (state, action) => {
      state.token = action.payload;
    },
    LogOutDoctor: (state) => {
      state.name = "";
      state.email = "";
      state.role = "";
      state.phoneNumber = "";
      state.specialty = "";
      state.token = "";
    }
  }
});

export const { updateDoctor, updateDoctorToken, LogOutDoctor } =
  doctorSlice.actions;

export default doctorSlice.reducer;
