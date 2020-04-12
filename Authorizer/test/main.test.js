const { AuthorizerService } = require("../main");
const Authorizer = require("../authorizer");

const fakeEvent = {
  type: "TOKEN",
  methodArn:
    "arn:aws:execute-api:ap-southeast-2:882849831643:8vwwompmje/ESTestInvoke-stage/GET/",
  authorizationToken: "allow",
};
describe("AuthorizerService", () => {
  test("integration", async () => {
    const result = await AuthorizerService(fakeEvent, Authorizer);

    expect(result.policyDocument).toBeDefined();
    expect(result.context).toBeDefined();
    expect(result.policyDocument.Statement).toBeDefined();
    expect(result.principalId).toBe("user");
  });
});
