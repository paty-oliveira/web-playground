import './App.css';
import * as PropTypes from "prop-types";
import {SearchBar} from "./components/SearchBar";

SearchBar.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

function App() {
    return (
        <div className="App">
            <h1 className="app-name">Shopping List</h1>
            <SearchBar />
        </div>
    );
}

export default App;
