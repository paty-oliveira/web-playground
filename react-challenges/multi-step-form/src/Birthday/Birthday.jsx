import Button from "react-bootstrap/Button";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAppState} from "../state";

export function Birthday() {
	const [state, setState] = useAppState();
	const [isDisabled, setIsDisabled] = useState(true);
	const navigate = useNavigate();

	function handleChange(e) {
		setState({...state, birthday: e.target.value});
		setIsDisabled(!isDisabled);
	}

	function handleClick() {
		navigate("/password");
	}

	return (
		<form aria-label={"user birthday"}>
			<div className={"user-information"}>
				<label htmlFor={"user-birthday"}>Birthday</label>
				<input
					id={"user-birthday"}
					aria-label={"birthday-date"}
					type={"date"}
					value={state.birthday}
					min={"1990-01-01"}
					required={true}
					onChange={handleChange}
				/>
				<Button
					disabled={isDisabled}
					onClick={handleClick}
				>Next</Button>
			</div>
		</form>
	)
}
