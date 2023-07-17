const getUserByEmail = require("../controllers/getUserByEmail");
const {
  postUserHandler,
  getVerifyHandler,
} = require("../handlres/userHandlers");
const { Router } = require("express");

const userRouter = Router();

userRouter.post("/createUser", postUserHandler);
userRouter.get("/verify", getVerifyHandler);

module.exports = userRouter;
