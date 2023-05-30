import { CourseDataProps, PropsDataCourse } from "../../domain/types";
export function getCourseDataMock(id: string): Promise<PropsDataCourse> {
  return Promise.resolve({
    data: {
      id: "352be3c6-848b-4c19-9e7d-54fe68fef183",
      title: "Lack of Motivation & How to Overcome It",
      tags: ["productivity"],
      launchDate: "2023-03-06T16:50:06.000Z",
      status: "launched",
      description:
        "Reignite your inner drive by managing factors that dampen your motivation.",
      duration: 1401,
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
      lessons: [
        {
          id: "278e5a0e-8df1-4646-9984-10289d52dc2d",
          title: "Why we lack motivation",
          duration: 255,
          order: 1,
          type: "video",
          status: "unlocked",
          link: "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-1/AppleHLS1/lesson-1.m3u8",
          previewImageLink:
            "https://wisey.app/assets/images/web/lessons-covers/lack-of-motivation-how-to-overcome-it/lesson-1",
          meta: null,
        },
        {
          id: "d2379510-3e3a-4d87-a3e9-05c1a0195548",
          title: "Decision paralysis",
          duration: 266,
          order: 2,
          type: "video",
          status: "unlocked",
          link: "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-2/AppleHLS1/lesson-2.m3u8",
          previewImageLink:
            "https://wisey.app/assets/images/web/lessons-covers/lack-of-motivation-how-to-overcome-it/lesson-2",
          meta: null,
        },
        {
          id: "29a8fc4d-b2a4-420b-80de-73ecda13f28e",
          title: "Negative self-talk",
          duration: 286,
          order: 3,
          type: "video",
          status: "unlocked",
          link: "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-3/AppleHLS1/lesson-3.m3u8",
          previewImageLink:
            "https://wisey.app/assets/images/web/lessons-covers/lack-of-motivation-how-to-overcome-it/lesson-3",
          meta: null,
        },
        {
          id: "a7ffcfb9-32b0-4bb8-8c41-ed5e2a45fd4a",
          title: "Lack of clarity",
          duration: 319,
          order: 4,
          type: "video",
          status: "unlocked",
          link: "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-4/AppleHLS1/lesson-4.m3u8",
          previewImageLink:
            "https://wisey.app/assets/images/web/lessons-covers/lack-of-motivation-how-to-overcome-it/lesson-4",
          meta: null,
        },
        {
          id: "ec7df2b9-2fe2-49b7-81e2-5b5df86997e3",
          title: "Lack of challenges",
          duration: 275,
          order: 5,
          type: "video",
          status: "unlocked",
          link: "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-5/AppleHLS1/lesson-5.m3u8",
          previewImageLink:
            "https://wisey.app/assets/images/web/lessons-covers/lack-of-motivation-how-to-overcome-it/lesson-5",
          meta: null,
        },
      ],
      containsLockedLessons: false,
    },
  });
}
