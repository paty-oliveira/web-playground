import Button from "react-bootstrap/Button";
import {useState} from "react";
import {useAppState} from "../state";

export function Password() {
	const [state, setState] = useAppState();
	const [isDisabled, setIsDisabled] = useState(true);

	function handleChange(e) {
		setState({...state, password: e.target.value});
		setIsDisabled(!isDisabled);
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(state);
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
				<Button
					variant={"success"}
					type={"submit"}
					disabled={isDisabled}
				>Submit</Button>
			</div>
		</form>
	)
}