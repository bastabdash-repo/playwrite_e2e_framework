export const bookingSchema = {
    firstname: expect.any(String),
    lastname: expect.any(String),
    totalprice: expect.any(Number),
    depositpaid: expect.any(Boolean),
    bookingdates: {
        checkin: expect.any(String),
        checkout: expect.any(String),
    },
    additionalneeds: expect.any(String),
};
