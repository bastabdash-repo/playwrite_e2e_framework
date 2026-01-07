// // config/env.ts

// // 1️⃣ Define allowed environments
// const allowedEnvs = ["dev", "qa", "prod"] as const;
// type Environment = typeof allowedEnvs[number];

// // 2️⃣ Resolve ENV safely (default = qa)
// export const ENV: Environment =
//     allowedEnvs.includes(process.env.ENV as Environment)
//         ? (process.env.ENV as Environment)
//         : "qa";

// // 3️⃣ Environment configuration
// const envConfig: Record<
//     Environment,
//     {
//         uiBaseUrl: string;
//         apiBaseUrl: string;
//     }
// > = {
//     dev: {
//         uiBaseUrl: "https://example-dev.com",
//         apiBaseUrl: "https://restful-booker.herokuapp.com",
//     },
//     qa: {
//         uiBaseUrl: "https://example-qa.com",
//         apiBaseUrl: "https://restful-booker.herokuapp.com",
//     },
//     prod: {
//         uiBaseUrl: "https://example.com",
//         apiBaseUrl: "https://restful-booker.herokuapp.com",
//     },
// };

// // 4️⃣ Export resolved config
// export default envConfig[ENV];



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


