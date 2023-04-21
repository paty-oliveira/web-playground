import "./UserName.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";

export function UserName() {
	const [ name, setName ] = useState("");
	const [ isDisabled, setIsDisabled ] = useState(true);
	const navigate = useNavigate();

	function handleChange(e) {
		setName(e.target.value);
		setIsDisabled(!isDisabled);
	}

	function handleClick() {
		navigate("/contact");
	}

	return (
		<form aria-label={"user name"}>
			<div className={"user-information"}>
				<label htmlFor={"name"}>Name</label>
				<input
					id={"name"}
					type={"text"}
					aria-label={"user name"}
					value={name}
					onChange={handleChange}
				/>
				<Button
					variant={"primary"}
					disabled={isDisabled}
					onClick={handleClick}
				>Next</Button>
			</div>
		</form>
	)
}
