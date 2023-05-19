import './App.css';
import {useEffect, useState} from "react";
import {getMostPopularImagesFromReddit} from "./api/api";
import {ThreeDots} from "react-loader-spinner";
import * as PropTypes from "prop-types";
import {ImageCarousel} from "./components/ImageCarousel";

ImageCarousel.propTypes = {
    onClick: PropTypes.func,
    onClick1: PropTypes.func,
    strings: PropTypes.arrayOf(PropTypes.string),
    index: PropTypes.number
};

function App() {
    const [images, setImages] = useState([""]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getMostPopularImagesFromReddit()
            .then((data) => {
                setImages(data);
                setIsLoading(!isLoading);
            })
            .catch((err) => console.log(err.message));

        const timer = setTimeout(() => getMostPopularImagesFromReddit(), 60000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">
            <h2>Most Popular Images from Reddit</h2>

            { isLoading ? (
                <div className="loading-container">
                    <ThreeDots color="black" ariaLabel={"loading-spinner"}/>
                </div>
            ) : (
                <ImageCarousel imageUrl={images} />
            )}
        </div>
    );
}

export default App;
