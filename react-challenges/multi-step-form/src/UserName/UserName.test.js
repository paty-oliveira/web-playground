import { act, render, screen, fireEvent, waitFor } from "@testing-library/react";
import { UserName } from "./UserName";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";
import { Router } from 'react-router';
import App from "../App";

test("should render the main fields from User name form", function () {
	render(
		<MemoryRouter initialEntries={['/name']}>
			<App />
		</MemoryRouter>
	);

	const form = screen.getByRole("form", { name: /user name/i});
	expect(form).toBeInTheDocument();

	const nameField = screen.getByRole("textbox", { name: /user name/i});
	expect(nameField).toBeInTheDocument();

	const nextButton = screen.getByRole("button", { name: /next/i });
	expect(nextButton).toBeInTheDocument();

	const backButton = screen.getByRole("button", { name: /back/i});
});

test("the user should be able to write its name on the textbox", async () => {
	render(
		<MemoryRouter initialEntries={['/name']}>
			<App />
		</MemoryRouter>
	);

	const nameField = screen.getByRole("textbox", { name: /user name/i});
	fireEvent.change(nameField, {target: { value: "Paty Oliveira"}});

	await waitFor(() => expect(nameField).toHaveValue("Paty Oliveira"))
})

test("the user should not be able to click on Next button when the name field is empty", () => {
	render(
		<MemoryRouter initialEntries={['/name']}>
			<App />
		</MemoryRouter>
	);

	const nameField = screen.getByRole("textbox", { name: /user name/i});
	fireEvent.change(nameField, {target: { value: "" }});

	const nextButton = screen.getByRole("button", { name: /next/i });
	expect(nextButton).toBeDisabled();
});

test("The user should be able to navigate for the previous page cliking on the Back button", async () => {
	render(
		<MemoryRouter initialEntries={['/name']}>
			<App/>
		</MemoryRouter>
	);

	const backButton = screen.getByRole("button", { name: /back/i });
	await userEvent.click(backButton);

	const initialMessage = screen.getByRole("heading", { name: /click to start/i})
	expect(initialMessage).toBeInTheDocument();
});

test("After the user fill its name, when it clicks on the next button, it should render the Contact form", async () => {
	render(
		<MemoryRouter initialEntries={['/name']}>
			<App />
		</MemoryRouter>
	);

	const nameField = screen.getByRole("textbox", { name: /user name/i});
	fireEvent.change(nameField, {target: { value: "Paty Oliveira"}});

	const nextButton = screen.getByRole("button", { name: /next/i });
	await act(() => userEvent.click(nextButton));

	const form = screen.getByRole("form", { name: /user contact/i});
	await waitFor(() => expect(form).toBeInTheDocument())
});

