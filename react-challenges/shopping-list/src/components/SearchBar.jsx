import {useState} from "react";
import './SearchBar.css';
import {foodApiResponse} from "../fakeServer/getGrocery";
import * as PropTypes from "prop-types";
import {ShoppingList} from "./ShoppingList";


ShoppingList.propTypes = {
	shoppingList: PropTypes.arrayOf(PropTypes.any)
};

export function SearchBar() {
	const [searchItem, setSearchItem] = useState("");
	const [shoppingList, setShoppingList] = useState([]);

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
			<ShoppingList shoppingList={shoppingList}/>
		</div>
	);
}
