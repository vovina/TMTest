exports.AuthorizerService = async (event, Authorizer) => {
  try {
    const token = event.authorizationToken.toLowerCase();
    const methodArn = event.methodArn;

    switch (token) {
      case "allow":
        return await Authorizer.generateAuthResponse("user", "Allow", methodArn);
      case "deny":
        return await Authorizer.generateAuthResponse("user", "Deny", methodArn);
      default:
        return Promise.reject("Error: Invalid token"); // Returns 500 Internal Server Error
    }
  } catch (error) {
    throw error;
  }
};
