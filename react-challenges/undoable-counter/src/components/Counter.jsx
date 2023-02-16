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

    const handleClickButton = (event) => {
        event.preventDefault();
        const currentButtonValue = event.target.value;
        setCounter(counter + parseInt(currentButtonValue));
        setHistory(previous => [...previous, createNewHistoricEntry(currentButtonValue)])
    }

    return (
        <div className="counter">
            <div className="action-buttons">
                <Button>Undo</Button>
                <Button>Redo</Button>
            </div>
            <div className="counter-actions">
                <div className="counter-buttons">
                    {buttonNegativeValues.map(value => <Button className="btn-secondary" value={value} onClick={handleClickButton}>{value}</Button>)}
                </div>
                {counter}
                <div className="counter-buttons">
                    {buttonPositiveValues.map(value => <Button className="btn-secondary" value={value} onClick={handleClickButton}>{value}</Button>)}
                </div>
            </div>
            <div >
                <h4>History</h4>
                <ul className="counter-history">
                    {history.map(element => <li>{element.action} &emsp; ({element.previousValue} -> {element.currentValue})</li>)}
                </ul>
            </div>
        </div>
    )
}