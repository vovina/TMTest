const AWSMock = require("aws-sdk-mock");

exports.ConnectionService = async () => {
  AWSMock.config.update({ region: "us-east-1" });
  return await AWSMock.mock("EC2", "describeSecurityGroups", "myresponse");
};
