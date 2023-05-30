import { State, Action, reducer } from "../courseReducer";
describe("Header component", () => {
  const initialState: State = {
    videoUrl: "",
    nowPlaying: "",
    lockedContent: false,
    isPlaying: false,
    isEnded: false,
    isReady: false,
  };
  test("Should set video url ", () => {
    const action: Action = {
      type: "setVideoUrl",
      payload: "http://example.com/video.mp4",
    };
    const newState = reducer(initialState, action);
    expect(newState.videoUrl).toEqual("http://example.com/video.mp4");
  });
  test("Should set now playing text", () => {
    const action: Action = {
      type: "setNowPlaying",
      payload: "Lesson 1",
    };
    const newState = reducer(initialState, action);
    expect(newState.nowPlaying).toEqual("Lesson 1");
  });
  test("Should set video to be playing ", () => {
    const action: Action = {
      type: "setIsPlaying",
      payload: true,
    };
    const newState = reducer(initialState, action);
    expect(newState.isPlaying).toEqual(true);
  });
  test("Should set locked content ", () => {
    const action: Action = {
      type: "setLockedContent",
      payload: true,
    };
    const newState = reducer(initialState, action);
    expect(newState.lockedContent).toEqual(true);
  });
  test("Should set if video ended ", () => {
    const action: Action = {
      type: "setIsEnded",
      payload: true,
    };
    const newState = reducer(initialState, action);
    expect(newState.isEnded).toEqual(true);
  });
  test("Should set if video is ready ", () => {
    const action: Action = {
      type: "setIsReady",
      payload: true,
    };
    const newState = reducer(initialState, action);
    expect(newState.isReady).toEqual(true);
  });
  test("should throw an error for unknown action types", () => {
    const unknownAction: Action = { type: "unknown", payload: null };
    expect(() => reducer(initialState, unknownAction)).toThrowError();
  });
});
