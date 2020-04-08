const AWS = require("aws-sdk");
const AWSMock = require("aws-sdk-mock");

const Handler = require("./app.js");

describe("Tests Handler", function () {
  it("verifies successful response", async () => {
    AWSMock.setSDKInstance(AWS);

    const result = AWSMock.mock("EC2", "describeSecurityGroups", "myresponse");
    // const EC2 = new AWS.EC2({ describeSecurityGroups: "2016-11-15" });
    // // console.log("result", result);
    // // expect(userData).toContain('ECS_CLUSTER')
    // AWS.restore();
    // expect(result).to.be.an("object");
    // expect(result.statusCode).to.equal(200);
    // expect(result.body).to.be.an("string");

    // let response = JSON.parse(result.body);

    // expect(response).to.be.an("object");
    // expect(response.message).to.be.equal("Security Group Name");
    // expect(response.location).to.be.an("string");
    Handler().then((response) => {
      expect(response.statusCode).toEqual(200);
    });
  });
});
