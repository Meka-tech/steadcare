import "./App.css";
import { PasswordForm, TextForm } from "./Components/index";

function App() {
  return (
    <div className="App">
      <PasswordForm
        title="First Name"
        errorMsg="Please enter an email in the valid format e.g example@gmail.com"
      />
      <TextForm title="Email" />
    </div>
  );
}

export default App;
