import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { Dashboard } from "./Pages/index";
import ScrollToTop from "./Utilities/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
