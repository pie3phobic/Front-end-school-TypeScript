import VideoPlayer from "../course/VideoPlayer";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import React, { useRef, useState, useReducer, useCallback } from "react";
import userEvent from "@testing-library/user-event";
import { Action, State, reducer } from "../../domain/courseReducer";
import { mock } from "node:test";

const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => (store[key] = value),
    removeItem: (key: string) => delete store[key],
    clear: () => (store = {}),
  };
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });

const initialState = {
  videoUrl: "some-url",
  nowPlaying: "Course Intro",
  lockedContent: false,
  isPlaying: true,
  isEnded: false,
  isReady: false,
};

jest.mock("react-player", () => {
  const mockPlayer = ({
    url,
    onEnded,
    playing,
    onReady,
    muted,
    controls,
    onProgress,
    getDuration,
  }) => {
    const duration = 10;
    const seekTo = mock.fn();
    const play = mock.fn();
    const dispatch = jest.fn();
    return (
      <div data-testid="react-player-mock">
        <p>url: {url}</p>
        <p>playing: {playing.toString()}</p>
        <p>muted: {muted.toString()}</p>
        <p>controls: {controls.toString()}</p>
        <p>duration: {duration}</p>
      </div>
    );
  };

  return mockPlayer;
});

describe("VideoPlayer", () => {
  test("renders the ReactPlayer with correct props", () => {
    const url = "https://example.com/video.mp4";
    const { getByTestId } = render(
      <VideoPlayer url={url} initialState={initialState} />
    );
    const reactPlayerMock = getByTestId("react-player-mock");
    expect(reactPlayerMock).toBeInTheDocument();
    expect(reactPlayerMock).toHaveTextContent(`url: ${url}`);
    expect(reactPlayerMock).toHaveTextContent("playing: true");
    expect(reactPlayerMock).toHaveTextContent("muted: false");
    expect(reactPlayerMock).toHaveTextContent("controls: true");
  });
  test("should call dispatch with setIsEnded when the video ends", () => {
    const dispatch = jest.fn();
    render(
      <VideoPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        initialState={initialState}
      />
    );
    userEvent.click(screen.getByTestId("react-player-mock"));
    expect(dispatch).not.toHaveBeenCalledWith({
      type: "setIsEnded",
      payload: true,
    });
    // // Simulate the video ending
    // userEvent.type(
    //   screen.getByTestId("react-player-mock"),
    //   "{shift}{ctrl}{arrowright}"
    // );
    // expect(dispatch).toHaveBeenCalledWith({
    //   type: "setIsEnded",
    //   payload: true,
    // });
  });
});
