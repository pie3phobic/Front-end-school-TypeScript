import React from "react";
import Pagination from "../common/Pagination";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

const props = {
  items: 25,
  pageSize: 10,
  currentPage: 1,
  onPageChange: jest.fn(),
};

describe("Pagination component", () => {
  test("renders correctly", () => {
    render(<Pagination {...props} />);
    const pagination = screen.getByTestId("pagination");
    expect(pagination).toBeInTheDocument();
  });

  test("renders the correct number of pages", () => {
    render(<Pagination {...props} />);
    const pagination = screen.getByTestId("pagination");
    expect(pagination.children.length).toBe(1);
    expect(pagination.children[0].children.length).toBe(3);
  });

  test("renders active page correctly", () => {
    render(<Pagination {...props} />);
    const activePage = screen.getByText("1");
    expect(activePage.parentElement).toHaveClass("pageItemActive");
  });

  test("calls onPageChange when page is clicked", () => {
    render(<Pagination {...props} />);
    const pageTwo = screen.getByText("2");
    fireEvent.click(pageTwo);
    expect(props.onPageChange).toHaveBeenCalledWith(2);
  });

  test("returns null if theres only 1 page", () => {
    const onPageChangeMock = jest.fn();
    render(
      <Pagination
        items={10}
        pageSize={10}
        currentPage={1}
        onPageChange={onPageChangeMock}
      />
    );
    const pagination = screen.queryByTestId("pagination");
    expect(pagination).toBeNull();
  });
});
