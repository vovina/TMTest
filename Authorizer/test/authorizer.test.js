const { generateAuthResponse } = require("../authorizer");
const { generatePolicyDocument } = require("../policy");

jest.mock("../policy", () => {
  return {
    generatePolicyDocument: jest.fn(() => ({
      Statement: [
        {
          Action: "execute-api:Invoke",
          Effect: {
            Access: "Granted",
          },
          Resource: "methodArn",
        },
      ],
    })),
  };
});

describe("generateAuthResponse()", () => {
  test("reducing image", async () => {
    const methodArn = "methodArn";

    const result = generateAuthResponse("user", "Allow", methodArn);
    expect(result.principalId).toBe("user");
    expect(result.context).toStrictEqual({ Access: "Granted" });
    expect(generatePolicyDocument).toBeCalled();
    expect(result.policyDocument.Statement).toStrictEqual([
      {
        Action: "execute-api:Invoke",
        Effect: { Access: "Granted" },
        Resource: methodArn,
      },
    ]);
    expect(result.policyDocument.Statement).toHaveLength(1);
  });
});
