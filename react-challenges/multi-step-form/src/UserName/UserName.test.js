import { render, screen, fireEvent } from "@testing-library/react";
import {UserName} from "./UserName";

test("should render the main fields from User name form", function () {
	render(<UserName />);

	const form = screen.getByRole("form", { name: /user name/i});
	expect(form).toBeInTheDocument();

	const nameField = screen.getByRole("textbox", { name: /user name/i});
	expect(nameField).toBeInTheDocument();

	const nextButton = screen.getByRole("button", { name: /next/i });
	expect(nextButton).toBeInTheDocument();
});

test("the user should be able to write its name on the textbox", () => {
	render(<UserName />);

	const nameField = screen.getByRole("textbox", { name: /user name/i});
	fireEvent.change(nameField, {target: { value: "Paty Oliveira" }});

	const form = screen.getByRole("form", { name: /user name/i});
	expect(form).toHaveFormValues({name: "Paty Oliveira"});
})

// tbc
test("the user should be able to click on Next button when the name field is valid", () => {


})

// tbc
test("when the user clicks in the next button, it should render the Contact form", () => {

})
