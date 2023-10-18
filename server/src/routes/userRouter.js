const {
  postUserHandler,
  getVerifyHandler,
  getVerifyRecoverUserHandler,
  postLoginHandler,
  putPasswordHandler,
  postContactHandler,
  postUserRecoverHandler,
} = require("../handlres/userHandlers");
const { Router } = require("express");
const OAuth2 = require("../services/oAuth2");
const EnviarMail = require("../services/EnviarMail");

const userRouter = Router();

//http://localhost:3001/user/recover

userRouter.post("/createUser", postUserHandler); // crea el usuario
userRouter.get("/verify", getVerifyHandler); //maneja la verificacion del token al crear el usuario
userRouter.post("/verifyToken", getVerifyRecoverUserHandler); //maneja la verificacion del token al recuperar la contraseña
userRouter.get("/token", (req, res) => {
  res.send("llegue a cambiar pass")
})
userRouter.post("/login", postLoginHandler);
userRouter.put("/updatePass", putPasswordHandler); // actuliza la pass -- falta acomodarlo bien
userRouter.post("/contact", postContactHandler);
userRouter.post("/recover", postUserRecoverHandler);


//prueba
userRouter.get("/prueba", async (req, res) => {
  try {
    const quepaso = await EnviarMail();
    res.status(200).json(quepaso);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = userRouter;
