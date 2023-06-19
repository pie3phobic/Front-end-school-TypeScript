import BaseApiClient from "./baseApiClient";
import { CourseDataProps } from "../../domain/types";
// @ts-ignore
class FetchCourseDataApiClient extends BaseApiClient {
  private static instance: FetchCourseDataApiClient;

  private constructor() {
    super();
    this.startTokenRefreshTimer();
  }

  public static async getInstance(): Promise<FetchCourseDataApiClient> {
    if (!FetchCourseDataApiClient.instance) {
      FetchCourseDataApiClient.instance = new FetchCourseDataApiClient();
      await FetchCourseDataApiClient.instance.fetchAccessToken();
    }
    return FetchCourseDataApiClient.instance;
  }

  public async fetchData(id: string): Promise<{ data: CourseDataProps }> {
    try {
      const url = `${this.host}/${this.version}/core/preview-courses/${id}`;
      const res = await this.fetchDataFromSource(url);
      const data: CourseDataProps = (await res.json()) as CourseDataProps;
      return { data };
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}

export default FetchCourseDataApiClient;
