import { expect } from "@playwright/test";
import { BasePage } from "./BasePage.ts";

export class HomePage extends BasePage {

    async clickGetStarted() {
        // ✅ Ensure page is loaded
        await this.page.waitForLoadState("domcontentloaded");

        const locator = this.page.getByRole('link', { name: /get started/i });

        // ✅ More stable assertion
        await expect(locator).toBeVisible({ timeout: 20000 });

        // ✅ Scroll in case element is out of viewport (CI fix)
        await locator.scrollIntoViewIfNeeded();

        await locator.click();
    }
}