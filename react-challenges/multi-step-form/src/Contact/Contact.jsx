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

	function handleClickNext() {
		navigate("/birthday");
	}

	function handleClickBack() {
		navigate("/name");
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
			</div>
			<div className={"form-buttons"}>
				<Button variant={"secondary"} onClick={handleClickBack}>Back</Button>
				<Button variant={"primary"}	disabled={isDisabled} onClick={handleClickNext}>Next</Button>
			</div>
		</form>
	)
}