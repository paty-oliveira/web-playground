import {useState} from "react";
import {Props} from "./types.ts"
import "./style.css"

const Accordion = ({title, description}: Props) => {
	const [isHidden, setIsHidden] = useState(true);

	const handleOnClick = () => {
		setIsHidden(!isHidden);
	}

	return (
		<div className="wrapper">
			<div className="title-section" onClick={handleOnClick}>
				{title}{' '}
				<span
					aria-hidden={true}
					className={isHidden ? "accordion-icon" : "accordion-icon accordion-icon--rotated"}
				/>
			</div>
			<div className="description-section" hidden={isHidden}>
				{description}
			</div>
		</div>

	)
}

export default Accordion;