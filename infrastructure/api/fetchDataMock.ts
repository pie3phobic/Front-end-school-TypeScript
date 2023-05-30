import { DataProps } from "../../domain/types";

export function fetchDataMock(): Promise<DataProps> {
  return Promise.resolve({
    data: {
      courses: [
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
      ],
    },
  });
}
