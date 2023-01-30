import './CountDownTimer.css';
import { useState, useEffect } from 'react';

export function CountDownTimer() {
    const [hour, setHour] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let timerId;
        if (isActive) {
            timerId = setInterval(() => {
                setSeconds((prev) => parseInt(prev) - 1);
            }, 1000);

        }
        return function cleanup() {
            clearInterval(timerId);
        }
    }, [isActive]);

    const handleHourChange = (event) => {
        setHour(event.target.value);
    };

    const handleMinutesChange = (event) => {
        setMinutes(event.target.value);
    };

    const handleSecondsChange = (event) => {
        setSeconds(event.target.value);
    };

    const handleStartPauseButton = () => {
        setIsActive(!isActive);
    };

    const handleResetButton = () => {
        setHour('00');
        setMinutes('00');
        setSeconds('00');
    };

    return (
    <div className="timer-container">
        <div className="input-timer-container">
            <input
            type="number"
            placeholder="h"
            name="hour-input"
            min="0"
            max="24"
            onChange={handleHourChange}>
            </input>
            :
            <input
            type="number"
            placeholder="m"
            name="minutes-input"
            min="0"
            max="60"
            onChange={handleMinutesChange}>
            </input>
            :
            <input
            type="number"
            placeholder="s"
            name="seconds-input"
            min="0"
            max="60"
            onChange={handleSecondsChange}>
            </input>
        </div>
        <div>
            <button onClick={handleStartPauseButton}>{!isActive ? 'START' : 'PAUSE'}</button>
            <button onClick={handleResetButton}>RESET</button>
        </div>
        <div className="countdown-timer-container">
            <span>{hour}</span>
            <span>:</span>
            <span>{minutes}</span>
            <span>:</span>
            {parseInt(seconds) >= 0 ? <span>{seconds}</span> : setSeconds('00')}
        </div>
      </div>
    )
};
