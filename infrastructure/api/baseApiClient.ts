import fetchAccessToken from "./accessToken";

class BaseApiClient {
  protected static instance: BaseApiClient;
  // @ts-ignore
  #accessToken: string;
  protected host: string;
  protected version: string;

  protected constructor() {
    this.host = "http://api.wisey.app";
    this.version = "api/v1";
    this.#accessToken = "";
  }

  protected async fetchAccessToken(): Promise<void> {
    this.#accessToken = await fetchAccessToken();
  }

  protected getToken(): string {
    return this.#accessToken;
  }

  protected async fetchDataFromSource(url: string): Promise<Response> {
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    });
  }

  protected startTokenRefreshTimer() {
    setInterval(() => {
      this.fetchAccessToken();
    }, 3600 * 1000);
  }
}

export default BaseApiClient;
