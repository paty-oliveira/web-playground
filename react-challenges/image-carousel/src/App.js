import './App.css';
import {useState} from "react";
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";

function App() {

    const [index, setIndex] = useState(0);
    const images = ["https://i.redd.it/sg3q5cuedod31.jpg", "https://i.redd.it/naba9ilyvgj81.jpg", "https://i.redd.it/1ubakwq1jr741.jpg"]
    // mock images

    function handleNextClick() {
        const newIndex = index + 1;
        setIndex(newIndex >= images.length ? index: newIndex);
    }

    function handlePreviousClick() {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? index: newIndex);
    }

    return (
    <div className="App">
        <h2>Most Popular Images from Reddit</h2>
        <div className="carousel-container">
            <div className="carousel-buttons-container">
                <button onClick={handlePreviousClick} className="carousel-buttons" aria-label="previous-btn">
                    <BsArrowLeftShort className="arrow-button"/>
                </button>
                <button onClick={handleNextClick} className="carousel-buttons" aria-label="next-btn">
                    <BsArrowRightShort className="arrow-button"/>
                </button>
            </div>
            <img
                src={images[index]}
                alt="most-popular-reddit-images"
                aria-label="images-reddit"
                className="reddit-img"
            />
        </div>
    </div>
    );
}

export default App;
