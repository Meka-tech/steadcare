import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  CreateNewPassword,
  PatientDashboard,
  DoctorProfile,
  EmailSent,
  Login,
  OtpVerification,
  ResetPassword,
  UserSignUp,
  PatientProfile,
  PatientAppointment,
  PatientMedicalHistory
} from "./Pages/index";
import { ScrollToTop } from "./Utilities";
// import store from "./app/store";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router>
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<PatientDashboard />} />

                <Route path="/sign-up" element={<UserSignUp />} />
                <Route
                  path="/sign-up/otp-verification"
                  element={<OtpVerification />}
                />
                <Route
                  path="/sign-up/doctor-profile"
                  element={<DoctorProfile />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route
                  path="/reset-password/email-sent"
                  element={<EmailSent />}
                />
                <Route
                  path="/reset-password/create-new-password"
                  element={<CreateNewPassword />}
                />
                {/* ////Patient dashboard/////////////// */}
                <Route path="/patient/home" element={<PatientDashboard />} />
                <Route path="/patient/profile" element={<PatientProfile />} />
                <Route
                  path="/patient/appointments"
                  element={<PatientAppointment />}
                />
                <Route
                  path="/patient/medical-history"
                  element={<PatientMedicalHistory />}
                />
              </Routes>
            </ScrollToTop>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
