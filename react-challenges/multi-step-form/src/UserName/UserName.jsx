import "./UserName.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {useAppState} from "../state";

export function UserName() {
	const [state, setState] = useAppState();
	const [isDisabled, setIsDisabled] = useState(true);
	const navigate = useNavigate();

	function handleChange(e) {
		setState({...state, name: e.target.value})
		setIsDisabled(!isDisabled);
	}

	function handleClickNext() {
		navigate("/contact");
	}

	function handleClickBack() {
		navigate("/");
	}

	return (
		<form aria-label={"user name"}>
			<div className={"user-information"}>
				<label htmlFor={"name"}>Name</label>
				<input
					id={"name"}
					type={"text"}
					aria-label={"user name"}
					value={state.name}
					required={true}
					onChange={handleChange}
				/>
			</div>
			<div className={"form-buttons"}>
				<Button variant={"secondary"} onClick={handleClickBack}>Back</Button>
				<Button variant={"primary"} disabled={isDisabled} onClick={handleClickNext}>Next</Button>
			</div>
		</form>
	)
}
