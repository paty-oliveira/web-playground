import "./LandingPage.css";
import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";

export function LandingPage() {
	const navigate = useNavigate();

	function handleClick() {
		navigate("/name");
	}

	return (
		<div className={"landing-page"}>
			<h1>Welcome to multi-step form!</h1>
			<Button variant={"primary"} onClick={handleClick}>Start</Button>
		</div>
	)
}