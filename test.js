const request_url = require('supertest')("https://restful-booker.herokuapp.com/");
const assert = require("chai").expect;


describe("Booking", function () {
    it("Success Create Booking", async function () {

        const response = await request_url
        .post("booking")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send({firstname: "Rizky", lastname: "Azizah", totalprice: 111, depositpaid: true, bookingdates: {checkin: "2018-01-01", checkout: "2019-01-01"}, additionalneeds: "Extra pillows and blanket"});

        assert(response.statusCode).to.eql(200);
    });
    it("Get Booking", async function () {

        const response = await request_url
        .get("booking/2")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send();

        assert(response.statusCode).to.eql(200);
    });
    it("Get Booking IDS", async function () {

        const response = await request_url
        .get("booking")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send();

        assert(response.statusCode).to.eql(200);
    });
})