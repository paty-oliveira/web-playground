import Button from "react-bootstrap/Button";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export function Contact() {
	const [isDisabled, setIsDisabled] = useState(true);
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	function handleChange(e) {
		setEmail(e.target.value);
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
					value={email}
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