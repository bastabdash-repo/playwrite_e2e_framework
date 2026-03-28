// export function generateRandomString(prefix: string = "Test") {
//   return `${prefix}_${Math.floor(Math.random() * 100000)}`;
// }

// export function generateBookingData() {
//   return {
//     firstname: generateRandomString("John"),
//     lastname: generateRandomString("Doe"),
//     totalprice: Math.floor(Math.random() * 1000),
//     depositpaid: true,
//     bookingdates: {
//       checkin: "2024-01-01",
//       checkout: "2024-01-05"
//     },
//     additionalneeds: "Breakfast"
//   };
// }


import { faker } from "@faker-js/faker";

export function generateBookingData() {
    return {
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        totalprice: faker.number.int({ min: 100, max: 1000 }),
        depositpaid: faker.datatype.boolean(),
        bookingdates: {
            checkin: faker.date.future().toISOString().split("T")[0],
            checkout: faker.date.future().toISOString().split("T")[0],
        },
        additionalneeds: faker.lorem.word()
    };
}