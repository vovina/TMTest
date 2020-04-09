// index.js
const { ConnectionService } = require("./adapters/connection-service");
const { SecurityGroupService } = require("./main");

exports.handler = () => SecurityGroupService(ConnectionService);
