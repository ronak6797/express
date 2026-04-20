var express = require("express");
const { createUser, getUser, getUserById, updateById, login } = require("../Controllers/user.controller");
var userRouter = express.Router();

userRouter.get("/getUser", getUser)
userRouter.post("/createUser", createUser)
userRouter.get("/getUser/:id", getUserById)
userRouter.patch("/updateUser/:id", updateById)
userRouter.post("/login", login)

module.exports = { userRouter };