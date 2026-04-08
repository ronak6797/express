var express = require("express");
const { createUser, getUser, getUserById, updateById } = require("../Controllers/user.controller");
var userRouter = express.Router();

userRouter.get("/getUser", getUser)
userRouter.post("/createUser", createUser)
userRouter.get("/getUser/:id", getUserById)
userRouter.patch("/updateUser/:id", updateById)

module.exports = { userRouter };