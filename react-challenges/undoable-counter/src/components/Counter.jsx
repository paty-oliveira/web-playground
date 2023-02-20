import "./Counter.css";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";

export function Counter() {

    const [counter, setCounter] = useState(0);
    const [history, setHistory] = useState([]);
    const buttonNegativeValues = ["-100", "-10", "-1"];
    const buttonPositiveValues = ["+1", "+10", "+100"];

    const createNewHistoricEntry = (action) => {
        return {
            action: action,
            previousValue: counter,
            currentValue:  counter + parseInt(action)
        }
    }

    const handleAddOrSubtract = (event) => {
        event.preventDefault();
        const currentButtonValue = event.target.value;
        setCounter(counter + parseInt(currentButtonValue));
        setHistory(previous => [...previous, createNewHistoricEntry(currentButtonValue)])
    }

    const handleUndoClick = () => {
        const lastAction = history.slice(-1).pop().action;
        setCounter(counter - parseInt(lastAction));
        setHistory(prevState => prevState.slice(0, -1));
    }

    const handleRedoClick = () => {
        const lastAction = history.slice(-1).pop().action;
        setCounter(counter + parseInt(lastAction));
        setHistory(prevState => [...prevState, createNewHistoricEntry(lastAction)]);
    }

    return (
        <div className="counter">
            <div className="action-buttons">
                <Button onClick={handleUndoClick}>Undo</Button>
                <Button onClick={handleRedoClick}>Redo</Button>
            </div>
            <div className="counter-actions">
                <div className="counter-buttons">
                    {buttonNegativeValues.map(value => <Button className="btn-secondary" value={value} onClick={handleAddOrSubtract}>{value}</Button>)}
                </div>
                {counter}
                <div className="counter-buttons">
                    {buttonPositiveValues.map(value => <Button className="btn-secondary" value={value} onClick={handleAddOrSubtract}>{value}</Button>)}
                </div>
            </div>
            <div >
                <h4>History</h4>
                <ul className="counter-history">
                    {
                        history.map((element, index) =>
                            <li key={index}>{element.action} &emsp; ({element.previousValue} -> {element.currentValue})</li>
                        ).filter((element, index) => index < 50)
                    }
                </ul>
            </div>
        </div>
    )
}