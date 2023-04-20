import "./LandingPage.css";
import {useNavigate} from "react-router-dom";

export function LandingPage() {
	const navigate = useNavigate();

	function handleClick() {
		navigate("/name");
	}

	return (
		<div className={"landing-page"}>
			<h1>Welcome to multi-step form!</h1>
			<button onClick={handleClick}>Start</button>
		</div>
	)
}