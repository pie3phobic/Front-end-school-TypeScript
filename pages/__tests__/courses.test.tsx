import React, { useState } from "react";
import { PaginationProps, DataProps } from "../../domain/types";
import { render, screen, fireEvent } from "@testing-library/react";
import { rest } from "msw";
import { fetchDataMock } from "../../infrastructure/api/fetchDataMock";
import Courses from "../../pages/courses";
import "@testing-library/jest-dom";

describe("Courses page", () => {
  test("should render data correctly", async () => {
    render(
      <Courses data={(await fetchDataMock()).data as DataProps["data"]} />
    );

    const courseTitle = await screen.findByText(
      "Lack of Motivation & How to Overcome It"
    );
    const courseDescription = await screen.findByText(
      "Reignite your inner drive by managing factors that dampen your motivation."
    );
    const numberOfLessons = await screen.findByText("Number of lessons: 5");
    const rating = await screen.findByText("3.5");
    expect(courseTitle).toBeInTheDocument();
    expect(courseDescription).toBeInTheDocument();
    expect(numberOfLessons).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(Number(rating.textContent)).toEqual(
      (await fetchDataMock()).data.courses[0].rating
    );
  });
});
