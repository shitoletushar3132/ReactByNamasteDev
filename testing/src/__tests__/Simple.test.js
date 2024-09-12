import { render, screen } from "@testing-library/react";
import { act } from "react";
import Simple from "../components/Simple";

describe("Simple page Test Case", () => {
  it("simple component loading", () => {
    render(<Simple />);

    const headingElements = screen.getAllByText("it is a simple");
    expect(headingElements.length).toBeGreaterThan(0);
    expect(headingElements[0]).toBeInTheDocument();
  });

  it("should load button inside contact component", () => {
    render(<Simple />);
    const button = screen.getByText("submit");
    expect(button).toBeInTheDocument();
  });

  test("should load 2 input boxes on the simple component", () => {
    render(<Simple />);
    const input = screen.getAllByRole("textbox");

    expect(input.length).toBeGreaterThan(1);
    expect(input[0]).toBeInTheDocument();
  });
});
