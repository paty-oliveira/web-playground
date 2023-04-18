import {useForm} from "react-hook-form";
import "./UserName.css";

export function UserName() {
	const { register} = useForm();

	return (
		<form aria-label={"user name"}>
			<div className={"user-information"}>
				<label htmlFor={"name"}>Name</label>
				<input
					id={"name"}
					type={"text"}
					aria-label={"user name"}
					{...register("name")}/>
				<button>Next</button>
			</div>
		</form>
	)
}