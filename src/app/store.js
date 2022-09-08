import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userDetails/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import appointmentSlice from "../features/userAppointments/appointmentSlice";

const persistConfig = {
  key: "root",
  storage
};
const rootReducer = combineReducers({
  userDetails: userSlice,
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
