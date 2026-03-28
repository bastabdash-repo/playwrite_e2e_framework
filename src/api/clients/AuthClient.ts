import { BaseApiClient } from "./BaseApiClient.ts";

export class AuthClient extends BaseApiClient {

    async login(username: string, password: string) {
        const response = await this.post(
            "/auth",
            { username, password }
        );

        const body = await response.json();
        return body.token;
    }
}
