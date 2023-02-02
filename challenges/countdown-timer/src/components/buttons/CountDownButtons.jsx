import './CountDownButtons.css'
export function CountDownButtons(props) {

    const isCountingDown = props.isCountingDown;
    const handleStarOrPauseClick = props.handleStarOrPauseClick;
    const handleResetClick = props.handleResetClick;

    return (
        <div className="button-container">
            {!isCountingDown && <button onClick={handleStarOrPauseClick}>START</button>}
            {isCountingDown && <button onClick={handleResetClick}>RESET</button>}
        </div>
    )
}
