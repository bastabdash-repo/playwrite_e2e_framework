import {BasePage} from "./BasePage.ts"

export class HomePage extends BasePage{

    private getStartedLink = "text=Get started";

    async clickGetStarted(){

        await this.page.click(this.getStartedLink);
    }

    
}