const AWS = require("aws-sdk");
const ec2 = new AWS.EC2();

exports.ConnectionService = async () => {
  console.log("i am real", ConnectionService);

  return await ec2.describeSecurityGroups().promise();
};
