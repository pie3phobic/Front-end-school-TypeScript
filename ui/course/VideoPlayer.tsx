import React, { useRef, useState, useReducer, useCallback } from "react";
import ReactPlayer from "react-player";
import { Action, State, reducer } from "../../domain/courseReducer";
import {
  onEndedLogic,
  onReadyLogic,
  onProgressLogic,
} from "../../domain/videoLogic";

const VideoPlayer = ({
  url,
  initialState,
}: {
  url: string;
  initialState: State;
}) => {
  const [played, setPlayed] = useState<number>(0);
  const playerRef = useRef(null);
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    reducer,
    initialState
  );

  const onEnded = useCallback(() => {
    onEndedLogic(state, played, dispatch, playerRef);
  }, [played, state]);

  const onReady = useCallback(() => {
    onReadyLogic(state, dispatch, playerRef);
  }, [state]);

  return (
    <ReactPlayer
      data-testid="actual-player"
      ref={playerRef}
      url={url}
      width="100%"
      onEnded={onEnded}
      playing={state.isPlaying}
      onReady={onReady}
      muted={false}
      controls={true}
      onProgress={(progress) =>
        onProgressLogic(url, progress.playedSeconds, setPlayed)
      }
    />
  );
};

export default VideoPlayer;
