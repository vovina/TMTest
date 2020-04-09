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

exports.generatePolicyDocument = (effect, methodArn) => {
  if (!effect || !methodArn) return null;

  const policyDocument = {
    Version: "2012-10-17",
    Statement: [
      {
        Action: "execute-api:Invoke",
        Effect: effect,
        Resource: methodArn,
      },
    ],
  };

  return policyDocument;
};
