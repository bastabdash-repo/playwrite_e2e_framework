import { APIRequestContext, expect } from "playwright/test";
import env from "../../config/env.config";

export class BaseApiClient {

    constructor(protected request: APIRequestContext) { }

    async get(url: string) {
        return this.request.get(`${env.apiBaseUrl}${url}`);
    }

    async post(url: string, data: any) {
        return this.request.post(`${env.apiBaseUrl}${url}`, { data });
    }


}