import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("should render a Card Text", () => {
    const { getByRole } = render(<App />);

    const cardText = getByRole("text-card");
    expect(cardText).toBeInTheDocument();
  });
});
