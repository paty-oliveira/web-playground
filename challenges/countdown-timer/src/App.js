import './App.css';
import {CountDownTimer} from "./timer/CountDownTimer";
import {useState} from "react";
import {convertHumanTimeToMilliseconds} from "./utils/DateInputUtils";

function App() {

    const [hour, setHour] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [milliSecondsTime, setMilliSecondsTime] = useState(0);
    const [showCountdownPanel, setShowCountdownPanel] = useState(true);

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
        setMilliSecondsTime(convertHumanTimeToMilliseconds(hour, minutes, seconds));
        setShowCountdownPanel(!showCountdownPanel);
    };

    const handleResetClick = () => {

    }

    return (
    <div className="App">
        <div className="user-input">
            <h1>Countdown Timer</h1>
            <span>
                <input
                    type="number"
                    placeholder="h"
                    name="hours-input"
                    min="0"
                    max="24"
                    onChange={handleHourChange}
                />
            </span>
            <span>:</span>
            <span>
                <input
                    type="number"
                    placeholder="m"
                    name="minutes-input"
                    min="0"
                    max="60"
                    onChange={handleMinutesChange}
                />
            </span>
            <span>:</span>
            <span>
                <input
                    type="number"
                    placeholder="s"
                    name="seconds-input"
                    min="0"
                    max="60"
                    onChange={handleSecondsChange}
                />
            </span>
            <button onClick={handleStarOrPauseClick}>{showCountdownPanel ? 'START' : 'PAUSE'}</button>
            {!showCountdownPanel && <button onClick={handleResetClick}>RESET</button>}
        </div>
        <CountDownTimer countdownTimestampMs={milliSecondsTime}/>
    </div>
    );
}

export default App;
