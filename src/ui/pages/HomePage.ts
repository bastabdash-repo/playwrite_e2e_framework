import { BasePage } from "./BasePage";

export class HomePage extends BasePage {

    async clickGetStarted() {
        const locator = this.page.getByRole('link', { name: 'Get started' });

        await locator.waitFor({ state: 'visible', timeout: 10000 });
        await locator.click();
    }

}