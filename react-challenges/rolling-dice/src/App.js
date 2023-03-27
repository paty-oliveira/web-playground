import './App.css';
import Button from "react-bootstrap/Button";
import {useState} from "react";
import {Dice} from "./components/Dice";

const rollDiceRandomly = () => {
	const min = 1;
	const max = 6;
	return Math.floor(Math.random() * (max - min) + min);
}

function App() {

	const [userInput, setUserInput] = useState(0);
	const [totalDices, setTotalDices] = useState([]);
	const handleDiceNumberChange = (event) => {
		setUserInput(parseInt(event.target.value));
		setTotalDices([]);
	}

	const handleRollClick = (event) => {
		event.preventDefault();
		const currentDices = Array.from({length: userInput}, () => rollDiceRandomly());
		setTotalDices(currentDices);
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
				<Button
					className="rolling-item"
					variant="primary"
					type="submit"
					onClick={handleRollClick}
				>Roll
				</Button>
			</div>
			<div className="dice-container">
				{
					totalDices.map((number, index) => (
						<div key={index} className="dice">
							<Dice key={index} value={number}/>
						</div>)
					)
				}
			</div>
		</div>
	);
}

export default App;
