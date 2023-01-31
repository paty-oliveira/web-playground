import './App.css';
import {CountDownTimer} from "./timer/CountDownTimer";

function App() {
  return (
    <div className="App">
      <CountDownTimer countdownTimestampMs={1675195200000}/>
    </div>
  );
}

export default App;
