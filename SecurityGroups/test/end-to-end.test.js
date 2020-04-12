const { handler } = require("../index");

describe("end-to-end functionality", () => {
  test("SecurityGroupService()", async () => {
    handler().then((response) => {
      expect(response.statusCode).toEqual(200);
      expect(response.body).toEqual(200);
    });
  });
});
