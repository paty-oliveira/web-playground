import { render, screen } from '@testing-library/react';
import App from './App';

describe("<App />", () => {
	it('should render the main elements from the', function () {
		render(<App />);

		const inputCodeOne = screen.getByLabelText("input-code-one");
		expect(inputCodeOne).toBeInTheDocument();

		const inputCodeTwo = screen.getByLabelText("input-code-two");
		expect(inputCodeTwo).toBeInTheDocument();

		const inputCodeThree = screen.getByLabelText("input-code-three");
		expect(inputCodeThree).toBeInTheDocument();

		const inputCodeFour = screen.getByLabelText("input-code-four");
		expect(inputCodeFour).toBeInTheDocument();

		const submitButton = screen.getByRole("button", { name: /submit/i });
		expect(submitButton).toBeInTheDocument();
	});
})