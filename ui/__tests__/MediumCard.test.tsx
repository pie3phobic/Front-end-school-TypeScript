import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { MediumCard } from "../../my-component-library/src/MediumCard";

describe("MediumCard", () => {
  const props = {
    src: "https://example.com/image.jpg",
    alt: "Example image",
    text: "Example text",
  };

  test("renders the image with the correct src and alt attributes", () => {
    render(<MediumCard {...props} />);
    const image = screen.getByAltText(props.alt);
    expect(image).toHaveAttribute("src", props.src);
    expect(image).toHaveAttribute("alt", props.alt);
  });

  test("renders the text with the correct content", () => {
    render(<MediumCard {...props} />);
    const text = screen.getByText(props.text);
    expect(text).toBeInTheDocument();
  });

  test("applies the correct CSS classes", () => {
    render(<MediumCard {...props} />);
    const card = screen.getByRole("img").parentElement;
    expect(card).toHaveClass("bg-gray-200/80");
    expect(card).toHaveClass("p-8");
    expect(card).toHaveClass("pb-14");
    expect(card).toHaveClass("rounded-3xl");
    expect(card).toHaveClass("hover:scale-105");
    expect(card).toHaveClass("transform");
    expect(card).toHaveClass("transition");
    expect(card).toHaveClass("duration-200");
    expect(card).toHaveClass("ease-out");
    expect(card).toHaveClass("flex");
    expect(card).toHaveClass("flex-col");
    expect(card).toHaveClass("justify-center");
    expect(card).toHaveClass("align-middle");
  });
});
