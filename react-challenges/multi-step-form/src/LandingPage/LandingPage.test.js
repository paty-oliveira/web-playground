import {act, render, screen, waitFor} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("When the user opens the app, it should render the Landing page", () => {
	render(
		<MemoryRouter initialEntries={['/']}>
			<App/>
		</MemoryRouter>
	);

	const initialMessage = screen.getByRole("heading", { name: /click to start/i})
	expect(initialMessage).toBeInTheDocument();

	const startButton = screen.getByRole("button", { name: /start/i});
	expect(startButton).toBeInTheDocument();
})

// Need to understand how to test routes here, the same thing for Username form
test("When the user clicks in the Start button, it should render the Name form", async () => {
	render(
		<MemoryRouter initialEntries={['/']}>
			<App/>
		</MemoryRouter>
	);

	const startButton = screen.getByRole("button", { name: /start/i});

	await act(() =>  userEvent.click(startButton));

	const form = screen.getByRole("form", { name: /user name/i});
	await waitFor(() => expect(form).toBeInTheDocument())
})
