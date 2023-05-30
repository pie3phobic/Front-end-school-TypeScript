import { paginate } from "../paginate";
describe("Paginate function", () => {
  test("returns array of 2 items if page number = 1 and page size = 2", () => {
    const props = {
      items: [
        {
          id: "352be3c6-848b-4c19-9e7d-54fe68fef183",
          title: "Lack of Motivation & How to Overcome It",
          tags: ["productivity"],
          launchDate: "2023-03-06T16:50:06.000Z",
          status: "launched",
          description:
            "Reignite your inner drive by managing factors that dampen your motivation.",
          duration: 1401,
          lessonsCount: 5,
          containsLockedLessons: false,
          previewImageLink:
            "https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it",
          rating: 3.5,
          meta: {
            slug: "lack-of-motivation-how-to-overcome-it",
            skills: [
              "Aligning your goals with your motives",
              "Overcoming decision paralysis",
              "Reframing negative self-talk",
              "Gaining clarity",
              "Challenging yourself",
            ],
            courseVideoPreview: {
              link: "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8",
              duration: 27,
              previewImageLink:
                "https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/preview",
            },
          },
        },
        {
          id: "3b77ceb6-fb43-4cf5-a25b-8fe9222a0714",
          title: "The Power of Self-Discipline: How to Stay on Track",
          tags: ["productivity"],
          launchDate: "2023-03-06T16:25:24.000Z",
          status: "launched",
          description:
            "Find the inner strength to overcome procrastination and reach your goals.",
          duration: 1486,
          lessonsCount: 5,
          containsLockedLessons: false,
          previewImageLink:
            "https://wisey.app/assets/images/web/course-covers/the-power-of-self-discipline-how-to-stay-on-track",
          rating: 5,
          meta: {
            slug: "the-power-of-self-discipline-how-to-stay-on-track",
            skills: [
              "Increasing self-awareness",
              "Personal accountability",
              "Developing a routine",
              "Improving self-control",
              "Focusing on long-term goals",
            ],
            courseVideoPreview: {
              link: "https://wisey.app/videos/the-power-of-self-discipline-how-to-stay-on-track/preview/AppleHLS1/preview.m3u8",
              duration: 19,
              previewImageLink:
                "https://wisey.app/assets/images/web/course-covers/the-power-of-self-discipline-how-to-stay-on-track/preview",
            },
          },
        },
      ],
      pageNumber: 1,
      pageSize: 2,
    };
    expect(paginate(props.items, props.pageNumber, props.pageSize)).toEqual(
      props.items
    );
  });
});
