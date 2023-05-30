import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Banner from "../index/Banner";
describe("Banner", () => {
  beforeEach(() => {
    render(<Banner />);
  });

  test("renders an image with the specified src and alt text", () => {
    const image = screen.getByAltText(
      "Image of student listening to an online course"
    );
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "student-cr.jpg");
  });

  test("applies the correct CSS classes", () => {
    const card = screen.getByRole("img");
    expect(card).toHaveClass("rounded-3xl");
    const container = card.parentElement;
    expect(container).toHaveClass("bg-gray-100");
    expect(container).toHaveClass("p-6");
    expect(container).toHaveClass("md:p-10");
    expect(container).toHaveClass("lg:p-16");
    expect(container).toHaveClass("rounded-3xl");
    expect(container).toHaveClass("flex");
    expect(container).toHaveClass("flex-col");
    expect(container).toHaveClass("align-center");
  });
});
