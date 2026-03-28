import { BasePage } from "./BasePage.ts";

export class BookingDetailsPage extends BasePage {

    async openBooking(id: number) {

        await this.page.goto(`/booking/${id}`);
    }

    async getPagetext() {
        return await this.page.textContent("body");
    }


}