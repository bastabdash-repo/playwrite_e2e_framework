import { BaseApiClient } from "./BaseApiClient.ts";

export class BookingClient extends BaseApiClient {

    createBooking(payload: any) {
        // 🔥 MUST be exactly "/booking"
        return this.post("/booking", payload);
    }

    getBooking(id: number) {
        return this.get(`/booking/${id}`);
    }
}
