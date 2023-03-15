import {useState} from "react";
import './ShoppingList.css';

export function ShoppingList(props) {
	const [checked, setChecked] = useState(new Array(props.shoppingList.length).fill(false));
	const handleCheckBoxChange = (position) => {
		const updatedState = checked.map((item, index) =>
			index === position ? !item : item
		)
		setChecked(updatedState);
	}

	return (
		<div className="shopping-list">
			<ul>
				{
					props.shoppingList
						.map((item, index) =>
							<li key={index} className="shopping-items">
								<input
									className="item-checkbox"
									value={item}
									type="checkbox"
									checked={checked[index]}
									onChange={handleCheckBoxChange}
								/>
								<label className="item-name">{item}</label>
							</li>
						)
				}
			</ul>
		</div>
	);
}
