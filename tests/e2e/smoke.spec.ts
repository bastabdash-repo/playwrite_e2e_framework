import { test } from "@playwright/test";

test("Base URL smoke test", async ({ page }) => {
    await page.goto("/");
});
