const {
  postUserHandler,
  getVerifyHandler,
  postLoginHandler,
  putPasswordHandler,
} = require("../handlres/userHandlers");
const { Router } = require("express");

const userRouter = Router();

userRouter.post("/createUser", postUserHandler); // crea el usuario
userRouter.get("/verify", getVerifyHandler); //maneja la verificacion del token al crear el usuario
userRouter.post("/login", postLoginHandler);
userRouter.put("/updatePass", putPasswordHandler); // actuliza la pass -- falta acomodarlo bien

module.exports = userRouter;
