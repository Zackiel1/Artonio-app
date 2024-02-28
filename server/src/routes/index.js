const { Router } = require("express");
const userRouter = require("./userRouter");
const galeryRouter = require("./galeryRouter");
const adminRouter = require("./adminRouter");
const passport = require('passport');
const googleRouter = require("./googleRouter.js");
require("../services/google.js")

const mainRouter = Router();

//mainRouter.use('/pokemons', pokemonRouter);
//http://localhost:3001/auth/
mainRouter.use("/user", userRouter);
mainRouter.use("/gallery", galeryRouter);
mainRouter.use("/admin", adminRouter);


// mainRouter.use("/auth", passport.authenticate("auth-google", {
//     scope: [ 'profile', 'email' ],
//     session: false
//   }), googleRouter)

module.exports = mainRouter;
