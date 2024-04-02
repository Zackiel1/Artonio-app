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

const express = require('express');
const passport = require('passport');
const { CrossOrigin } = require('cors');
require("../services/google.js")

const userRouter = Router();

//http://localhost:3001/user/recover

userRouter.post("/createUser", postUserHandler); // crea el usuario
userRouter.get("/verify", getVerifyHandler); //maneja la verificacion del token al crear el usuario
userRouter.get("/verifyToken", getVerifyRecoverUserHandler); //maneja la verificacion del token al recuperar la contraseña
userRouter.post("/login", postLoginHandler);
userRouter.put("/updatePass", putPasswordHandler); // actuliza la pass -- falta acomodarlo bien/ cambiar a metodo pacth
userRouter.post("/contact", CrossOrigin(), postContactHandler);
userRouter.post("/recover", postUserRecoverHandler);
userRouter.post("/ResendVerifyMessage", postResendMessageHandler);



// userRouter.get('/google', passport.authenticate("auth-google", {
//   scope: [ 'profile', 'email' ]
// }));

// userRouter.get('/google/callback',
//   passport.authenticate('auth-google', { 
//     successRedirect: "http://localhost:3000/",
//     failureRedirect: 'http://localhost:3000/login' 
//   }),
// );




module.exports = userRouter;
