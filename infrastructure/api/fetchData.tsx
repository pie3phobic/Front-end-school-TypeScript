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
