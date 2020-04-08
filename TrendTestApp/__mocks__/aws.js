const AWSMock = require("aws-sdk-mock");

const fetchData = async () => {
  return AWSMock.mock("EC2", "describeSecurityGroups", "myresponse");
};

exports.fetchData = fetchData;
