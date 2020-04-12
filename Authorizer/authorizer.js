const { generatePolicyDocument } = require("./policy");

exports.generateAuthResponse = (principalId, effect, methodArn) => {
  const context = {
    Access: "Granted",
  };
  const policyDocument = generatePolicyDocument(effect, methodArn);

  return {
    principalId,
    context,
    policyDocument,
  };
};
