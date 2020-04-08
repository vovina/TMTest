const AWSMock = require("aws-sdk-mock");

const Handler = async () => {
  const data = AWSMock.mock("EC2", "describeSecurityGroups", "myresponse");
  SecurityGroupList = data.SecurityGroups.map(
    (SecurityGroup) => SecurityGroup.GroupName
  );
  const response = {
    statusCode: 200,
    headers: {
      "x-custom-header": "my custom header value",
    },
    body: JSON.stringify(SecurityGroupList),
  };

  return response;
};

export default Handler;
