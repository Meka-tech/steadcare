import "./App.css";
import Button from "./Componets/Button/Button";
import Form from "./Componets/Form/Form";

function App() {
  return (
    <div className="App">
      <Form title="First Name" placeholder="First Name" type="text" />

      <Button />
    </div>
  );
}

export default App;
