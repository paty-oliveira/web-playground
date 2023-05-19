import './ImageCarousel.css';
import {useState} from "react";
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";

export function ImageCarousel({imageUrl}) {
	const [index, setIndex] = useState(0);

	function handlePreviousClick() {
		const newIndex = index - 1;
		setIndex(newIndex < 0 ? index: newIndex);
	}

	function handleNextClick() {
		const newIndex = index + 1;
		setIndex(newIndex >= imageUrl.length ? index: newIndex);
	}

	return <div className="carousel-container">
		<div className="carousel-buttons-container">
			<button onClick={handlePreviousClick} className="carousel-buttons" aria-label="previous-btn">
				<BsArrowLeftShort className="arrow-button"/>
			</button>
			<button onClick={handleNextClick} className="carousel-buttons" aria-label="next-btn">
				<BsArrowRightShort className="arrow-button"/>
			</button>
		</div>
		<img
			src={imageUrl[index]}
			alt="most-popular-reddit-images"
			aria-label="images-reddit"
			className="reddit-img"
		/>
	</div>;
}