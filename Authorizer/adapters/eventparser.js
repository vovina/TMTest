const Joi = require("@hapi/joi");

const eventSchema = Joi.object({
  authorizationToken: Joi.string().required(),
  methodArn: Joi.string().required(),
  type: Joi.string().required()
});

exports.parse = (eventObject) => {
  const { value: payload, error } = eventSchema.validate(eventObject);

  if (error) {
    throw Error(`Payload error => ${error}.`);
  }
  return payload;
};
