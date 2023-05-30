import { getServerSideProps } from "../../pages/courses";
import { fetchDataMock } from "./fetchDataMock";
import ApiClient from "./getCourseData";

jest.mock("./getCourseData");

describe("getServerSideProps", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should fetch data with access token and return it", async () => {
    const mockData = fetchDataMock();
    const mockAccessToken = "mock_access_token";
    (ApiClient.getInstance as jest.Mock).mockResolvedValueOnce({
      fetchData: jest.fn().mockResolvedValueOnce(mockData),
      getToken: jest.fn().mockReturnValueOnce(mockAccessToken),
    });
    const result = await getServerSideProps();
    expect(ApiClient.getInstance).toHaveBeenCalledTimes(1);
    expect(ApiClient.getInstance).toHaveBeenCalledWith();
    expect(result).toEqual({
      props: { data: mockData },
    });
  });
});
