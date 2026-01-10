import { test, expect } from "@playwright/test";
import { BookingClient } from "../../src/api/clients/BookingClient.ts";
import bookingData from '../../src/test-data/bookingData.json' with { type: "json" };
test("create a api request to do booking", async ({ request }) => {
    const bookingClient = new BookingClient(request);

    const response = await bookingClient.createBooking(bookingData);

    // 🔎 PROOF
    console.log("FINAL URL:", response.url());
    console.log("STATUS:", response.status());

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.bookingid).toBeTruthy();
});
