import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sidebar from "../index/Sidebar";
import createMockRouter from "../createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";
let router = createMockRouter({});
describe("Sidebar component", () => {
  test("Explore all button is rendrered correcty", () => {
    render(<Sidebar />);
    const button = screen.getByText("Explore All");
    expect(button).toBeInTheDocument();
  });
  test("redirects correctly to Courses page", async () => {
    render(
      <RouterContext.Provider value={router}>
        <Sidebar />
      </RouterContext.Provider>
    );
    waitFor(() => {
      fireEvent.click(screen.getByTestId("courses-link"));
      expect(router.push).toHaveBeenCalledWith("/courses");
    });
  });
  test("applies css properties on hover", () => {
    render(<Sidebar />);
    waitFor(() => {
      const paragraphs = screen.getAllByRole("paragraph");
      paragraphs.forEach((p) => {
        let parent = p.parentElement;
        while (parent !== null && parent.tagName !== "BODY") {
          if (parent.tagName === "DIV") {
            fireEvent.mouseEnter(parent);
            const computedStyle = getComputedStyle(parent);
            expect(computedStyle.getPropertyValue("background-color")).toBe(
              "rgb(248 113 113 / 0.5)"
            );
          }
          parent = parent.parentElement;
        }
      });
    });
  });
});
