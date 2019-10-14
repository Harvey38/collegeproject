const express = require("express");
const { showform,login,profile} = require('../Controller/viewController.js');
const { isLoggedin } = require("./../controller/authcontroller");
const viewRouter = express.Router();
viewRouter.get("/addagent", showform);
///api/addagent
viewRouter.get("/login",login);
viewRouter.get("/profile",isLoggedin,profile);
module.exports = viewRouter;