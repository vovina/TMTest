import { fetchData } from "./aws";

const Handler = async () => {
  const data = fetchData;
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
