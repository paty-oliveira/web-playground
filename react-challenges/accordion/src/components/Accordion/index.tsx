import {useState} from "react";
import {Props} from "./types.ts"
import "./style.css"

const Accordion = ({title, description}: Props) => {
	const [hidden, setHidden] = useState(true);

	const handleOnClick = () => {
		setHidden(!hidden);
	}

	return (
		<div className="wrapper">
			<div className="title-section" onClick={handleOnClick}>
				{title}{' '}
				<span
					aria-hidden={true}
					className={hidden ? "accordion-icon" : "accordion-icon accordion-icon--rotated"}
				/>
			</div>
			<div className="description-section" hidden={hidden}>
				{description}
			</div>
		</div>

	)
}

export default Accordion;