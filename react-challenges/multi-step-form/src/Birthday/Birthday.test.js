import {screen, render, fireEvent, waitFor, act} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import App from "../App";
import userEvent from "@testing-library/user-event";

test("It should render the main fields from the Birthday form", () => {
	render(
		<MemoryRouter initialEntries={["/birthday"]}>
			<App/>
		</MemoryRouter>
	);

	const form = screen.getByRole("form", { name: /user birthday/i});
	expect(form).toBeInTheDocument();

	const birthdayField = screen.getByLabelText("birthday-date");
	expect(birthdayField).toBeInTheDocument();

	const nextButton = screen.getByRole("button", { name: /next/i });
	expect(nextButton).toBeInTheDocument();
});

test("The user should be able to type its birthday according dd/mm/yyy format",  async () => {
	render(
		<MemoryRouter initialEntries={["/birthday"]}>
			<App/>
		</MemoryRouter>
	);

	const birthdayField = screen.getByLabelText("birthday-date");
	await act(() => {
		userEvent.type(birthdayField, '2023-04-12')
	})

	expect(birthdayField.value).toBe('2023-04-12');
});

test("The user should not be able to click on Next button while the birthday field is empty", async () => {
	render(
		<MemoryRouter initialEntries={["/birthday"]}>
			<App/>
		</MemoryRouter>
	);

	const birthdayField = screen.getByLabelText("birthday-date");
	await userEvent.type(birthdayField, '');

	const nextButton = screen.getByRole("button", { name: /next/i });
	expect(nextButton).toBeDisabled();
});

test("When the user types its birthday, the user should be able to click on Next button", async () => {
	render(
		<MemoryRouter initialEntries={["/birthday"]}>
			<App/>
		</MemoryRouter>
	);

	const birthdayField = screen.getByLabelText("birthday-date");

	await act(() => userEvent.type(birthdayField, '2023-04-12'));

	const nextButton = screen.getByRole("button", { name: /next/i });
	expect(nextButton).not.toBeDisabled();
});

test("After the user fills its birthday, when it clicks on the next button, it should render the Password form", async () => {
	render(
		<MemoryRouter initialEntries={["/birthday"]}>
			<App/>
		</MemoryRouter>
	);

	const birthdayField = screen.getByLabelText("birthday-date");

	await act(() => {
		userEvent.type(birthdayField, '2023-04-12')
	});

	const nextButton = screen.getByRole("button", { name: /next/i });
	await act(() => userEvent.click(nextButton));

	const form = screen.getByRole("form", { name: /user password/i});
	await waitFor(() => expect(form).toBeInTheDocument());
})