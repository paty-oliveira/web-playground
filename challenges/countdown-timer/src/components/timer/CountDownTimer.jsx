import {useState, useEffect} from "react";
import './CountDownTimer.css';
import {getRemainingTimeUntilMsTimestamp} from "../utils/CountdownTimerUtils";

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00'
}
export function CountDownTimer({countdownTimestampMs}) {

    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);

    }, [countdownTimestampMs]);

    const updateRemainingTime = (countdown) => {
      setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return (
        <div className="countdown-timer">
            <span>{remainingTime.hours}</span>
            <span>:</span>
            <span>{remainingTime.minutes}</span>
            <span>:</span>
            <span>{remainingTime.seconds}</span>
        </div>
    )
}