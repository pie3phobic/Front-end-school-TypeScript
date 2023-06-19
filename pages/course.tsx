import React, { useEffect, useRef, useReducer, MutableRefObject } from "react";
import { FireIcon, StarIcon } from "@heroicons/react/solid";
import Header from "../ui/common/Header";
import LessonCard from "../ui/course/LessonCard";
import { Action, State, reducer } from "../domain/courseReducer";
import VideoPlayer from "../ui/course/VideoPlayer";
import { handleUnlockedVideo, handleLockedVideo } from "../domain/videoUtils";
import { CourseDataProps, LessonProps, PropsDataCourse } from "../domain/types";
import { GetServerSidePropsContext } from "next";
import FetchCourseDataApiClient from "../infrastructure/api/getCourseData";
const Course: React.FC<PropsDataCourse> = ({ data }) => {
  const lessonData = data.lessons;
  const initialState = {
    videoUrl: data.meta.courseVideoPreview?.link,
    nowPlaying: "Course Intro",
    lockedContent: false,
    isPlaying: true,
    isEnded: false,
    isReady: false,
  };
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    reducer,
    initialState
  );
  const lessonRef: MutableRefObject<LessonProps> = useRef(null);

  useEffect(() => {
    if (data.meta.courseVideoPreview?.link === void 0)
      dispatch({ type: "setLockedContent", payload: true });
  }, []);

  return (
    <div className="dark:bg-blue-950 pb-10">
      <Header />
      <div className="ml-10">
        <div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold pb-2 dark:text-white">
              {data.title}
            </h1>
            <p className="pb-6 text-lg dark:text-white">{data.description}</p>
            <div className="pb-4">
              <a className="bg-red-400/80 px-2 py-1 rounded-3xl text-black/60 dark:text-white dark:bg-purple-accent">
                #{data.tags}
              </a>
              <div className="flex align-middle mt-2 mb-8">
                <FireIcon className="h-5 text-red-400 dark:text-purple-accent" />
                <a className="text-red-400 text-sm font-semibold dark:text-purple-accent">
                  Launched on: {data.launchDate.split("T")[0]}
                </a>
              </div>
              <div className="flex">
                <StarIcon className="h-6 text-red-400 dark:text-purple-accent" />
                <a className="font-bold dark:text-white/90">{data.rating}</a>
              </div>
              <div className="flex-grow">
                {[data.meta.skills]?.map((item) =>
                  item?.map((value, index) => (
                    <p
                      key={`skill-${index}`}
                      className="text-black/70 dark:text-white"
                    >
                      {value}
                    </p>
                  ))
                )}
              </div>
              <p className="font-semibold pt-4 text-lg dark:text-white">
                Now Playing: {state.nowPlaying}
              </p>
              <div className="pt-4">
                {state.lockedContent === true && (
                  <a className="bg-red-400/80 px-24 py-1 rounded-3xl text-white">
                    This content is locked
                  </a>
                )}
                {state.isEnded === true && (
                  <a className="bg-green-400/80 px-24 py-1 rounded-3xl text-white">
                    Lesson finished ✔
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col  lg:flex-row lg:justify-between">
            <div className="pr-10 lg:pr-0">
              <VideoPlayer url={state.videoUrl} initialState={initialState} />
            </div>
          </div>
          <div className="flex flex-col bg-gray-200 h-[560px] w-[310px] lg:w-[500px] overflow-scroll rounded-3xl lg:absolute pb-8 scrollbar-hide md:w-[686px] lg:top-80 lg:right-0 dark:bg-slate-800">
            <p className="pl-10 pt-6 pb-4 text-xl font-semibold dark:text-white">
              Lessons:
            </p>
            {lessonData.map((lesson) => (
              <div
                key={lesson.id}
                // @ts-ignore
                ref={lessonRef}
                onClick={() => {
                  lessonRef.current = lesson;
                  dispatch({
                    type: "setNowPlaying",
                    payload: `Lesson ${lesson.order} '${lesson.title}'`,
                  });
                  if (lesson.status === "unlocked") {
                    handleUnlockedVideo(dispatch, lessonRef);
                  } else {
                    handleLockedVideo(dispatch);
                  }
                }}
              >
                <LessonCard key={lesson.id} {...lesson} />
              </div>
            ))}
          </div>
        </div>
        <div className="h-[40px] w-full bg-white dark:bg-blue-950"></div>
      </div>
    </div>
  );
};
export default Course;
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.query;
  const fetchCourseDataApiClient = await FetchCourseDataApiClient.getInstance();
  const { data }: { data: CourseDataProps } =
    await fetchCourseDataApiClient.fetchData(id as string);
  return { props: { data } };
};