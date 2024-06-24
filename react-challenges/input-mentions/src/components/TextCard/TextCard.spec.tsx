import { fireEvent, render, waitFor } from "@testing-library/react";
import TextCard from "./TextCard";

describe("TextCard Component Structure", () => {
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

describe("TextCard Component Interactions", () => {
  test("The user must be able to write content on the Text Card", () => {
    const { getByRole } = render(<TextCard />);

    const textBox = getByRole("textbox");

    fireEvent.change(textBox, {
      target: { value: "I'm writing random stuff" },
    });

    waitFor(() =>
      expect(textBox).toHaveTextContent("I'm writing random stuff"),
    );
  });

  test("When the user clicks on Save button, the post must be saved", async () => {
    const { getAllByRole, getByRole, rerender } = render(<TextCard />);

    const textBox = getByRole("textbox");
    const saveButton = getAllByRole("button")[0];

    // User writes a post
    fireEvent.change(textBox, {
      target: { value: "I'm writing random stuff" },
    });

    // Then clicks on Save button
    fireEvent.click(saveButton);

    // The user refresh the page and back again to see if the message stills
    rerender(<TextCard />);

    await waitFor(() =>
      expect(textBox).toHaveValue("I'm writing random stuff"),
    );
  });

  test("When the user clicks on Clean button, the post content must be cleaned up", async () => {
    const { getAllByRole, getByRole } = render(<TextCard />);

    const textBox = getByRole("textbox");
    const cleanButton = getAllByRole("button")[1];

    // User writes a post
    fireEvent.change(textBox, {
      target: { value: "I'm writing random stuff" },
    });

    // Then clicks on Clean button
    fireEvent.click(cleanButton);

    await waitFor(() => expect(textBox).toHaveValue(""));
  });
});
