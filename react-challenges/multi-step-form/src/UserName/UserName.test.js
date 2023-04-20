import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import {UserName} from "./UserName";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { Router } from 'react-router';
import {routes} from "../routes";

test("should render the main fields from User name form", function () {
	render(<UserName />);

	const form = screen.getByRole("form", { name: /user name/i});
	expect(form).toBeInTheDocument();

	const nameField = screen.getByRole("textbox", { name: /user name/i});
	expect(nameField).toBeInTheDocument();

	const nextButton = screen.getByRole("button", { name: /next/i });
	expect(nextButton).toBeInTheDocument();
});

test("the user should be able to write its name on the textbox", async () => {
	render(<UserName />);

	const nameField = screen.getByRole("textbox", { name: /user name/i});
	fireEvent.change(nameField, {target: { value: "Paty Oliveira"}});

	await waitFor(() => expect(nameField).toHaveValue("Paty Oliveira"))
})

test("the user should not be able to click on Next button when the name field is empty", () => {
	render(<UserName />);

	const nameField = screen.getByRole("textbox", { name: /user name/i});
	fireEvent.change(nameField, {target: { value: "" }});

	const nextButton = screen.getByRole("button", { name: /next/i });
	expect(nextButton).toBeDisabled();
});


test("when the user clicks in the next button, it should render the Contact form", () => {
})
