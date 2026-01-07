import { BaseApiClient } from "./BaseApiClient.ts";

export class BookingClient extends BaseApiClient {
    createBooking(payload: any) {
        return this.post("/booking", payload);
    }

}