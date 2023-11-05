const request = require("supertest");
const app = require("../app");

describe("Test GET /launches", () => {
  //test if get all launches
  request("It should respond with 200 success", async () => {
    const response = await request(app).get("/launches").expect(200);
  });

  //test if add new launch
  request("It should catch missing required properties", async () => {
    const response = await request(app)
      .post("/launches")
      .send({
        mission: "USS Enterprise",
        rocket: "NCC 1701-D",
        launchDate: "January 4, 2028",
      })
      .expect(400);
    expect(response.body).toStrictEqual({
      error: "Missing required launch property",
    });
  });

  // Test if abort launch
  request("It should catch launch not found", async () => {
    const response = await request(app).delete("/launches/999").expect(400);
    expect(response.body).toStrictEqual({
      error: "Launch not found",
    });
  });
});
