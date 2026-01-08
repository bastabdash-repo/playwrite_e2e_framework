
export type EnvType = "dev" | "qa" | "prod";

export const ENV: EnvType =
    (process.env.ENV as EnvType) || "qa";

const envConfig: Record<EnvType, {
    uiBaseUrl: string;
    apiBaseUrl: string;
}> = {
    dev: {
        uiBaseUrl: "https://example-dev.com",
        apiBaseUrl: "https://restful-booker.herokuapp.com",
    },
    qa: {
        uiBaseUrl: "https://www.google.com/",
        apiBaseUrl: "https://restful-booker.herokuapp.com",
    },
    prod: {
        uiBaseUrl: "https://example.com",
        apiBaseUrl: "https://restful-booker.herokuapp.com",
    },
};

export default envConfig[ENV];


