import { render, screen, act } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe("<App />", () => {
	it('should render the main elements from the App', function () {
		render(<App />);

		const inputCodeOne = screen.getByLabelText("input-code-0");
		expect(inputCodeOne).toBeInTheDocument();

		const inputCodeTwo = screen.getByLabelText("input-code-1");
		expect(inputCodeTwo).toBeInTheDocument();

		const inputCodeThree = screen.getByLabelText("input-code-2");
		expect(inputCodeThree).toBeInTheDocument();

		const inputCodeFour = screen.getByLabelText("input-code-3");
		expect(inputCodeFour).toBeInTheDocument();

		const submitButton = screen.getByRole("button", { name: /submit/i });
		expect(submitButton).toBeInTheDocument();
	});

	it('The user should be able only to type digits in the input boxes', async function () {
		render(<App/>);

		const inputCodeOne = screen.getByLabelText("input-code-0");
		await act(() => userEvent.type(inputCodeOne, "1"));
		expect(inputCodeOne.value).toBe("1");

		const inputCodeTwo = screen.getByLabelText("input-code-1");
		await act(() => userEvent.type(inputCodeTwo, "0"));
		expect(inputCodeTwo.value).toBe("0")

		const inputCodeThree = screen.getByLabelText("input-code-2");
		await act(() => userEvent.type(inputCodeThree, "0"));
		expect(inputCodeThree.value).toBe("0");

		const inputCodeFour = screen.getByLabelText("input-code-3");
		await act(() => userEvent.type(inputCodeFour, "9"));
		expect(inputCodeFour.value).toBe("9")
	});

	it('When the user enters a number in one box, the cursor should advance to the next field, except the last box', async function () {
		render(<App />);

		const inputCodeOne = screen.getByLabelText("input-code-0");
		const inputCodeTwo = screen.getByLabelText("input-code-1");
		const inputCodeThree = screen.getByLabelText("input-code-2");
		const inputCodeFour = screen.getByLabelText("input-code-3");

		await act(() => userEvent.type(inputCodeOne, "0"));
		expect(inputCodeTwo).toHaveFocus();

		await act(() => userEvent.type(inputCodeTwo, "1"));
		expect(inputCodeThree).toHaveFocus();

		await act(() => userEvent.type(inputCodeThree, "9"));
		expect(inputCodeFour).toHaveFocus();

		await act(() => userEvent.type(inputCodeFour, "4"));
		expect(inputCodeFour).toHaveFocus();
	});
})