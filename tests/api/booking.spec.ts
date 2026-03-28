import { test, expect } from "@playwright/test";
import { BookingClient } from "../../src/api/clients/BookingClient.ts";
//import bookingData from '../../src/test-data/bookingData.json' with { type: "json" };
import { AuthClient } from "../../src/api/clients/AuthClient.ts";
import { generateBookingData } from "../../src/utils/dataGenerator.ts";
import { bookingSchema } from "../../src/api/schemas/booking.schema.ts";

test("Create booking, validate GET, and use token for secured flow", async ({ request }) => {
    const bookingClient = new BookingClient(request);
    const authClient = new AuthClient(request);
    const bookingData = generateBookingData();
    // 🔹 STEP 1: Get auth token (secured APIs need this)
    const token = await authClient.login("admin", "password123");
    //console.log(token);
    expect(token).toBeTruthy();

    // 🔹 STEP 2: CREATE booking (no token required by API)
    const createResponse = await bookingClient.createBooking(bookingData);
    expect(createResponse.status()).toBe(200);
    console.log("Creating booking...");


    const createBody = await createResponse.json();
    const bookingId = createBody.bookingid;
    expect(bookingId).toBeTruthy();

    // 🔹 STEP 3: GET booking (no token required)
    const getResponse = await bookingClient.getBooking(bookingId);
    expect(getResponse.status()).toBe(200);

    const getBody = await getResponse.json();

    // 🔹 Schema validation
    expect(getBody).toMatchObject(bookingSchema);

    // 🔹 Field-level validation
    expect(getBody.firstname).toBe(bookingData.firstname);
    expect(getBody.lastname).toBe(bookingData.lastname);
    expect(getBody.totalprice).toBe(bookingData.totalprice);

    // 🔹 STEP 4: Example secured call (token passed)
    // (Even if not updating now, this proves token flow works)
    const securedGetResponse = await bookingClient.get(`/booking/${bookingId}`, token);
    expect(securedGetResponse.status()).toBe(200);
});