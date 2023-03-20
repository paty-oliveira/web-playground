import './Menu.css';
import {useState} from "react";
import {SearchBar} from "./components/SearchBar";
import {ShoppingList} from "./components/ShoppingList";

export function Menu() {
	const [searchItem, setSearchItem] = useState("");
	const [shoppingList, setShoppingList] = useState([]);

	const addItemsToShoppingList = () => {
		setShoppingList((shoppingList) => [...shoppingList, searchItem]);
		setSearchItem("");
	}

	const removeItemFromShoppingList = (index) => {
		const newShoppingList = shoppingList.filter((item, itemIndex) => index !== itemIndex);
		setShoppingList(newShoppingList);
	}

	return (
		<div className="menu-container">
			<SearchBar
				searchItem={searchItem}
				setSearchItem={setSearchItem}
				addItemsToShoppingList={addItemsToShoppingList}
			/>
			<ShoppingList
				shoppingList={shoppingList}
				removeItemFromShoppingList={removeItemFromShoppingList}
			/>
		</div>

	)


}