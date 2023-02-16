import "./Counter.css";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";

export function Counter() {

    const [counter, setCounter] = useState(0);

    const handleClickButton = (event) => {
        event.preventDefault();
        const currentNumber = parseInt(event.target.value);
        setCounter(counter + currentNumber);
    }

    return (
        <div className="counter">
            <div className="action-buttons">
                <Button>Undo</Button>
                <Button>Redo</Button>
            </div>
            <div className="counter-actions">
                <div className="counter-buttons" onClick={handleClickButton}>
                    <Button className="btn-secondary" value="-100">-100</Button>
                    <Button className="btn-secondary" value="-10">-10</Button>
                    <Button className="btn-secondary" value="-1">-1</Button>
                </div>
                {counter}
                <div className="counter-buttons" onClick={handleClickButton}>
                    <Button className="btn-secondary" value="+1">+1</Button>
                    <Button className="btn-secondary" value="+10">+10</Button>
                    <Button className="btn-secondary" value="+100">+100</Button>
                </div>
            </div>
            <div className="counter-history">
                <h4>History</h4>
            </div>
        </div>
    )
}