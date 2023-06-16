import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Header from "../common/Header";
import "@testing-library/jest-dom";
import createMockRouter from "../createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";

let router = createMockRouter({});

describe("Header component", () => {
  test("renders logo and search bar", () => {
    render(<Header />);
    const logo = screen.getByAltText("StudyLab logo");
    const searchInput = screen.getByPlaceholderText("Start search");
    expect(logo).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });

  test("updates search input value on change", () => {
    render(<Header />);
    const searchInput = screen.getByPlaceholderText(
      "Start search"
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "Next.js" } });
    expect(searchInput.value).toBe("Next.js");
  });
  test("renders Courses link", () => {
    render(<Header />);
    const coursesLink = screen.getByText("Courses");
    expect(coursesLink).toBeInTheDocument();
  });

  test("redirects correctly to Courses page", async () => {
    render(
      <RouterContext.Provider value={router}>
        <Header />
      </RouterContext.Provider>
    );
    waitFor(() => {
      fireEvent.click(screen.getByTestId("courses-link"));
      expect(router.push).toHaveBeenCalledWith("/courses");
    });
  });

  test("redirects correctly to Main page", async () => {
    render(
      <RouterContext.Provider value={router}>
        <Header />
      </RouterContext.Provider>
    );
    waitFor(() => {
      fireEvent.click(screen.getByTestId("logo-link"));
      expect(router.push).toHaveBeenCalledWith("/");
    });
  });

  test("renders menu and user icons", () => {
    render(<Header />);
    const menuIcon = screen.getByTestId("menu-icon");
    const userIcon = screen.getByTestId("user-icon");
    expect(menuIcon).toBeInTheDocument();
    expect(userIcon).toBeInTheDocument();
  });
});
