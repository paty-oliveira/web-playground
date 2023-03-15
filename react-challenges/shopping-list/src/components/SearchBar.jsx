import {useState} from "react";
import './SearchBar.css';
import {foodApiResponse} from "../fakeServer/getGrocery";

export function SearchBar() {
	const [searchItem, setSearchItem] = useState("");
	const [shoppingList, setShoppingList] = useState([]);
	const [checked, setChecked] = useState(new Array(shoppingList.length).fill(false));

	const handleChangeSearchBar = (event) => {
		event.preventDefault();
		setSearchItem(event.target.value);
	}

	const handleClickSuggestionItem = (event) => {
		event.preventDefault();
		setSearchItem(event.currentTarget.textContent);
	}

	const handleAddItemsToList = () => {
		setShoppingList((shoppingList) => [...shoppingList, searchItem]);
		setSearchItem("");
	}

	const handleCheckBoxChange = (position) => {
		const updatedState = checked.map((item, index) =>
			index === position ? !item : item
		)
		setChecked(updatedState);
	}

	return (
		<div className="search-container">
			<div className="search-bar">
				<input
					type="text"
					placeholder="Search grocery item"
					value={searchItem}
					onChange={handleChangeSearchBar}/>
				<button onClick={handleAddItemsToList}>Add</button>
			</div>
			<div className="dropdown-container">
				{
					searchItem && foodApiResponse
						.filter((item) => {
							const groceryApiItem = item.toLowerCase();
							const currentGroceryItem = searchItem.toLowerCase();

							return groceryApiItem.startsWith(currentGroceryItem) && groceryApiItem !== currentGroceryItem;
						})
						.map((item) =>
							<div className="dropdown-row" onClick={handleClickSuggestionItem}>
								{item}
							</div>
						)
				}
			</div>
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
										onChange={handleCheckBoxChange}
									/>
									<label className="item-name">{item}</label>
								</li>
							)
					}
				</ul>
			</div>
		</div>
	);
}
