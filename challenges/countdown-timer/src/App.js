import './App.css';
import {CountDownTimer} from "./components/timer/CountDownTimer";
import {CountDownButtons} from "./components/buttons/CountDownButtons";
import {useState} from "react";

function App() {

    const [hour, setHour] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [isCountingDown, setIsCountingDown] = useState(false);

    const handleHourChange = (event) => {
        setHour(event.target.value);
    }

    const handleMinutesChange = (event) => {
        setMinutes(event.target.value);
    }

    const handleSecondsChange = (event) => {
        setSeconds(event.target.value);
    }


    const handleStarOrPauseClick = () => {
        setIsCountingDown(!isCountingDown)
    };

    const handleResetClick = () => {
        setIsCountingDown(!isCountingDown)
    }

    return (
    <div className="App">
        <h1>Countdown Timer</h1>
        {
            !isCountingDown && <div className="user-input">
                <span>
                    <label htmlFor="hours-input"></label>
                    <input
                        type="number"
                        placeholder="h"
                        name="hours-input"
                        min="0"
                        max="24"
                        onChange={handleHourChange}
                        required
                    />
                </span>
                <span>:</span>
                <span>
                    <label htmlFor="minutes-input"></label>
                    <input
                        type="number"
                        placeholder="m"
                        name="minutes-input"
                        min="0"
                        max="60"
                        onChange={handleMinutesChange}
                        required
                    />
                </span>
                <span>:</span>
                <span>
                    <label htmlFor="seconds-input"></label>
                    <input
                        type="number"
                        placeholder="s"
                        name="seconds-input"
                        min="0"
                        max="60"
                        onChange={handleSecondsChange}
                        required
                    />
                </span>
                <CountDownButtons
                    isCountingDown={isCountingDown}
                    handleStarOrPauseClick={handleStarOrPauseClick}
                    handleResetClick={handleResetClick}
                />
            </div>
        }
        {
            isCountingDown && <CountDownTimer
                                hour={hour}
                                minutes={minutes}
                                seconds={seconds}
            />
        }
        {   isCountingDown && <CountDownButtons
                                isCountingDown={isCountingDown}
                                handleStarOrPauseClick={handleStarOrPauseClick}
                                handleResetClick={handleResetClick}
                            />
        }
    </div>
    );
}

export default App;
