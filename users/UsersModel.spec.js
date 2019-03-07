const db = require("../data/dbConfig");
const Users = require("./UsersModel");

describe("UsersModel", () => {
  afterEach(async () => {
    await db("users").truncate();
  });

  it("should insert user into the db", async () => {
    let user = await Users.insert({ username: "christian" });
    expect(user.username).toBe("christian");
  });
});
