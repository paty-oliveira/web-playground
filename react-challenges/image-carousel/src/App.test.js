import { render, screen } from '@testing-library/react';
import App from './App';

describe("<App />", () => {
	it('should render the main elements of the component', function () {
		render(<App />);

		const header = screen.getByRole("heading", { name: /most popular images from reddit/i })
		expect(header).toBeInTheDocument();

		const previousButton = screen.getByRole("button", { name: /previous/i});
		expect(previousButton).toBeInTheDocument();

		const nextButton = screen.getByRole("button", { name: /next/i });
		expect(nextButton).toBeInTheDocument();

		const redditImages = screen.getByLabelText("images-reddit");
		expect(redditImages).toBeInTheDocument();
	});
})
