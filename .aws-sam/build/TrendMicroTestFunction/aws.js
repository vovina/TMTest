const AWS = require("aws-sdk");
const ec2 = new AWS.EC2();

export const fetchData = async () => {
  return await ec2.describeSecurityGroups().promise();
};
