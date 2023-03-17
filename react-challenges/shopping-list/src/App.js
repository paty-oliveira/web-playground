import './App.css';
import {SearchBar} from "./components/SearchBar";
import {ShoppingList} from "./components/ShoppingList";
import {useState} from "react";

function App() {
    const [searchItem, setSearchItem] = useState("");
    const [shoppingList, setShoppingList] = useState([]);

    const addItemsToShoppingList = () => {
        setShoppingList((shoppingList) => [...shoppingList, searchItem]);
        setSearchItem("");
    }

    return (
        <div className="App">
            <h1 className="app-name">Shopping List</h1>
            <SearchBar
                searchItem={searchItem}
                setSearchItem={setSearchItem}
                addItemsToShoppingList={addItemsToShoppingList}
            />
            <ShoppingList
                shoppingList={shoppingList}
            />
        </div>
    );
}

export default App;
