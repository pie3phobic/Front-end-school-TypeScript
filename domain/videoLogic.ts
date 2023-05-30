import { Action, State } from "./courseReducer";
export const onEndedLogic = (
  state: State,
  played: number,
  dispatch: React.Dispatch<Action>,
  playerRef: any
) => {
  if (!state.isEnded) {
    if (playerRef.current?.getDuration() === played) {
      dispatch({ type: "setIsEnded", payload: true });
    }
  }
};

export const onReadyLogic = (
  state: State,
  dispatch: React.Dispatch<Action>,
  playerRef: any
) => {
  const videoDurations =
    JSON.parse(window.localStorage.getItem("videoDurations") || "{}") || {};
  if (JSON.stringify(videoDurations) !== "{}") {
    let timestamp = videoDurations[playerRef.current?.props.url || ""];
    if (timestamp > 0) {
      playerRef.current?.seekTo(timestamp, "seconds");
      playerRef.current?.play();
    }
  }
  dispatch({ type: "setIsReady", payload: true });
};

export const onProgressLogic = (
  url: string,
  played: number,
  setPlayed: React.Dispatch<React.SetStateAction<number>>
) => {
  setPlayed(played);
  const videoDurations =
    JSON.parse(window.localStorage.getItem("videoDurations") || "{}") || {};
  videoDurations[url] = played;
  window.localStorage.setItem("videoDurations", JSON.stringify(videoDurations));
};
