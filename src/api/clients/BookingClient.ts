import { BaseApiClient } from "./BaseApiClient";

export class BookingClient extends BaseApiClient {
    createBooking(payload: any) {
        return this.post("/booking", payload);
    }

}