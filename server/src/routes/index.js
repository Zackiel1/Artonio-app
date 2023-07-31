const { Router } = require("express");
const userRouter = require("./userRouter");
const galeryRouter = require("./galeryRouter");

const mainRouter = Router();

//mainRouter.use('/pokemons', pokemonRouter);
//http://localhost:3001/auth/
mainRouter.use("/user", userRouter);
galeryRouter.use("/galery", galeryRouter);

module.exports = mainRouter;
