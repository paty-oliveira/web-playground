import dayjs from "dayjs";

export function getRemainingTimeUntilMsTimestamp(timestamp) {
    const timestampDayjs = dayjs(timestamp);
    const nowDayjs = dayjs();

    if (timestampDayjs.isBefore(nowDayjs)) {
        return {
            seconds: '00',
            minutes: '00',
            hours: '00'
        }
    }

    return {
        seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
        minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
        hours: getRemainingHours(nowDayjs, timestampDayjs)
    }
}

function getRemainingSeconds(nowDayjs, timestampDayjs) {
    return padWithZeros(timestampDayjs.diff(nowDayjs, 'seconds') % 60, 2);
}

function getRemainingMinutes(nowDayjs, timestampDayjs) {
    return padWithZeros(timestampDayjs.diff(nowDayjs, 'minutes') % 24, 2);
}

function getRemainingHours(nowDayjs, timestampDayjs) {
    return padWithZeros(timestampDayjs.diff(nowDayjs, 'hours') % 24, 2);
}

function padWithZeros(number, minLength) {
    const stringNumber = number.toString();
    if (stringNumber.length >= minLength) return number
    return "0".repeat(minLength - stringNumber.length) + stringNumber;
}
