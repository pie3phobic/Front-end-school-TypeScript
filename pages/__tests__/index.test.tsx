import { render, screen } from "@testing-library/react";
import Home from "..";
import "@testing-library/jest-dom";

describe("Index page", () => {
  test("renders the 'Go to Courses' button", () => {
    render(<Home />);
    const buttonElement = screen.getByText("Go To Courses");
    expect(buttonElement).toBeInTheDocument();
  });
  test("renders correct amount of medium cards", () => {
    render(<Home />);
    const mediumCardsContainer = screen.getByTestId("medium-cards-container");
    expect(mediumCardsContainer.childElementCount).toEqual(3);
  });
  test("renders image", () => {
    render(<Home />);
    const image1 = screen.getByAltText("Online course image");
    expect(image1).toBeInTheDocument();
  });
});
