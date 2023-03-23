import './App.css';
import Button from "react-bootstrap/Button";
import {useState} from "react";

function App() {

	const [diceNumber, setDiceNumber] = useState("0");

	const handleDiceNumberChange = (event) => {
		setDiceNumber(event.target.value);
	}

	return (
		<div className="App">
			<div className="rolling-container">
				<h2 className="rolling-item">Number of Dice</h2>
				<input
					className="rolling-item"
					type={"number"}
					min={1}
					max={99}
					onChange={handleDiceNumberChange}
				/>
				<Button className="rolling-item" variant="primary">Roll</Button>
			</div>
		</div>
	);
}

export default App;
