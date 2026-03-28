
export type EnvType = "dev" | "qa" | "prod";

export const ENV: EnvType =
    (process.env.ENV as EnvType) || "qa";

const envConfig: Record<EnvType, {
    uiBaseUrl: string;
    apiBaseUrl: string;
}> = {
    dev: {
        uiBaseUrl: "https://restful-booker.herokuapp.com",
        apiBaseUrl: "https://restful-booker.herokuapp.com",
    },
    qa: {
        uiBaseUrl: "https://playwright.dev",  // ✅ UI
        apiBaseUrl: "https://restful-booker.herokuapp.com", // ✅ API
    },
    prod: {
        uiBaseUrl: "https://restful-booker.herokuapp.com",
        apiBaseUrl: "https://restful-booker.herokuapp.com",
    },
};

export default envConfig[ENV];


