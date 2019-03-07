const request = require("supertest");
const server = require("./server.js");

describe("SERVER", () => {
  describe("GET/", () => {
    it("should return OK code 200", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return type json", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });

    it("should return api: working", async () => {
      const res = await request(server).get("/");
      expect(res.body).toEqual({ api: "working" });
    });
    it("return all users", async () => {
      const res = await request(server).get("/users");
      expect(res.status).toBe(200);
    });
    it("returns code 201 if posting new user is succesful", async () => {
      const res = await request(server)
        .post("/users")
        .send({ username: "yes" });
      expect(res.status).toBe(201);
    });
  });
});
