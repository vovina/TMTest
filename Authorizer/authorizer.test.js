const { handler } = require("./authorizer");

describe("Tests Handler", () => {
  let event;
  beforeEach(() => {
    event = {
      type: "TOKEN",
      authorizationToken: "allow",
      methodArn:
        "arn:aws:execute-api:ap-southeast-2:882849831643:imd4erp90m/ESTestInvoke-stage/GET/",
    };
  });

  it("test 1", () => {
    const result = handler(event);
    expect(result.principalId).toEqual("user");
    expect(result.context.Access).toEqual("Granted");
    expect(result.policyDocument.Statement[0].Effect).toEqual("Allow");
    expect(result.policyDocument.Statement[0].Resource).toEqual(
      "arn:aws:execute-api:ap-southeast-2:882849831643:imd4erp90m/ESTestInvoke-stage/GET/"
    );
  });
  it("test 2", () => {
    const event2 = { ...event, authorizationToken: "deny" };
    const result = handler(event2);
    expect(result.policyDocument.Statement[0].Effect).toEqual("Deny");
  });

  it("test 3", async () => {
    const event3 = { ...event, authorizationToken: "" };
    const result = handler(event3);
    console.log("resulttttt", result);
    expect(result).toBe("Error: Invalid token");
  });
});
