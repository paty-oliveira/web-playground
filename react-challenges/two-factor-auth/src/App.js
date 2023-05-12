import './App.css';
import Button from "react-bootstrap/Button";

function App() {
	return (
		<div className="App">
			<h2>Two-Factor Authenticator</h2>
			<div className={"two-factor-container"}>
				<input aria-label={"input-code-one"}/>
				<input aria-label={"input-code-two"}/>
				<input aria-label={"input-code-three"}/>
				<input aria-label={"input-code-four"}/>
			</div>
			<Button variant={"success"} className={"submit-btn"}>Submit</Button>
		</div>
	);
}

export default App;
