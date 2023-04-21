import Button from "react-bootstrap/Button";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export function Birthday() {
	const [birthday, setBirthday] = useState("");
	const [isDisabled, setIsDisabled] = useState(true);
	const navigate = useNavigate();

	function handleChange(e) {
		setBirthday(e.target.value);
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
					value={birthday}
					min={"1990-01-01"}
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
