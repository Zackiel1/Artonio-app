const {
  postUserHandler,
  getVerifyHandler,
  getVerifyRecoverUserHandler,
  postLoginHandler,
  putPasswordHandler,
  postContactHandler,
  postUserRecoverHandler,
  postResendMessageHandler,
} = require("../handlres/userHandlers");
const { Router } = require("express");
const OAuth2 = require("../services/oAuth2");
const EnviarMail = require("../services/EnviarMail");

const userRouter = Router();

//http://localhost:3001/user/recover

userRouter.post("/createUser", postUserHandler); // crea el usuario
userRouter.get("/verify", getVerifyHandler); //maneja la verificacion del token al crear el usuario
userRouter.post("/verifyToken", getVerifyRecoverUserHandler); //maneja la verificacion del token al recuperar la contraseña
userRouter.post("/login", postLoginHandler);
userRouter.put("/updatePass", putPasswordHandler); // actuliza la pass -- falta acomodarlo bien/ cambiar a metodo pacth
userRouter.post("/contact", postContactHandler);
userRouter.post("/recover", postUserRecoverHandler);
userRouter.post("/ResendVerifyMessage", postResendMessageHandler);

module.exports = userRouter;
