import Button from "react-bootstrap/Button";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAppState} from "../state";

export function Contact() {
	const [state, setState] = useAppState();
	const [isDisabled, setIsDisabled] = useState(true);
	const navigate = useNavigate();

	function handleChange(e) {
		setState({...state, email: e.target.value});
		setIsDisabled(!isDisabled);
	}

	function handleClick() {
		navigate("/birthday");
	}

	return (
		<form aria-label={"user contact"}>
			<div className={"user-information"}>
				<label htmlFor={"email"}>Email</label>
				<input
					id={"email"}
					type={"email"}
					aria-label={"user email"}
					value={state.email}
					required={true}
					onChange={handleChange}
				/>
				<Button
					variant={"primary"}
					disabled={isDisabled}
					onClick={handleClick}
				>Next
				</Button>
			</div>
		</form>
	)
}