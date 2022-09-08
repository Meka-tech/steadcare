import { createSlice } from "@reduxjs/toolkit";

export const appointmentSlice = createSlice({
  name: "session",
  initialState: {
    amount: 0
  },
  reducers: {
    updateNumberOfAppointment: (state, action) => {
      state.amount = action.payload;
    }
  }
});

export const { updateNumberOfAppointment } = appointmentSlice.actions;

export default appointmentSlice.reducer;
