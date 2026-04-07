var express = require("express");
const { createUser, getUser } = require("../Controllers/user.controller");
var userRouter = express.Router();

userRouter.get("/getUser", getUser)
userRouter.post("/createUser", createUser)

module.exports = { userRouter };