import { test, expect } from "@playwright/test";
import { BookingClient } from "../../src/api/clients/BookingClient.ts";
import { BookingDetailsPage } from "../../src/ui/pages/BookingDetailsPage.ts";
import { generateBookingData } from "../../src/utils/dataGenerator.ts";
//import bookingData from '../../src/test-data/bookingData.json' with { type: "json" };

test("E2E: Create booking via API and validate via UI", async ({ request, page }) => {
  const bookingData = generateBookingData();
  // ✅ Step 2: LOG HERE
  console.log("Generated Data:", bookingData);

  const bookingClient = new BookingClient(request);
  let bookingId: number;

  try {
    // 🔹 LOG 1
    console.log("🔹 Creating booking via API...");

    const response = await bookingClient.createBooking(bookingData);
    expect(response.status()).toBe(200);

    const body = await response.json();
    bookingId = body.bookingid;

    // 🔹 LOG 2
    console.log("✅ Booking created successfully");
    console.log("📌 Booking ID:", bookingId);

    // 🔹 LOG 3
    console.log("🌐 Opening booking page in UI...");

    const bookingPage = new BookingDetailsPage(page);
    await bookingPage.openBooking(bookingId);

    // 🔹 LOG 4
    console.log("🔍 Validating page URL...");

    await expect(page).toHaveURL(new RegExp(`/booking/${bookingId}`));


    // 🔹 LOG 5
    console.log("🎉 E2E validation completed successfully");

  } finally {
    console.log("🧹 Cleanup (simulated) for booking:", bookingId);
  }
});

console.log("testing update");
//