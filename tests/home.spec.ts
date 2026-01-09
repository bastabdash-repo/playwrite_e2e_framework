import { test, expect } from "@playwright/test";
import { HomePage } from "../src/ui/pages/HomePage.ts";

test("User can navigate to Get Started page", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigate("/");
  await homePage.clickGetStarted();

  await expect(page).toHaveURL(/intro/);
});
