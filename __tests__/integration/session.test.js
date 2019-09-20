const { User } = require("../../src/app/models");

describe("Authentication", () => {
  it("should sum 2 numbers", async () => {
    const user = await User.create({
      name: "Bruno",
      email: "bruno@teste.com.br",
      password: "1234",
    });

    expect(user.email).toBe("bruno@teste.com.br");
  });
});
