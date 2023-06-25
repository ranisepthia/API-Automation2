const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

const AUTH = "Bearer 0833dfe3-6917-4b19-9eb4-717937f86255"

describe("PUT /units", function () {
  it("Put new units", async function () {
    const response = await request(app)
      .put("/units")
      .send({
        "name": "update-meter",
        "description": "no-meter"
      });

    expect(response.status).to.eql(401);
    expect(response.body.name).to.eql("update-meter");
    expect(response.body.description).to.eql("no-meter");

    const resp2 = await respGetUnits(2);
    // Further assertions or code logic can be added here

  });
});
