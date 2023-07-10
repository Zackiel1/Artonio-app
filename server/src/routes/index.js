const { Router } = require("express");
const userRouter = require("./userRouter");

const mainRouter = Router();

//mainRouter.use('/pokemons', pokemonRouter);
//http://localhost:3001/auth/
mainRouter.use("/user", userRouter);

module.exports = mainRouter;
