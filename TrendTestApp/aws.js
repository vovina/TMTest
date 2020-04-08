const AWS = require("aws-sdk");
const ec2 = new AWS.EC2();

const fetchData = async () => {
  return await ec2.describeSecurityGroups().promise();
};

exports.fetchData = fetchData;
