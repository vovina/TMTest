jest.mock("./adapters/connection-service.js");

const { SecurityGroupService } = require("./main");
const { ConnectionService } = require("./adapters/connection-service");

jest.mock("./adapters/connection-service", () => {
  return {
    ConnectionService: jest.fn(() => ({
      SecurityGroups: [{ GroupName: "Group_Name" }],
    })),
  };
});

describe("Integration", () => {
  test("SecurityGroupService()", async () => {
    const result = await SecurityGroupService(ConnectionService);
    expect(result.statusCode).toEqual(200);
    expect(result.headers).toHaveProperty("x-custom-header");
    expect(result.headers).toStrictEqual({
      "x-custom-header": "my custom header value",
    });
    expect(result.body).toBe('["Group_Name"]');
  });
});
