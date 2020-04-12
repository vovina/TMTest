const { generatePolicyDocument } = require("../policy");

describe("Test suites for generatePolicyDocument()", () => {
  test("return null if even one of the arguments are not passed", () => {
    const result = generatePolicyDocument();
    expect(result).toBe(null);
  });

  test("return policyDocument if arguments are passed", () => {
    const params = { effect: "EFFECT", methodArn: "METHOD_ARN" };
    const result = generatePolicyDocument(params.effect, params.methodArn);
    expect(result).toHaveProperty("Version");
    expect(result).toHaveProperty("Statement");
    expect(result.Statement).toHaveLength(1);
    expect(result.Statement).toMatchObject([
      {
        Action: "execute-api:Invoke",
        Effect: params.effect,
        Resource: params.methodArn,
      },
    ]);
  });
});
