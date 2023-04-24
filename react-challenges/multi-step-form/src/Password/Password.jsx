import Button from "react-bootstrap/Button";
import {useState} from "react";
import {useAppState} from "../state";
import {useNavigate} from "react-router-dom";

export function Password() {
	const [state, setState] = useAppState();
	const [isDisabled, setIsDisabled] = useState(true);
	const navigate = useNavigate();

	function handleChange(e) {
		setState({...state, password: e.target.value});
		setIsDisabled(!isDisabled);
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(state);
	}

	function handleClickBack() {
		navigate("/birthday");
	}

	return (
		<form aria-label={"user password"} onSubmit={handleSubmit}>
			<div className={"user-information"}>
				<label htmlFor={"user-password"}>Password</label>
				<input
					id={"user-password"}
					aria-label={"password"}
					type={"password"}
					value={state.password}
					required={true}
					onChange={handleChange}
				/>
			</div>
			<div className={"form-buttons"}>
				<Button variant={"secondary"} onClick={handleClickBack}>Back</Button>
				<Button	variant={"success"}	type={"submit"}	disabled={isDisabled}>Submit</Button>
			</div>
		</form>
	)
}