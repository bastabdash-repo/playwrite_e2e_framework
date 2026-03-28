import { test, expect } from "@playwright/test";
import { HomePage } from "../src/ui/pages/HomePage.ts";

test("@Smoke User can navigate to Get Started page", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigate("/");

  // ✅ Ensure page is fully loaded
  await page.waitForLoadState("domcontentloaded");

  await homePage.clickGetStarted();

  console.log("Current URL after click:", page.url());

  await expect(page).toHaveURL(/intro/);

  await expect(page.locator("h1")).toBeVisible();
});
