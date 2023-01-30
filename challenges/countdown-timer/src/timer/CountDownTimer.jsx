
export function CountDownTimer() {
    return (
    <div className="timer-container">
        <input
          type="number"
          placeholder="h"
          name="hour-input"
          min="0"
          max="24">
        </input>
        :
        <input
          type="number"
          placeholder="m"
          name="minutes-input"
          min="0"
          max="60">
        </input>
        :
        <input
          type="number"
          placeholder="s"
          name="seconds-input"
          min="0"
          max="60"
        >
        </input>
        <button>START</button>
        <button>RESET</button>
      </div>
    )
};
