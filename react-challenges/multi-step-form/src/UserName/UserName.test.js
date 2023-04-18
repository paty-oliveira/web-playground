import { render, screen } from "@testing-library/react";
import {UserName} from "./UserName";

test("should render the main fields from User name form", function () {
	render(<UserName />);

	expect(screen.getByRole("textbox", { name: /user name/i})).toBeInTheDocument()
	expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument();
});

// tbc
test("the user should be able to write its name on the textbox", () =>{

})

// tbc
test("the user should be able to click on Next button when the name field is valid", () => {


})

// tbc
test("when the user clicks in the next button, it should render the Contact form", () => {

})
