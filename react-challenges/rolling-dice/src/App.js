import './App.css';
import Button from "react-bootstrap/Button";

function App() {
	return (
		<div className="App">
			<div className="rolling-container">
				<h2 className="rolling-item">Number of Dice</h2>
				<input className="rolling-item" type={"number"} min={1} max={99}/>
				<Button className="rolling-item" variant="primary">Roll</Button>
			</div>
		</div>

	);
}

export default App;
