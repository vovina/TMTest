jest.mock("../adapters/connection-service");

const { SecurityGroupService } = require("../main");
const { ConnectionService } = require("../adapters/connection-service");

describe("Integration", () => {
  // it("verifies successful response", async () => {
  // let response = JSON.parse(result.body);
  // expect(response).to.be.an("object");
  // expect(response.message).to.be.equal("Security Group Name");
  // expect(response.location).to.be.an("string");

  // handler().then((response) => {
  //   expect(response.statusCode).toEqual(200);
  //   expect(response.body).toEqual(200);
  // });

  test("SecurityGroupService()", async () => {
    // const result = await SecurityGroupService(ConnectionService);
    SecurityGroupService(ConnectionService).then((response) => {
      expect(response.statusCode).toEqual(200);
      expect(response.body).toEqual(200);
    });
    // expect(result.policyDocument).toBeDefined();
    // expect(result.context).toBeDefined();
    // expect(result.policyDocument.Statement).toBeDefined();
    // expect(result.principalId).toBe("user");
  });
});
// });
