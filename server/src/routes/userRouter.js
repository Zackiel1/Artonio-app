const getUserByEmail = require("../controllers/getUserByEmail");
const {
  postUserHandler,
  getVerifyHandler,
  postLoginHandler,
} = require("../handlres/userHandlers");
const { Router } = require("express");

const userRouter = Router();

userRouter.post("/createUser", postUserHandler);
userRouter.get("/verify", getVerifyHandler);
userRouter.post("/login", postLoginHandler);

module.exports = userRouter;
