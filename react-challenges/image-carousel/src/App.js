import './App.css';
import {useEffect, useState} from "react";
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import {getMostPopularImagesFromReddit} from "./api/api";
import {ThreeDots} from "react-loader-spinner";

function App() {

    const [index, setIndex] = useState(0);
    const [images, setImages] = useState([""]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getMostPopularImagesFromReddit()
            .then((data) => {
                setImages(data);
                setIsLoading(!isLoading);
            })
            .catch((err) => console.log(err.message))
    }, []);

    function handleNextClick() {
        const newIndex = index + 1;
        setIndex(newIndex >= images.length ? index: newIndex);
    }

    function handlePreviousClick() {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? index: newIndex);
    }

    if (isLoading) {
        return (
            <div className="loading-container">
                <ThreeDots color="black" ariaLabel={"loading-spinner"}/>
            </div>
        )
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
