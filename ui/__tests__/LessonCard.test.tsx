import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import LessonCard from "../course/LessonCard";

const props = {
  order: 1,
  previewImageLink: "https://example.com/image.jpg",
  status: "locked" || "unlocked",
  title: "Lesson 1 title",
};

describe("LessonCard component", () => {
  test("renders lesson card with all properties correctly", () => {
    render(<LessonCard {...props} />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("alt", "Lesson preview image");
    expect(img).toHaveAttribute(
      "src",
      `${props.previewImageLink}/lesson-${props.order}.webp`
    );
    const lessonNumberTitle = screen.getByTestId("lesson-order-title");
    expect(lessonNumberTitle).toHaveTextContent(
      `${props.order}. ${props.title}`
    );
  });
  test("applies css properties on click", () => {
    render(<LessonCard {...props} />);
    const container = screen.getByRole("img").parentElement;
    waitFor(() => {
      fireEvent.click(container);
      const computedStyle = getComputedStyle(container);
      expect(computedStyle.getPropertyValue("background-color")).toBe(
        "rgb(248 113 113)"
      );
    });
  });
  test("renders closed lock icon if the lesson status is locked", () => {
    render(<LessonCard status="locked" {...props} />);
    const lockClosedIcon = screen.getByTestId("lock-closed-icon");
    if (status === "locked") {
      expect(lockClosedIcon).toBeInTheDocument();
    }
  });
  test("doesn`t render closed lock icon if the lesson status is unlocked", () => {
    render(<LessonCard status="unlocked" {...props} />);
    const lockClosedIcon = screen.getByTestId("lock-closed-icon");
    if (status === "unlocked") {
      expect(lockClosedIcon).not.toBeInTheDocument();
    }
  });
});
