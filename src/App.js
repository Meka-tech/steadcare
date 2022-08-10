import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { Dashboard, DoctorProfile, UserSignUp } from "./Pages/index";
import { ScrollToTop } from "./Utilities";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sign-up" element={<UserSignUp />} />
            <Route path="/sign-up/doctorProfile" element={<DoctorProfile />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
