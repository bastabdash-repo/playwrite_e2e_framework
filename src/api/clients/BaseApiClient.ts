import { APIRequestContext } from "@playwright/test";
import env from "../../config/env.config.ts";

export class BaseApiClient {
    constructor(protected request: APIRequestContext) { }

    async post(endpoint: string, payload: any) {
        return this.request.post(
            `${env.apiBaseUrl}${endpoint}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                data: payload,
            }
        );
    }

    async get(endpoint: string) {
        return this.request.get(
            `${env.apiBaseUrl}${endpoint}`,
            {
                headers: {
                    Accept: "application/json",
                },
            }
        );
    }
}
