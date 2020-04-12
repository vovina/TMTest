// index.js
const { ConnectionService } = require("./adapters/connection-service");
const { SecurityGroupService } = require("./main");

exports.handler = async () => await SecurityGroupService(ConnectionService);
