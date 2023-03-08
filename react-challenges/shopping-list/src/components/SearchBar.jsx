import {useState} from "react";
import './SearchBar.css';
import {foodApiResponse} from "../fakeServer/getGrocery";

export function SearchBar() {
	const [searchItem, setSearchItem] = useState("");

	const handleChangeSearchBar = (event) => {
		event.preventDefault();
		setSearchItem(event.target.value);
	}

	const handleClickSuggestionItem = (event) => {
		event.preventDefault();
		setSearchItem(event.currentTarget.textContent);
	}

	return (
		<div className="search-container">
			<div className="search-bar">
				<input
					type="text"
					placeholder="Search grocery item"
					value={searchItem}
					onChange={handleChangeSearchBar}/>
				<button>Add</button>
				{/* Need to implement Add button logic */}
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
		</div>
	);
}
