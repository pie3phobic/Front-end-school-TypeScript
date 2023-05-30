import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import InfoCard from "../courses/InfoCard";
import createMockRouter from "../createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";
const props = {
  description: "Course`s descpiption",
  id: "1",
  lessonsCount: 5,
  meta: {
    slug: "Course-101",
    skills: ["Skill 1", "Skill 2", "Skill3"],
    courseVideoPreview: {
      link: "https://wisey.app/videos/preview.m3u8",
      duration: 100,
      previewImageLink: "https://example.com/image.jpg",
    },
  },
  previewImageLink: "https://example.com/image.jpg",
  rating: 5,
  title: "Course`s title",
};
let router = createMockRouter({ query: { id: props.id } });
describe("InfoCard component", () => {
  test("renders course card with all properties correctly", () => {
    render(<InfoCard {...props} />);
    const title = screen.getByText(props.title);
    const description = screen.getByText(props.description);
    const lessonsCount = screen.getByText(
      `Number of lessons: ${props.lessonsCount}`
    );
    const rating = screen.getByText(props.rating);
    const img = screen.getByAltText("Course preview image");
    const skills = screen.getAllByTestId("skill");
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(lessonsCount).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("alt", "Course preview image");
    expect(screen.getByTestId("heart-icon")).toBeInTheDocument();
    expect(screen.getByTestId("star-icon")).toBeInTheDocument();
    expect(skills).toHaveLength(props.meta.skills.length);
    skills.forEach((skill, index) => {
      expect(skill).toHaveTextContent(props.meta.skills[index]);
    });
  });
  test("correctly redirects to course`s page and passes id as query", () => {
    render(
      <RouterContext.Provider value={router}>
        <InfoCard {...props} />
      </RouterContext.Provider>
    );
    waitFor(() => {
      fireEvent.click(screen.getByTestId("element-link"));
      expect(router.push).toHaveBeenCalledWith("/courses");
      expect(router.push).toHaveAttribute("href", "/course?id=1");
    });
  });
});
