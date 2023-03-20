import {useState} from "react";
import './ShoppingList.css';

export function ShoppingList(props) {

	const {shoppingList, removeItemFromShoppingList} = props;
	const [checked, setChecked] = useState(new Array(shoppingList.length).fill(false));

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
					shoppingList
						.map((item, index) =>
							<li key={index} className="shopping-items">
								<input
									className="item-checkbox"
									value={item}
									type="checkbox"
									checked={checked[index]}
									onChange={() => handleCheckBoxChange(index)}
								/>
								<label className="item-name">{item}</label>
								<button className="removal-btn" onClick={() => removeItemFromShoppingList(index)}>x</button>
							</li>
						)
				}
			</ul>
		</div>
	);
}
