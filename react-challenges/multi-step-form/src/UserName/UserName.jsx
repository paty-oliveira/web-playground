import {useForm} from "react-hook-form";
import "./UserName.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

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
				<button
					disabled={isDisabled}
					onClick={handleClick}
				>Next</button>
			</div>
		</form>
	)
}
