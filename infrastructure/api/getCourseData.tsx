// import fetchAccessToken from "./accessToken";
// import { CourseDataProps } from "../../domain/types";

// class ApiClient {
//   static instance: ApiClient;
//   // @ts-ignore
//   #accessToken: string;
//   static async getInstance() {
//     if (!ApiClient.instance) {
//       ApiClient.instance = new ApiClient();
//       await ApiClient.instance.refreshToken();
//       setInterval(() => {
//         ApiClient.instance.refreshToken();
//       }, 3600 * 1000);
//     }
//     return ApiClient.instance;
//   }

//   async refreshToken(): Promise<void> {
//     this.#accessToken = await fetchAccessToken();
//   }

//   async getCourseData(id: string): Promise<{ data: CourseDataProps }> {
//     try {
//       const host: string = "http://api.wisey.app";
//       const version: string = "api/v1";
//       const res = await fetch(`${host}/${version}/core/preview-courses/${id}`, {
//         headers: {
//           Authorization: `Bearer ${this.#accessToken}`,
//         },
//       });
//       const data: CourseDataProps = (await res.json()) as CourseDataProps;
//       return { data };
//     } catch (error) {
//       console.error("Error fetching course data:", error);
//       throw error;
//     }
//   }

//   getToken() {
//     return this.#accessToken;
//   }
// }

// export default ApiClient;
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
