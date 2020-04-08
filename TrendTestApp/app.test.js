jest.mock("./aws");

const { handler } = require("./app");

describe("Tests Handler", function () {
  it("verifies successful response", async () => {
    // let response = JSON.parse(result.body);
    // expect(response).to.be.an("object");
    // expect(response.message).to.be.equal("Security Group Name");
    // expect(response.location).to.be.an("string");
    handler().then((response) => {
      expect(response.statusCode).toEqual(200);
      expect(response.body).toEqual(200);
    });
  });
});
