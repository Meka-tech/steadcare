import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import appointmentSlice from "../features/userAppointments/appointmentSlice";
import patientSlice from "../features/userDetails/patientSlice";
import doctorSlice from "../features/userDetails/doctorSlice";

const persistConfig = {
  key: "root",
  storage
};
const rootReducer = combineReducers({
  patientDetails: patientSlice,
  doctorDetails: doctorSlice,
  appointments: appointmentSlice
});
const persistedUserReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    reducer: persistedUserReducer
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk]
});

export const persistor = persistStore(store);
