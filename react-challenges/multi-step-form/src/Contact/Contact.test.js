import {act, screen, render, fireEvent, waitFor} from "@testing-library/react";
import App from "../App";
import {MemoryRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";

test("It should render the main fields from Contact form", () => {
	render(
		<MemoryRouter initialEntries={["/contact"]}>
			<App/>
		</MemoryRouter>
	);

	const form = screen.getByRole("form", { name: /user contact/i });
	expect(form).toBeInTheDocument();

	const emailField = screen.getByRole("textbox", { name: /user email/i });
	expect(emailField).toBeInTheDocument();

	const nextButton = screen.getByRole("button", { name: /next/i });
	expect(nextButton).toBeInTheDocument();

	const backButton = screen.getByRole("button", { name: /back/i} );
	expect(backButton).toBeInTheDocument();
});

test("The user should be able to write its email on the textbox", async() => {
	render(
		<MemoryRouter initialEntries={["/contact"]}>
			<App/>
		</MemoryRouter>
	);

	const emailField = screen.getByRole("textbox", { name: /user email/i });
	fireEvent.change(emailField, { target: { value: "paty@mail.com" }})

	await waitFor(() => expect(emailField).toHaveValue("paty@mail.com"));
})

test("the user should not be able to click on Next button when the email field is empty", () => {
	render(
		<MemoryRouter initialEntries={["/contact"]}>
			<App/>
		</MemoryRouter>
	);

	const emailField = screen.getByRole("textbox", { name: /user email/i });
	fireEvent.change(emailField, { target: { value: "" }});

	const nextButton = screen.getByRole("button", { name: /next/i });
	expect(nextButton).toBeDisabled();
});

test("The user should be able to navigate for the previous page by clicking on the Back button", async () => {
	render(
		<MemoryRouter initialEntries={["/contact"]}>
			<App/>
		</MemoryRouter>
	);

	const backButton = screen.getByRole("button", { name: /back/i} );
	await act(() => {
		userEvent.click(backButton)
	})

	const userNameForm = screen.getByRole("form", { name: /user name/i} );
	expect(userNameForm).toBeInTheDocument();

})

test( "The user should be able to click on Next button once it has typed its email ", () => {
	render(
		<MemoryRouter initialEntries={["/contact"]}>
			<App/>
		</MemoryRouter>
	);

	const emailField = screen.getByRole("textbox", { name: /user email/i });
	fireEvent.change(emailField, { target: { value: "paty@mail.com" }});

	const nextButton = screen.getByRole("button", { name: /next/i} );
	expect(nextButton).not.toBeDisabled();
});

test("After the user fills its name, when it clicks on the next button, it should render the Birthday form", async () => {
	render(
		<MemoryRouter initialEntries={["/contact"]}>
			<App/>
		</MemoryRouter>
	);

	const emailField = screen.getByRole("textbox", { name: /user email/i });
	fireEvent.change(emailField, { target: { value: "paty@mail.com" }});

	const nextButton = screen.getByRole("button", { name: /next/i });
	await act(() => userEvent.click(nextButton));

	const form = screen.getByRole("form", { name: /user birthday/i});
	await waitFor(() => expect(form).toBeInTheDocument());
});
