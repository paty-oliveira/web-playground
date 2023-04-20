import {useForm} from "react-hook-form";
import "./UserName.css";
import {useState} from "react";

export function UserName() {
	const [ name, setName ] = useState("");
	const [ isDisabled, setIsDisabled ] = useState(true);

	function handleChange(e) {
		setName(e.target.value);
		setIsDisabled(!isDisabled);
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
				<button disabled={isDisabled}>Next</button>
			</div>
		</form>
	)
}
