import { FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
    console.log("Running tests on ENV:", process.env.ENV || "qa");
}

export default globalSetup;
