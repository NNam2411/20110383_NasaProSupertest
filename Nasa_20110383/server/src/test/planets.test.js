const request = require("supertest");
const app = require("../../app");

describe("Test GET /planets", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app).get("/planets").expect(200);
  });
});

describe("Test GET /launches", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app).get("/launches").expect(200);
  });
});
