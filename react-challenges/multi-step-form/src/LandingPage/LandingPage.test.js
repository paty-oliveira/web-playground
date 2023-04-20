import {render, screen, waitFor} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {LandingPage} from "./LandingPage";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("When the user opens the app, it should render the Landing page", () => {
	render(
		<MemoryRouter initialEntries={['/']}>
			<LandingPage/>
		</MemoryRouter>
	);

	const initialMessage = screen.getByRole("heading", { name: /welcome to multi-step form!/i})
	expect(initialMessage).toBeInTheDocument();

	const startButton = screen.getByRole("button", { name: /start/i});
	expect(startButton).toBeInTheDocument();
})

// Need to understand how to test routes here, the same thing for Username form
test("When the user clicks in the Start button, it should render the Name form", async () => {
	render(
		<MemoryRouter initialEntries={['/']}>
			<LandingPage/>
		</MemoryRouter>
	);

	const startButton = screen.getByRole("button", { name: /start/i});
	await userEvent.click(startButton);

	const form = screen.getByRole("form", { name: /user name/i});
	await waitFor(() => expect(form).toBeInTheDocument())
})
