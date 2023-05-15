import './App.css';
import Button from "react-bootstrap/Button";
import { useRef, useState } from "react";

function App() {
	const [inputs, setInputs] = useState(["", "", "", ""]);
	const [isDisabled, setIsDisabled] = useState(true);
	const inputRefs = useRef([]);
	const twoFactorCode = inputs.join("");

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

		if (twoFactorCode.length === 3 && index === inputRefs.current.length - 1) {
			setIsDisabled(!isDisabled);
		}
	};

	function handleBackspacePress(index, e) {
		const currentNumber = e.target.value;

		if (e.key === 'Backspace' && index > 0 && currentNumber.length === 0) {
			inputRefs.current[index - 1].focus();
		}
	}

	function handleOnClick(e) {
		e.preventDefault();
		console.log(twoFactorCode);
	}

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
						onKeyDown={(e => handleBackspacePress(index, e))}
					/>
				))}
			</div>
			<Button variant="success" className="submit-btn" disabled={isDisabled} onClick={handleOnClick}>
				Submit
			</Button>
		</div>
	);
}

export default App;
