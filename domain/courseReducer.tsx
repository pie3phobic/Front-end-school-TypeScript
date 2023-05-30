export interface State {
  videoUrl: string;
  nowPlaying: string;
  lockedContent: boolean;
  isPlaying: boolean;
  isEnded: boolean;
  isReady: boolean;
}

export type Action =
  | { type: "setVideoUrl"; payload: string }
  | { type: "setNowPlaying"; payload: string }
  | { type: "setLockedContent"; payload: boolean }
  | { type: "setIsPlaying"; payload: boolean }
  | { type: "setIsEnded"; payload: boolean }
  | { type: "setIsReady"; payload: boolean };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "setVideoUrl":
      return { ...state, videoUrl: action.payload };
    case "setNowPlaying":
      return { ...state, nowPlaying: action.payload };
    case "setLockedContent":
      return { ...state, lockedContent: action.payload };
    case "setIsPlaying":
      return { ...state, isPlaying: action.payload };
    case "setIsEnded":
      return { ...state, isEnded: action.payload };
    case "setIsReady":
      return { ...state, isReady: action.payload };
    default:
      throw new Error();
  }
}
