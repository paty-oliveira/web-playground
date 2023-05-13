import './App.css';
import Button from "react-bootstrap/Button";
import { useRef, useState } from "react";

function App() {
	const [inputs, setInputs] = useState(["", "", "", ""]);
	const inputRefs = useRef([]);

	const setInputRefs = (index, ref) => {
		inputRefs.current[index] = ref;
	};

	const handleInputChange = (index, e) => {
		const currentNumber = e.target.value;
		const newInputs = [...inputs];
		newInputs[index] = currentNumber;
		setInputs(newInputs);

		if (currentNumber.length === 1 && index < inputRefs.current.length - 1) {
			inputRefs.current[index + 1].focus();
		}
	};

	return (
		<div className="App">
			<h2>Two-Factor Authenticator</h2>
			<div className="two-factor-container">
				{inputs.map((value, index) => (
					<input
						key={index}
						ref={(ref) => setInputRefs(index, ref)}
						aria-label={`input-code-${index}`}
						type="number"
						min="0"
						max="9"
						value={value}
						onChange={(e) => handleInputChange(index, e)}
					/>
				))}
			</div>
			<Button variant="success" className="submit-btn">
				Submit
			</Button>
		</div>
	);
}

export default App;
