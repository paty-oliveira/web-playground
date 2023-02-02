import './CountDownTimer.css';
import {useState, useEffect} from "react";
import {getRemainingTimeUntilMsTimestamp} from "../utils/CountdownTimerUtils";
import {convertHumanTimeToMilliseconds} from "../utils/DateInputUtils";

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00'
}
export function CountDownTimer({hour, minutes, seconds}) {

    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
    const countdownTimestampMs = convertHumanTimeToMilliseconds(hour, minutes, seconds);

    useEffect(() => {
        const intervalId = setInterval(() => {
                updateRemainingTime(countdownTimestampMs);
            }, 1000)
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