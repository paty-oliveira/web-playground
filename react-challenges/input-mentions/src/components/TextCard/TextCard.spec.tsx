import { render } from "@testing-library/react";
import TextCard from "./TextCard";

describe("TextCard", () => {
  it("should display a title", () => {
    const { getByRole } = render(<TextCard />);

    const label = getByRole("title-card");

    expect(label).toBeInTheDocument();
    expect(label.textContent).toEqual("Write your post:");
  });

  it("should display a text box", () => {
    const { getByRole } = render(<TextCard />);

    const textBox = getByRole("textbox");

    expect(textBox).toBeInTheDocument();
  });

  it("should display a placeholder text in the text box", () => {
    const { getByRole } = render(<TextCard />);

    const textBox = getByRole("textbox");

    expect(textBox).toHaveAttribute("placeholder", "Write here something...");
  });

  it("should contain a Save button", () => {
    const { getAllByRole } = render(<TextCard />);

    const saveButton = getAllByRole("button");

    expect(saveButton[0]).toHaveAttribute("name", "save");
  });

  it("should contain a Clean button", () => {
    const { getAllByRole } = render(<TextCard />);

    const cleanButton = getAllByRole("button");

    expect(cleanButton[1]).toHaveAttribute("name", "clean");
  });
});
