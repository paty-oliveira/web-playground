export const convertHumanTimeToMilliseconds = (hour, minutes, seconds) => {
    const now = new Date();
    now.setHours(parseInt(hour));
    now.setMinutes(parseInt(minutes));
    now.setSeconds(parseInt(seconds));
    return now.getTime();
}