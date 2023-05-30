import { LessonProps } from "./types";
import { Dispatch } from "react";
import { Action, State } from "./courseReducer";

export function handleUnlockedVideo(
  dispatch: Dispatch<Action>,
  lessonRef: React.MutableRefObject<LessonProps>
) {
  dispatch({ type: "setVideoUrl", payload: lessonRef.current.link });
  dispatch({ type: "setIsEnded", payload: false });
  dispatch({ type: "setLockedContent", payload: false });
}

export function handleLockedVideo(dispatch: Dispatch<Action>) {
  dispatch({ type: "setLockedContent", payload: true });
  dispatch({ type: "setIsEnded", payload: false });
  dispatch({ type: "setVideoUrl", payload: "" });
}
