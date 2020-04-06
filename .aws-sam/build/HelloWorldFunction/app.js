const AWS = require('aws-sdk')
const ec2 = new AWS.EC2();
exports.lambdaHandler = async ()=> {
// let securityGroupsDesc = ec2.describeSecurityGroups()

// return JSON.stringify(securityGroupsDesc)
  const data =await ec2.describeSecurityGroups().promise();
  SecurityGroupList = data.SecurityGroups.map((SecurityGroup) => SecurityGroup.GroupName)
       const response = {
        statusCode: 200,
        headers: {
            "x-custom-header" : "my custom header value"
        },
        body:JSON.stringify(SecurityGroupList)
    };


    return response;
}