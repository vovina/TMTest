const EventParser = require("../../adapters/eventparser");

describe("EventParser.parse() ", () => {
  test("returns parsed params when event object has all required properties with right type", async () => {
    const payload = {
      authorizationToken: "authorizationToken",
      methodArn: "methodArn",
    };

    const result = EventParser.parse(payload);

    expect(result).toBeDefined();
    expect(result.authorizationToken).toBe(payload.authorizationToken);
    expect(result.methodArn).toBe(payload.methodArn);
  });

  test("throws when event object has missing required params", async () => {
    const payload = {
      authorizationToken: "authorizationToken",
    };

    expect(() => EventParser.parse(payload)).toThrow();
  });

  test("throws when event object has required params but with incorrect type", async () => {
    const payload = {
      authorizationToken: ["authorizationToken"],
      methodArn: "methodArn",
    };

    expect(() => EventParser.parse(payload)).toThrow();
  });
});
