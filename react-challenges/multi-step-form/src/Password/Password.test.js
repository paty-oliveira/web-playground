import {screen, render, fireEvent, waitFor} from "@testing-library/react";
import App from "../App";
import {MemoryRouter} from "react-router-dom";

test("It should render the main fields from the Password form", () => {
	render(
		<MemoryRouter initialEntries={["/password"]}>
			<App/>
		</MemoryRouter>
	);

	const form = screen.getByRole("form", { name: /user password/i});
	expect(form).toBeInTheDocument();

	const passwordField = screen.getByLabelText("password");
	expect(passwordField).toBeInTheDocument();

	const submitButton = screen.getByRole("button", { name: /submit/i});
	expect(submitButton).toBeInTheDocument();
});

test("The user should be able to write its password on the password input",async () => {
	render(
		<MemoryRouter initialEntries={["/password"]}>
			<App/>
		</MemoryRouter>
	);

	const passwordField = screen.getByLabelText("password");
	fireEvent.change(passwordField, { target: { value: "@myp@ssord@1!"}});

	await waitFor(() => expect(passwordField).toHaveValue("@myp@ssord@1!"));
});

test("The Submit button must be disable when the password field is empty",async () => {
	render(
		<MemoryRouter initialEntries={["/password"]}>
			<App/>
		</MemoryRouter>
	);

	const passwordField = screen.getByLabelText("password");
	fireEvent.change(passwordField, { target: { value: "" }});

	const submitButton = screen.getByRole("button", { name: /submit/i});
	await waitFor(() => expect(submitButton).toBeDisabled());
});

test("The Submit button must be active when the password field is fulfilled", async () => {
	render(
		<MemoryRouter initialEntries={["/password"]}>
			<App/>
		</MemoryRouter>
	);

	const passwordField = screen.getByLabelText("password");
	fireEvent.change(passwordField, { target: { value: "@myp@ssord@1!"}});

	const submitButton = screen.getByRole("button", { name: /submit/i});
	await waitFor(() => expect(submitButton).not.toBeDisabled());
});


//tbc
test("User name, contact, birthday and password must be available when the user clicks on Submit button", () => {


});

//tbd
test("When the user information submission is successfully, it should render a success message", () => {

})