// index.js
const EventParser = require("./adapters/eventparser");
const Authorizer = require("../../trendmicro-test/Authorizer/authorizer");
const { AuthorizerService } = require("./main");

exports.handler = (event) =>
  AuthorizerService(EventParser.parse(event), Authorizer);
