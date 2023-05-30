import fetchAccessToken from "./accessToken";
import { CourseDataProps } from "../../domain/types";

class ApiClient {
  static instance: ApiClient;
  #accessToken: string;
  static async getInstance() {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
      await ApiClient.instance.refreshToken();
      setInterval(() => {
        ApiClient.instance.refreshToken();
      }, 3600 * 1000);
    }
    return ApiClient.instance;
  }

  async refreshToken(): Promise<void> {
    this.#accessToken = await fetchAccessToken();
  }

  async getCourseData(id: string): Promise<{ data: CourseDataProps }> {
    try {
      const host: string = "http://api.wisey.app";
      const version: string = "api/v1";
      const res = await fetch(`${host}/${version}/core/preview-courses/${id}`, {
        headers: {
          Authorization: `Bearer ${this.#accessToken}`,
        },
      });
      const data: CourseDataProps = (await res.json()) as CourseDataProps;
      return { data };
    } catch (error) {
      console.error("Error fetching course data:", error);
      throw error;
    }
  }

  getToken() {
    return this.#accessToken;
  }
}

export default ApiClient;
