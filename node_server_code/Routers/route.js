var express = require("express");
var api = express.Router();
var routers = require("./router")
var authorize = require("../app/Controllers/user_controller");


api.use("/user", routers.User_Router);

module.exports = api;