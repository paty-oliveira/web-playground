import './App.css';
import './mortgage-form/MortgageForm';
import {MortgageForm} from "./mortgage-form/MortgageForm";

function App() {
  return (
    <div className="App">
        <h1>Mortgage Calculator</h1>
        <MortgageForm />
    </div>
  );
}

export default App;
