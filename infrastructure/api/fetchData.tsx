// import fetchAccessToken from "./accessToken";
// import { DataProps } from "../../domain/types";

// class ApiClient {
//   static instance: ApiClient;
//   // @ts-ignore
//   #accessToken: string;

//   private constructor() {}

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

//   async fetchData(): Promise<{ data: DataProps }> {
//     try {
//       const host: string = "http://api.wisey.app";
//       const version: string = "api/v1";
//       const res = await fetch(`${host}/${version}/core/preview-courses`, {
//         headers: {
//           Authorization: `Bearer ${this.#accessToken}`,
//         },
//       });
//       const data: DataProps = (await res.json()) as DataProps;
//       return { data };
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       throw error;
//     }
//   }

//   getToken() {
//     return this.#accessToken;
//   }
// }

// export default ApiClient;
import BaseApiClient from "./baseApiClient";
import { DataProps } from "../../domain/types";
// @ts-ignore
class FetchDataApiClient extends BaseApiClient {
  private static instance: FetchDataApiClient;

  private constructor() {
    super();
    this.startTokenRefreshTimer();
  }

  public static async getInstance(): Promise<FetchDataApiClient> {
    if (!FetchDataApiClient.instance) {
      FetchDataApiClient.instance = new FetchDataApiClient();
      await FetchDataApiClient.instance.fetchAccessToken();
    }
    return FetchDataApiClient.instance;
  }

  public async fetchData(): Promise<{ data: DataProps }> {
    try {
      const url = `${this.host}/${this.version}/core/preview-courses`;
      const res = await this.fetchDataFromSource(url);
      const data: DataProps = (await res.json()) as DataProps;
      return { data };
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}

export default FetchDataApiClient;
