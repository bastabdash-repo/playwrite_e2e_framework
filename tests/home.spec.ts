import { test, expect } from "@playwright/test";
import { HomePage } from "../src/ui/pages/HomePage.ts";

test("@Smoke User can navigate to Get Started page", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigate("/");
  await homePage.clickGetStarted();

  await expect(page).toHaveURL(/intro/);

  await expect(page.locator("h1")).toBeVisible();
});
