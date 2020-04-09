exports.SecurityGroupService = async (ConnectionService) => {
  try {
    const { SecurityGroups } = await ConnectionService();
    SecurityGroupList =
      SecurityGroups &&
      SecurityGroups.map((SecurityGroup) => SecurityGroup.GroupName);
    return (response = {
      statusCode: 200,
      headers: {
        "x-custom-header": "my custom header value",
      },
      body: JSON.stringify(SecurityGroupList),
    });
  } catch (error) {
    throw error;
  }
};
