import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Dashboard,
  DoctorProfile,
  EmailSent,
  Login,
  OtpVerification,
  ResetPassword,
  UserSignUp
} from "./Pages/index";
import { ScrollToTop } from "./Utilities";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sign-up" element={<UserSignUp />} />
            <Route
              path="/sign-up/otp-verification"
              element={<OtpVerification />}
            />
            <Route path="/sign-up/doctor-profile" element={<DoctorProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/reset-password/email-sent" element={<EmailSent />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
