const { Router } = require("express");
const userRouter = require("./userRouter");
const galeryRouter = require("./galeryRouter");
const adminRouter = require("./adminRouter");

const mainRouter = Router();

//mainRouter.use('/pokemons', pokemonRouter);
//http://localhost:3001/auth/
mainRouter.use("/user", userRouter);
mainRouter.use("/gallery", galeryRouter);
mainRouter.use("/admin", adminRouter);

module.exports = mainRouter;
