import { handleLockedVideo, handleUnlockedVideo } from "../videoUtils";

describe("handleUnlockedVideo", () => {
  test("should dispatch correct actions if video is unlocked", () => {
    const mockDispatch = jest.fn();
    const lessonRef = {
      current: {
        id: "1",
        title: "Title",
        link: "https://example.com/video.mp4",
        duration: 10,
        order: 1,
        status: "unlocked",
        previewImageLink: "some-link",
      },
    };

    handleUnlockedVideo(mockDispatch, lessonRef);

    expect(mockDispatch).toHaveBeenCalledTimes(3);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "setVideoUrl",
      payload: lessonRef.current.link,
    });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "setIsEnded",
      payload: false,
    });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "setLockedContent",
      payload: false,
    });
  });
});
test("should dispatch correct actions if video is locked", () => {
  const mockDispatch = jest.fn();

  handleLockedVideo(mockDispatch);

  expect(mockDispatch).toHaveBeenCalledTimes(3);
  expect(mockDispatch).toHaveBeenCalledWith({
    type: "setLockedContent",
    payload: true,
  });
  expect(mockDispatch).toHaveBeenCalledWith({
    type: "setIsEnded",
    payload: false,
  });
  expect(mockDispatch).toHaveBeenCalledWith({
    type: "setVideoUrl",
    payload: "",
  });
});
