import { TokenProps } from "../../domain/types";

export function fetchAccessTokenMock(): Promise<TokenProps> {
  return Promise.resolve("mock_access_token");
}
