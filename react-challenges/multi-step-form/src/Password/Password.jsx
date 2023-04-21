import Button from "react-bootstrap/Button";
import {useState} from "react";

export function Password() {
	const [isDisabled, setIsDisabled] = useState(true);
	const [password, setPassword] = useState("");

	function handleChange(e) {
		setPassword(e.target.value);
		setIsDisabled(!isDisabled);
	}

	return (
		<form aria-label={"user password"}>
			<div className={"user-information"}>
				<label htmlFor={"user-password"}>Password</label>
				<input
					id={"user-password"}
					aria-label={"password"}
					type={"password"}
					value={password}
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